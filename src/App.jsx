import MapComponent from "./components/Map";
import { Provider } from "react-redux";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { store } from "./app/store";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
 
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation like fetching data
    setTimeout(() => {
      setLoading(false); // Set loading to false after the data is loaded
    }, 3500); // Simulating 2 seconds of loading time
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <div className="appLayout pt-[40px] pr-[40px] pl-[40px] pb-[40px]">
          {loading ? (
            <Spinner />
          ) : (
            <>
             <MapComponent />
            </>
          )}
        </div>
      </div>
    </Provider>
  );
}

export default App;
