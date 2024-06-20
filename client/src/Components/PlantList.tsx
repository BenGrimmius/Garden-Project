import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlantWrapper from './PlantWrapper';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, ChangeEvent, FormEvent } from 'react';

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
  const [noPlantsFound, setNoPlantsFound] = useState<boolean>(false);
  const [plantAdded, setPlantAdded] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const userId = sessionStorage.getItem('userId');

  const placeHolder = '/placeHolder.png';

  const handleIndex = (i: number) => {
    if (activeIndex === i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!searchQuery.trim()) {
        setErrorMessage('Search query cannot be empty.');
        return;
      }
      const response = await fetch(
        `https://perenual.com/api/species-list?key=sk-zFJl6459c92238f02823&q=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const plantArray: Plant[] = data.data.map((plantData: any) => ({
        plantId: plantData.id,
        plantName: plantData.common_name,
        plantCycle:
          plantData.cycle !==
          "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
            ? plantData.cycle
            : 'No info available',
        plantSunlight: Array.isArray(plantData.sunlight)
          ? plantData.sunlight.join(', ')
          : plantData.sunlight !==
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

      const filteredPlants = plantArray.filter((plant) =>
        plant.plantName.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const uniquePlants = Array.from(
        filteredPlants.reduce((map, plant) => {
          if (!map.has(plant.plantName.toLowerCase())) {
            map.set(plant.plantName.toLowerCase(), plant);
          }
          return map;
        }, new Map<string, Plant>())
      ).map(([, plant]) => plant);

      setFetchedPlants(uniquePlants);
      setNoPlantsFound(uniquePlants.length === 0);
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Failed to fetch plant data. Please try again.');
    }
  };

  const handleAddButton = async (plant: Plant) => {
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
      setPlantAdded(plant.plantId);
      setUserPlants((prevUserPlants) => [...prevUserPlants, addedPlant]);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setPlantAdded(null);
          setFadeOut(false);
        }, 1000);
      }, 1000);
    } catch (error) {
      console.error(`Error adding plant: `, error);
      setErrorMessage('Failed to fetch plant data. Please try again.');
    }
  };

  return (
    <div className="browse-list-container">
      <div>
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
        <div style={{ height: '80px' }}>
          {errorMessage && <h2>{errorMessage}</h2>}
          {noPlantsFound && <h2>No Plants Found.</h2>}
        </div>
      </div>
      {fetchedPlants.map((plant) => (
        <div
          key={plant.plantId}
          style={{ display: 'flex', alignItems: 'center' }}>
          <PlantWrapper
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
          {plantAdded === plant.plantId && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={fadeOut ? 'fade-out' : ''}
              style={{
                fontSize: '30px',
                color: 'lawngreen',
                margin: '0px 10px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
