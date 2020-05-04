import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/layout";
import Lyrics from "./components/tracks/lyrics";

import "./App.css";
import { Provider } from "./context";

function App() {
  return (
    // <div>
    //   <h1>Heyyyy</h1>
    // </div>
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

// const [track, setTrack] = useState([]);
// const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=c5a3c27b025cbb6cef4f7e3cbc3de8e1`;
// //https://cors-anywhere.herokuapp.com/
// useEffect(() => {
//   getTrack();
// }, []);

// const getTrack = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     setTrack(data.message.body.track_list);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// };
// console.log(track);
export default App;
