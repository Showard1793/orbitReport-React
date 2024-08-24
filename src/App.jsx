import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import {useState} from "react";
import satData from "./components/satData";

function App() {

  //sat compares changes in state of satellites filtered //setSat = function to update state
  const [sat, setSat] = useState(satData);
  
  //Creates array based on data.orbitType ["low", "medium", "high"] (creates 10 buttons - one for each sattelite)
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  
  //Filters satellites by data type ["Low", "Medium", "High"]
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat = {sat}/>
    </div>
  );
}

export default App;