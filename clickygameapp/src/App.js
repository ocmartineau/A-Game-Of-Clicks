import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./pics.json"
import ImageCard from "./components/ImagecCard"

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images
    };
  }

  render() {
    console.log(images)
    return (
      <div>
        <h1>Click An Image</h1>
        {images.map(images =>(
          <ImageCard
            location={images.location}
          />
        ))}
      </div>
    );
  }
}

export default App;
