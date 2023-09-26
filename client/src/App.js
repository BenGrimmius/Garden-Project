import './App-styles.css';
import './App-layout.css';
import { useState } from 'react';
import SignInForm from './SignInForm';
import RegisterForm from './RegisterForm';
import MyGardenScreen from './MyGardenScreen';

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
      {page === 'sign-in' && (
        <SignInForm
          onNavigate={handleNavigate}
          onSignIn={() => handleNavigate('my-garden')}
        />
      )}
      {page === 'register' && <RegisterForm onNavigate={handleNavigate} />}
      {page === 'my-garden' && <MyGardenScreen onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
