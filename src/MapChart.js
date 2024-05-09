import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import india from './topojsons/india.json';
import ReactModal from 'react-modal';

const MapChart = ({ setTooltipContent }) => {
  const [showModal, setShowModal] = useState(false);
  const [stateName, setStateName] = useState("");

  const stateDesc = {
    "Andaman & Nicobar Island": "The Andaman and Nicobar Islands is a union territory of India. It consists of 836 islands, of which only 31 are inhabited, grouped into two island groups: the northern Andaman Islands and the southern Nicobar Islands, separated by a 150 km wide channel. Port Blair is the capital and largest city of the territory.",
    "Andhra Pradesh": "Andhra Pradesh is located in the southeastern part of the country. It is bordered by Telangana in the north-west, Chhattisgarh in the north, Odisha in the northeast, Tamil Nadu in the south, Karnataka in the west and the Bay of Bengal in the east. Amaravati is the proposed capital city of Andhra Pradesh.",
    "Arunachal Pradesh": "Arunachal Pradesh is the northeasternmost state of India, bordering Assam and Nagaland to the south, and sharing international borders with Bhutan in the west, Myanmar in the east and China in the north. Itanagar is the state capital.",
    "Assam": "Assam is located in northeastern India, known for its wildlife, archeological sites, and tea plantations. Dispur, a suburb of Guwahati, serves as its capital. The state is bordered by six other states and shares international borders with Bhutan and Bangladesh.",
    "Bihar": "Bihar is located in eastern India, with Patna as its capital. The state is bordered by Uttar Pradesh to the west, Nepal to the north, the northern part of West Bengal to the east, and Jharkhand to the south.",
    "Chandigarh": "Chandigarh is a city and a union territory in India that serves as the capital of the states of Punjab and Haryana. As a union territory, it is governed directly by the Union Government of India.",
    "Chhattisgarh": "Located in central India, Chhattisgarh is known for its temples and waterfalls. Raipur is the capital city, and it is rich in minerals, with a significant amount of India's coal and steel being produced here.",
    "Dadra & Nagar Haveli and Daman & Diu": "This union territory is located in western India and consists of two separate areas. Daman and Diu, on the Arabian Sea coast, and Dadra and Nagar Haveli, which lie inland. Daman is the capital.",
    "Delhi": "Delhi, officially the National Capital Territory of Delhi (NCT), is a city and a union territory of India containing New Delhi, the capital of India. It is bordered by Haryana on three sides and by Uttar Pradesh to the east.",
    "Goa": "Goa is the smallest state by area and the fourth smallest by population located in Western India, with coastlines stretching along the Arabian Sea. Its capital is Panaji, while Vasco da Gama is its largest city.",
    "Gujarat": "Gujarat is located on the western coast of India and is known for its beaches, temple towns, and historic capitals. Gandhinagar is the capital, while Ahmedabad is the largest city and economic hub.",
    "Haryana": "Haryana is located in North India, surrounding Delhi on three sides, forming the northern, western, and southern borders of Delhi. Chandigarh is the capital city.",
    "Himachal Pradesh": "Located in the Western Himalayas, it is bordered by states of Jammu and Kashmir on the north, Punjab on the west, Haryana on the southwest, Uttarakhand on the southeast, and Tibet on the east. Shimla is its capital.",
    "Jammu & Kashmir": "This union territory covers a large area, mainly consisting of the mountainous regions of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947.",
    "Jharkhand": "Located in eastern India, Jharkhand is known for its vast forest resources and rich mineral wealth. Ranchi is the capital, while Jamshedpur is a major industrial city.",
    "Karnataka": "Karnataka is located in the southwest region of India. Its coast stretches along the Arabian Sea. Bengaluru, the capital, is a high-tech hub known for its shopping and nightlife.",
    "Kerala": "Located on the Malabar Coast of southwestern India, Kerala is known for its palm-lined beaches and backwaters, a network of canals. Thiruvananthapuram serves as the capital and the largest city is Kochi.",
    "Ladakh": "Ladakh is a region administered by India as a union territory, and constituting a part of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947.",
    "Lakshadweep": "Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Not all are inhabited. Kavaratti is the capital of the Union Territory.",
    "Madhya Pradesh": "Located in central India, it is known for its temples, historical buildings, and forests. Bhopal is the capital. The state has a mix of cultural heritage from different kingdoms.",
    "Maharashtra": "Located in the western peninsular part of India, it's the second-most populous state and third-largest by area. Mumbai, the largest city, is the financial capital of India. Pune, Nagpur, and Nasik are other major cities.",
    "Manipur": "Located in northeastern India, Manipur is known for its landscapes and cultural wealth. Imphal is the capital.",
    "Meghalaya": "Located in northeastern India, it is known for its high rainfall, subtropical forests, and biodiversity. Shillong is the capital.",
    "Mizoram": "Located in northeastern India, Mizoram is known for its dramatic landscape and pleasant climate. Aizawl is the capital.",
    "Nagaland": "Located in northeastern India, it is known for its indigenous tribes, festivals, and rich culture. Kohima is the capital.",
    "Odisha": "Located on the eastern coast of India, Odisha is known for its tribal cultures and its ancient Hindu temples. Bhubaneswar is the capital.",
    "Puducherry": "Puducherry, formerly known as Pondicherry, is a union territory on the southeast coast of India. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas, and chic boutiques. Puducherry is the capital.",
    "Punjab": "Located in the northwestern part of India, Punjab is known for its agriculture, religious diversity, and vibrant festivals. Chandigarh is the capital.",
    "Rajasthan": "Located in northern India, Rajasthan is known for its deserts, palatial structures, and rich history. Jaipur, the Pink City, is the capital.",
    "Sikkim": "Located in northeastern India, bordered by Bhutan, Tibet, and Nepal, Sikkim is known for its biodiversity, including alpine and subtropical climates. Gangtok is the capital.",
    "Tamil Nadu": "Located in the southernmost part of the Indian Peninsula, it is known for its Dravidian-style Hindu temples. Chennai is the capital and largest city.",
    "Telangana": "Located in southern India, it was formed from the northwestern part of Andhra Pradesh in 2014. Hyderabad is the capital.",
    "Tripura": "Located in northeastern India, Tripura is surrounded on three sides by Bangladesh. Agartala is the capital.",
    "Uttar Pradesh": "Located in northern India, it is the most populous state in India. Lucknow is the capital. The state has several historical, natural, and religious landmarks.",
    "Uttarakhand": "Located in northern India, known for the Himalayas, the Bhabhar, and the Terai regions. Dehradun is the capital.",
    "West Bengal": "Located in eastern India on the Bay of Bengal, it is known for its rich culture, literature, and arts. Kolkata is the capital."

  };


  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <ReactModal
        isOpen={showModal}
        contentLabel="State Information Modal"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={false}
      >
        <p>{stateDesc[stateName]}</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
      <ComposableMap data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
        <ZoomableGroup zoom={1} center={[80, 22]}>
          <Geographies geography={india}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM } = geo.properties;
                    setTooltipContent(`${ST_NM} - ${stateDesc[ST_NM]}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ST_NM } = geo.properties;
                    setStateName(ST_NM);
                    handleOpenModal();
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "forestgreen",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#2E8B57",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
