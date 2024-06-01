import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import PlantWrapper from '../PlantWrapper';

export default function MyGardenScreen({ onNavigate, onSignout }) {
  const [userPlants, setUserPlants] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const userId = Number(sessionStorage.getItem('userId'));

  useEffect(() => {
    const fetchUserPlants = async () => {
      try {
        const response = await fetch(`/api/user-plants/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userPlantsData = await response.json();
        setUserPlants(userPlantsData);
      } catch (error) {
        console.error('Error fetching user plants', error);
      }
    };
    fetchUserPlants();
  }, [userId]);

  const handleDelete = async (plantId) => {
    try {
      const response = await fetch(`/api/user-plants/${userId}/${plantId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setUserPlants((prevPlants) =>
        prevPlants.filter((plant) => plant.plantId !== plantId)
      );
    } catch (error) {
      console.error('Error deleting plant', error);
    }
  };

  const handleIndex = (plantId) => {
    setActiveIndex((prevIndex) => (prevIndex === plantId ? null : plantId));
  };

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
    <div>
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
          My Garden
        </h1>
        {plusButton}
      </div>
      <div className="plant-grid">
        {userPlants.map((plant) => (
          <PlantWrapper
            key={plant.plantId}
            plantId={plant.plantId}
            activeIndex={activeIndex}
            watering={plant.watering}
            photoUrl={plant.photoUrl}
            name={plant.plantName}
            cycle={plant.cycle}
            sunlight={plant.sunlight}
            handleIndex={handleIndex}
            addDeleteIcon={
              <FontAwesomeIcon
                icon={faTrash}
                style={{
                  fontSize: '30px',
                  color: 'gray',
                  margin: '.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => handleDelete(plant.plantId)}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
