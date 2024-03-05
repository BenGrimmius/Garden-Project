import './App-styles.css';
import './App-layout.css';
import { useState } from 'react';
import SignInForm from './Components/Pages/SignInForm';
import RegisterForm from './Components/Pages/RegisterForm';
import MyGardenScreen from './Components/Pages/MyGardenScreen';
import BrowseScreen from './Components/Pages/BrowseScreen';
// import PlantList from './Components/PlantList';

function App() {
  const [page, setPage] = useState('sign-in');
  function handleNavigate(page) {
    setPage(page);
    if (page === 'sign-out') {
      sessionStorage.removeItem('token');
      setPage('sign-in');
    }
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
        <SignInForm
          onNavigate={handleNavigate}
          onSignIn={() => handleNavigate('my-garden')}
        />
      )}
      {page === 'register' && <RegisterForm onNavigate={handleNavigate} />}
      {page === 'my-garden' && (
        <MyGardenScreen
          onNavigate={handleNavigate}
          onSignout={handleNavigate}
        />
      )}
      {page === 'browse-screen' && <BrowseScreen onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
