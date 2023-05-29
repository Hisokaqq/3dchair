import React from 'react';
import { useCustomisation } from '../context/Custom';

const Configuration = () => {
  const { material, setMaterial, legs, setLegs, chairColor, setChairColor, chairColors } = useCustomisation();
  console.log(material, legs);

  const handleColorChange = (color) => {
    setChairColor(color);
  };

  return (
    <div className='configuration'>
      <div className="section">
        <div className="title">Chair Material</div>
        <div className="values">
          <div className={`item ${material === "leather" && "active"}`} onClick={() => setMaterial('leather')}>
            <div className="label">Leather</div>
          </div>
          <div className={`item ${material === "fabric" && "active"}`} onClick={() => setMaterial('fabric')}>
            <div className="label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Legs</div>
        <div className="values">
          <div className={`item ${legs === 1 && "active"}`} onClick={() => setLegs(1)}>
            <div className="label">Modern</div>
          </div>
          <div className={`item ${legs === 2 && "active"}`} onClick={() => setLegs(2)}>
            <div className="label">Classic</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Chair Color</div>
        <div className="values values2">
          {chairColors.map((color, index) => (
            <div
              key={index}
              className={`item circle ${color.color === chairColor.color ? "active2" : ""}`}
              onClick={() => handleColorChange(color)}
              style={{ backgroundColor: color.color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
