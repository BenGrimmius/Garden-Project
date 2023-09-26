import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const plusButton = (
  <FontAwesomeIcon
    icon={faCirclePlus}
    style={{
      fontSize: '60px',
      color: 'rgb(112, 188, 112)',
      margin: '.5rem',
      cursor: 'pointer',
    }}
  />
);

export default function MyGardenScreen({ onNavigate }) {
  return (
    <>
      <div className="main-wallpaper" />
      <div className="row space-between">
        <button
          className="logout-button"
          onClick={() => onNavigate('sign-out')}>
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
      <div className="row"></div>
    </>
  );
}
