import './App-styles.css';
import './App-layout.css';
import { useState } from 'react';
import SignInForm from './Components/Pages/SignInForm';
import RegisterForm from './Components/Pages/RegisterForm';
import MyGardenScreen from './Components/Pages/MyGardenScreen';
import BrowseScreen from './Components/Pages/BrowseScreen';

function App() {
  const [page, setPage] = useState('sign-in');
  const [userId, setUserId] = useState(null);

  function handleNavigate(page) {
    setPage(page);
    if (page === 'sign-out') {
      sessionStorage.removeItem('token');
      setPage('sign-in');
    }
  }
  function handleSignIn(userId) {
    setUserId(userId);
    handleNavigate('my-garden');
  }
  return (
    <div className="App">
      {(page === 'sign-in' || page === 'register') && (
        <div className="form-wallpaper" />
      )}
      {(page === 'my-garden' || page === 'browse-screen') && (
        <div className="main-wallpaper" />
      )}
      {page === 'sign-in' && (
        <SignInForm onNavigate={handleNavigate} onSignIn={handleSignIn} />
      )}
      {page === 'register' && <RegisterForm onNavigate={handleNavigate} />}
      {page === 'my-garden' && (
        <MyGardenScreen
          onNavigate={handleNavigate}
          onSignout={handleNavigate}
          userId={userId}
        />
      )}
      {page === 'browse-screen' && <BrowseScreen onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
