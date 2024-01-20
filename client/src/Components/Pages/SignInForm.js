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
      const { token } = await res.json();
      sessionStorage.setItem('token', token);
      onSignIn();
    } catch (err) {
      alert(`Error signing in: ${err}`);
    }
  }

  return (
    <>
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
        </div>
      </div>
    </>
  );
}
