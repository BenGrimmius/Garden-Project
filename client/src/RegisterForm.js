export default function RegisterForm({ onNavigate }) {
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
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      onNavigate('sign-in');
    }
  }

  return (
    <>
      <div className="form-wallpaper" />
      <div className="container">
        <div className="register-modal">
          <h1 style={{ fontSize: '40px' }}>Create An Account</h1>
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
                    marginBottom: '.5rem',
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
              onClick={() => onNavigate('sign-in')}>
              Oh wait! <br />I have an account already!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
