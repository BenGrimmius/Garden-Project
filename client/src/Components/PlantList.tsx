import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlantWrapper from './PlantWrapper';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import placeHolder from '../images/placeHolder.png';

interface Plant {
  plantId: number;
  plantName: string;
  plantCycle: string;
  plantWatering: string;
  plantImage: string;
  plantSunlight: string;
}

export default function PlantList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fetchedPlants, setFetchedPlants] = useState<Plant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userPlants, setUserPlants] = useState<Plant[]>([]);
  const userId = sessionStorage.getItem('userId');

  const handleIndex = (i: number) => {
    if (activeIndex === i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://perenual.com/api/species-list?key=sk-zFJl6459c92238f02823&q=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (!searchQuery.trim()) {
        setErrorMessage('Search query cannot be empty.');
        return;
      }
      setErrorMessage('');
      const data = await response.json();
      const plantArray = data.data.map((plantData) => ({
        plantId: plantData.id,
        plantName: plantData.common_name,
        plantCycle:
          plantData.cycle !==
          "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
            ? plantData.cycle
            : 'No info available',
        plantSunlight:
          plantData.sunlight !==
          "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
            ? plantData.sunlight
            : 'No info available',
        plantWatering:
          plantData.watering !==
          "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
            ? plantData.watering
            : 'No info available',
        plantImage:
          plantData.default_image &&
          plantData.default_image.regular_url &&
          plantData.default_image.regular_url !==
            'https://perenual.com/storage/image/upgrade_access.jpg'
            ? plantData.default_image.regular_url
            : placeHolder,
      }));
      for (let i = 0; i < plantArray.length; i++) {
        if (Array.isArray(plantArray[i].plantSunlight)) {
          plantArray[i].plantSunlight = plantArray[i].plantSunlight.join(', ');
        }
      }
      setFetchedPlants(plantArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddButton = async (plant) => {
    try {
      const isPlantAdded = userPlants.some(
        (userPlant) => userPlant.plantId === plant.plantId
      );
      if (isPlantAdded) {
        setErrorMessage('This plant is already added to your list.');
        return;
      }
      const response = await fetch('/api/addplants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plantId: plant.plantId,
          plantName: plant.plantName,
          cycle: plant.plantCycle,
          watering: plant.plantWatering,
          photoUrl: plant.plantImage,
          sunlight: plant.plantSunlight,
          userId,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const addedPlant = await response.json();
      setErrorMessage('');
      setUserPlants((prevUserPlants) => [...prevUserPlants, addedPlant]);
    } catch (error) {
      console.error(`Error adding plant: `, error);
      setErrorMessage('Failed to fetch plant data. Please try again.');
    }
  };

  return (
    <div className="browse-list-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={searchQuery}
          onChange={handleChange}
          style={{ width: '70%', height: '50px', fontSize: '30px' }}
        />
        <button
          type="submit"
          style={{ height: '40px', fontSize: '20px', margin: '10px' }}>
          Search
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {fetchedPlants.map((plant) => (
        <PlantWrapper
          key={plant.plantId}
          plantId={plant.plantId}
          activeIndex={activeIndex}
          watering={plant.plantWatering}
          photoUrl={plant.plantImage}
          name={plant.plantName}
          cycle={plant.plantCycle}
          sunlight={plant.plantSunlight}
          handleIndex={handleIndex}
          addDeleteIcon={
            <FontAwesomeIcon
              icon={faPlus}
              style={{ fontSize: '30px', cursor: 'pointer' }}
              onClick={() => handleAddButton(plant)}
            />
          }
        />
      ))}
    </div>
  );
}
