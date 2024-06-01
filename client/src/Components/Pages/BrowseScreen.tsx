import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import PlantList from '../PlantList';
export default function BrowseScreen({ onNavigate }) {
  const backButton = (
    <FontAwesomeIcon
      icon={faBackward}
      style={{
        fontSize: '50px',
        margin: '1rem',
        position: 'absolute',
        left: '0',
        cursor: 'pointer',
      }}
      onClick={() => onNavigate('my-garden')}
    />
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
      }}>
      <div className="row jc-space-between">
        {backButton}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '50px', margin: '5px 20px', width: '90%' }}>
            Find your plant
          </h1>
        </div>
      </div>
      <div>
        <PlantList />
      </div>
    </div>
  );
}
