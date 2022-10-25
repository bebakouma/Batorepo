import React from "react";
import AllRegion from '../../../assets/AllRegion.png'
import Canada from '../../../assets/Canada.png'
import CentralUS from '../../../assets/CentralUS.png'
import Europe from '../../../assets/Europe.png'
import UK from '../../../assets/UK.png'

const regions =[
  {
    title: "All Regions",
    image: AllRegion
  },
  {
    title: "Canada",
    image: Canada
  },
  {
    title: "UK",
    image: UK
  },

  {
    title: "Europe",
    image: Europe
  },

  {
    title: "CentralUS",
    image: CentralUS
  }
]

export default function Region() {
  const [regionImage, setRegionImage] = React.useState(regions[0].image);
  const [regionTitle, setRegionTitle] = React.useState(regions[0].title);

  const handleChange = ({ target }) => {
    const index = target.options.selectedIndex;
    const { title, image } = regions[index];

    setRegionImage(image);
    setRegionTitle(title);
  };

  return (
    <div className="container text-center" style={{width:'32%'}}>
      <img className="img-fluid" id="cars" src={regionImage} alt="region" style={{width:'300px', height:'180px'}}/>

      <select
        className="d-block w-50 mt-4 mx-auto"
        onChange={handleChange}
        value={regionImage}
        id="variation-select"
        style={{width:'250px', border:'none'}}
      >
        {regions.map(({ title, image }) => (
          <option key={image} value={image}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
