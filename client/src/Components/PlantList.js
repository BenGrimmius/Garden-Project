import peppers from '../images/peppers.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function PlantList() {
  const addButton = (
    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '30px' }} />
  );

  const iButton = (
    <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: '30px' }} />
  );

  // async function fetchPlantData() {
  //     // Function that returns the ID of the plant determined by the name of the plant.
  //       try {
  //           const response = await fetch(`https://perenual.com/api/species-list?key=sk-zFJl6459c92238f02823&q=pepper`);
  //           if (!response.ok) {
  //             throw new Error(`HTTP error! Status: ${response.status}`);
  //           }
  //           const data = await response.json();
  //           // console.log('Image Url: ', data.data[0].default_image.regular_url)
  //           const plantId = data.data[0].id
  //           const plantArray = [];
  //           for (let i = 0; i < data.data.length; i++) {
  //             const plantName = data.data[i].common_name;
  //             const plantCycle = data.data[i].cycle;
  // const plantId = data.data[i].id;
  // const plantOtherName = null;
  // if (data.data[i].other_name === []) {
  //   plantOtherName = data.data[i].other_name
  // } else {
  //   plantOtherName = ''
  // }
  // const plantSunlight = data.data[i].sunlight;
  //             const plantWatering = data.data[i].watering;
  //             let plantImage = null;
  //             if (data.data[i].default_image && data.data[i].default_image.regular_url) {
  //                 plantImage = data.data[i].default_image.regular_url;
  //               } else {
  //                 plantImage = ''
  //               }

  //             const plant = {
  //               plantId,
  //               plantName,
  //               plantImage,
  //               plantCycle,
  //               plantSunlight,
  //               plantWatering
  //             }
  //             plantArray.push(plant)
  //           }
  //           console.log('Plant Array: ', plantArray)
  //           return plantArray
  //       } catch (error) {
  //           console.error("Error fetching data:", error);
  //           throw error
  //       }
  //   }

  //   fetchPlantData()

  const plantArray = [
    {
      id: 1,
      plantName: 'Super spicy thing',
      plantCycle: 'Perenual',
      plantwatering: 'average',
      plantSunlight: ['full sun', 'partial sun'],
      plantOtherName: ['that thing', 'spicy guy'],
      plantImage: peppers,
    },
    {
      id: 2,
      plantName: 'lil guy',
      plantCycle: 'Perenual',
      plantwatering: 'average',
      plantSunlight: ['full sun'],
      plantOtherName: ['that thing', 'where is it'],
      plantImage: peppers,
    },
    {
      id: 3,
      plantName: 'Superlous thing',
      plantCycle: 'Perenual',
      plantwatering: 'average',
      plantSunlight: ['full sun'],
      plantOtherName: [],
      plantImage: peppers,
    },
  ];

  return (
    <div className="browse-list-container">
      {plantArray.map((plant) => (
        <div className="plant-wrapper" key={plant.id}>
          <div className="row">
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
                src={peppers}
                alt="placeholder peppers"
                className="plant-img"
              />
            </div>
            <div
              className="col-20"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <div style={{ margin: '10px' }}>{addButton}</div>
              <div>{iButton}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
