// import peppers from '../images/peppers.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faCircleInfo,
  faMinimize,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import placeHolder from '../images/placeHolder.png';
// import notAvailable from '../images/image-not-available.png';

export default function PlantList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedPlants, setFetchedPlants] = useState([]);

  const addButton = (
    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '30px' }} />
  );
  const iButton = (
    <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: '30px' }} />
  );
  const minimize = (
    <FontAwesomeIcon icon={faMinimize} style={{ fontSize: '30px' }} />
  );

  const handleClick = (i) => {
    if (activeIndex === i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
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
      setFetchedPlants(plantArray);
      console.log('Plant Array: ', plantArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="browse-list-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          style={{ width: '70%', height: '50px', fontSize: '30px' }}
        />
        <button
          type="submit"
          style={{ height: '40px', fontSize: '20px', margin: '10px' }}>
          Search
        </button>
      </form>
      {fetchedPlants.map((plant) => (
        <div className="plant-wrapper" key={plant.plantId}>
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
                {plant.plantName}
              </h2>
            </div>
            <div className="col-40">
              <img
                src={plant.plantImage}
                alt="placeholder peppers"
                className="plant-img"
              />
            </div>
            <div
              className="col-20"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                height: '100%',
              }}>
              <div style={{ margin: '10px' }}>{addButton}</div>
              <div onClick={() => handleClick(plant.plantId)}>
                {plant.plantId === activeIndex ? minimize : iButton}
              </div>
            </div>
          </div>
          <div className={activeIndex === plant.plantId ? '' : 'hidden'}>
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
                <p className="accordion-data">{plant.plantCycle}</p>
                <p className="accordion-data">{plant.plantSunlight}</p>
                <p className="accordion-data">{plant.plantWatering}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
