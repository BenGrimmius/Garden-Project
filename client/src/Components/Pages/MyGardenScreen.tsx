// MyGardenScreen.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import PlantWrapper from '../PlantWrapper';

interface Plant {
  plantId: number;
  plantName: string;
  cycle: string;
  watering: string;
  photoUrl: string;
  sunlight: string;
}

export interface MyGardenScreenProps {
  onNavigate: (page: string) => void;
  onSignout: (action: string) => void;
  userId: number | null;
}

export default function MyGardenScreen({
  onNavigate,
  onSignout,
}: MyGardenScreenProps) {
  const [userId, setUserId] = useState<number | null>(null);

  const [userPlants, setUserPlants] = useState<Plant[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(Number(storedUserId));
    }
  }, []);

  useEffect(() => {
    if (userId === null) return;
    const fetchUserPlants = async () => {
      try {
        const response = await fetch(`/api/user-plants/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userPlantsData: Plant[] = await response.json();
        setUserPlants(userPlantsData);
      } catch (error) {
        console.error('Error fetching user plants', error);
      }
    };
    fetchUserPlants();
  }, [userId]);

  const handleDelete = async (plantId: number) => {
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

  const handleIndex = (plantId: number) => {
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
