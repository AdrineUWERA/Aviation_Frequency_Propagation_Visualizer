import GoogleApiWrapper from './googleMap.js'
import AddReceiver from './addReceiver.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReceiverList from './receiversList.js';
import {useState, useEffect} from 'react';

function App() {
  // const receivers = [
  //   {
  //     "_id": "629237d67032fe7b925288ab",
  //     "latitude": 30.0579,
  //     "longitude": -1.94,
  //     "coverage": 3,
  //     "__v": 0
  //     },
  //     {
  //     "_id": "629242907032fe7b925288b9",
  //     "latitude": 30.0579,
  //     "longitude": -1.94,
  //     "coverage": 5,
  //     "__v": 0
  //     },
  //     {
  //     "_id": "629242aa7032fe7b925288bd",
  //     "latitude": 30.0572,
  //     "longitude": -1.945,
  //     "coverage": 5,
  //     "__v": 0
  //     }
  // ]
  const [receivers, setReceivers] = useState([]);
  const fecthReceivers = async() => {
    await fetch("http://localhost:5000/receivers", {
            method: "GET"
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                setReceivers(data.data);
            },
            (error) => console.log(error))
  }

  useEffect(() => {
    fecthReceivers();
  }, []);


  return (
    <div> 
      <Router>
        <Switch>
          <Route exact path="/">
            <GoogleApiWrapper/>
          </Route>
          <Route exact path="/add-receiver">
            <AddReceiver/>
          </Route>
          <Route exact path="/receivers">
            {receivers && <ReceiverList receivers={receivers}/>}
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
