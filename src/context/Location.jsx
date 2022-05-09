import { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationProvider = (props) => {
  const [local, setLocal] = useState("México City Marriott Reforma Hotel...");

  return (
    <LocationContext.Provider value={{ local, setLocal }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
