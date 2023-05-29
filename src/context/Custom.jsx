import { createContext, useContext, useState } from "react";

export const CustomisationContext = createContext(null);

const chairColors = [
    { name: "Red", color: "#FF0000" },
    { name: "Blue", color: "#0000FF" },
    { name: "Green", color: "#00FF00" },
    { name: "Yellow", color: "#FFFF00" },
    { name: "Orange", color: "#FFA500" },
    { name: "Purple", color: "#800080" },
    { name: "Pink", color: "#FFC0CB" },
    { name: "Cyan", color: "#00FFFF" },
    { name: "Brown", color: "#A52A2A" },
    { name: "Gray", color: "#808080" },
    // Add more colors here...
  ];
  

export const CustomisationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);

  return (
    <CustomisationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        chairColors,

      }}
    >
      {props.children}
    </CustomisationContext.Provider>
  );
};

export const useCustomisation = () => {
  const context = useContext(CustomisationContext);
  return context;
};
