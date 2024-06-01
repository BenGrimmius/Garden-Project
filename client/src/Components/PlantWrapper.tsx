import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleInfo, faMinimize } from '@fortawesome/free-solid-svg-icons';

export default function PlantWrapper({
  plantId,
  activeIndex,
  watering,
  photoUrl,
  name,
  cycle,
  sunlight,
  handleIndex,
  addDeleteIcon,
}) {
  return (
    <div
      className={
        activeIndex === plantId ? 'plant-wrapper' : 'plant-wrapper height-150'
      }
      key={plantId}>
      <div className="row" style={{ height: '150px' }}>
        <div className="col-40">
          <h2
            style={{
              margin: '5px',
              fontSize: '25px',
              overflowWrap: 'break-word',
              display: 'flex',
              justifyContent: 'center',
            }}>
            {name}
          </h2>
        </div>
        <div className="col-40">
          <img src={photoUrl} alt={name} className="plant-img" />
        </div>
        <div
          className="col-20"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '100%',
          }}>
          <div style={{ margin: '10px' }}>{addDeleteIcon}</div>
          <div onClick={() => handleIndex(plantId)}>
            {plantId === activeIndex ? (
              <FontAwesomeIcon icon={faMinimize} style={{ fontSize: '30px' }} />
            ) : (
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{
                  fontSize: '30px',
                  margin: '.5rem',
                  cursor: 'pointer',
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className={activeIndex === plantId ? '' : 'hidden'}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '0',
          }}>
          <div
            className="col-30"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '20px',
            }}>
            <p className="accordion-data">
              <b>Cycle:</b>
            </p>
            <p className="accordion-data">
              <b>Sunlight:</b>
            </p>
            <p className="accordion-data">
              <b>Watering:</b>
            </p>
          </div>
          <div
            className="col-30"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <p className="accordion-data">{cycle}</p>
            <p className="accordion-data">{sunlight}</p>
            <p className="accordion-data">{watering}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
