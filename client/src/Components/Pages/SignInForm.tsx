export default function SignInForm({ onNavigate, onSignIn }) {
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const userData = Object.fromEntries(formData.entries());
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { token, userId } = await res.json();
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userId', userId);
      onSignIn();
    } catch (err) {
      alert(`Username or password is incorrect: ${err}`);
    }
  }

  async function handleGuestButton() {
    const guestCredentials = {
      username: 'Guest',
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guestCredentials),
    };

    try {
      console.log('Req:', req);
      const res = await fetch('/api/auth/sign-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { token, userId } = await res.json();
      console.log('Token and userId:', { token, userId });
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userId', userId);
      onSignIn();
      onNavigate('my-garden');
    } catch (err) {
      console.error('Unable to sign in as guest:', err);
      alert(`Unable to sign in as guest: ${err}`);
    }
  }

  return (
    <div className="form-container">
      <div className="sign-in-modal">
        <h1 style={{ fontSize: '40px' }}>Login</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <div className="row">
            <label style={{ fontSize: '30px' }}>
              Username
              <input
                required
                name="username"
                type="text"
                style={{
                  display: 'block',
                  height: '30px',
                  width: '200px',
                  fontSize: '25px',
                  marginBottom: '1rem',
                }}
              />
            </label>
          </div>
          <div className="row">
            <label style={{ fontSize: '30px' }}>
              Password
              <input
                required
                name="password"
                type="password"
                style={{
                  display: 'block',
                  height: '30px',
                  width: '200px',
                  fontSize: '40px',
                  marginBottom: '1rem',
                }}
              />
            </label>
          </div>
          <div className="row">
            <input
              type="submit"
              value="Submit"
              style={{ fontSize: '20px', cursor: 'pointer' }}
            />
          </div>
        </form>
        <div className="row">
          <button
            className="nav-to-register-button"
            onClick={() => onNavigate('register')}>
            Don't have an account?
            <br />
            Click here to register!
          </button>
        </div>
        <div className="row" style={{ margin: '0' }}>
          <p>Or</p>
        </div>
        <div className="row">
          <button
            className="continue-as-guest-button"
            onClick={handleGuestButton}>
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}
