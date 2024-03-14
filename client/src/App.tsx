import React from 'react';
import Map from './components/Map/Map';
import './App.css';
import axios from 'axios';

function App() {
  // React.useEffect(() => {
  //   axios
  //     .get('/example')
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
