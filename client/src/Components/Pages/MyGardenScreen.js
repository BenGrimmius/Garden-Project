import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function MyGardenScreen({ onNavigate, onSignout }) {
  const plusButton = (
    <FontAwesomeIcon
      icon={faCirclePlus}
      style={{
        fontSize: '60px',
        color: 'rgb(112, 188, 112)',
        margin: '.5rem',
        cursor: 'pointer',
      }}
      onClick={() => onNavigate('browse-screen')}
    />
  );

  return (
    <div className="container">
      <div className="row as-flex-start jc-space-between">
        <button className="logout-button" onClick={() => onSignout('sign-out')}>
          Logout
        </button>
        <h1
          style={{
            fontSize: '50px',
            color: 'white',
            margin: '10px',
            textShadow: '5px 1px 5px black',
          }}>
          My
          <br />
          Garden
        </h1>
        {plusButton}
      </div>
    </div>
  );
}
