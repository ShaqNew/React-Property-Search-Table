import {useState} from "react";
import Table from "./Components/Table/table";
import UserSearch from "./Components/UserSearch/userSearchjs";
import WelcomeMessage from "./Components/welcomeMessage";
import "./App.scss";
import { TPropertyList } from "./utils/dataTypes";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [propertyData, setPropertyData] = useState<TPropertyList>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  return (
    <div className="App" data-testid="app">
        <h1 className="App__heading">Property Search Table</h1>
        <UserSearch setPropertyData={setPropertyData} setIsLoading={setIsLoading}/>
        {
          !isLoading && !propertyData.length ? 
            <WelcomeMessage data-testid="app-welcome-message" /> 
            : 
              isLoading ?
              <div className="App__loading-spinner">
                <ClipLoader
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              :
              <Table data-testid="app-table" propertyData={propertyData} />
        }
    </div>
  );
}

export default App;