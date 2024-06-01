import { useState } from 'react';

export default function RegisterForm({ onNavigate }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

  async function checkUsernameAvailability(username) {
    try {
      const res = await fetch(`/api/auth/check-username?username=${username}`);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content-type');
      }
      const data = await res.json();
      return data.isAvailable;
    } catch (err) {
      console.error(`Error checking username: ${err}`);
      return false;
    }
  }

  async function handleUsernameChange(event) {
    const newUsername = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: newUsername,
    }));

    if (newUsername.trim()) {
      const available = await checkUsernameAvailability(newUsername);
      setIsUsernameAvailable(available);
    } else {
      setIsUsernameAvailable(true);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isUsernameAvailable) {
      alert('Username is already taken. Please choose another one.');
      return;
    }

    try {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      onNavigate('sign-in');
    } catch (err) {
      console.error('Error registering user:', err);
      alert('Error registering user. Please try again.');
    }
  }

  return (
    <>
      <div className="form-container">
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
                  value={formData.username}
                  onChange={handleUsernameChange}
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      password: e.target.value,
                    }))
                  }
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
