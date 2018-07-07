import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";


//Defining function for shuffling the json array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    clicked: [],
    maxScore: 0,
    currentScore: 0,
    rightWrong: "",
  };


  //SETTING HANDLE EVENTS

  //Handle event for shuffle function
  handleShuffle = () => {
    let shuffledFriends = shuffleArray(friends);
    this.setState({ friends: shuffledFriends });
  };

  //Handle event for clicking on pic
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  //Handle event for incrementing score
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.maxScore) {
      this.setState({ maxScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  //Handle event for resetting
  handleReset = () => {
    this.setState({
      currentScore: 0,
      maxScore: this.state.maxScore,
      clicked: []
    });
    this.handleShuffle();
  };

  
//RENDERING COMPONENT

  render() {
    return (
      <Wrapper>
        <Nav
          title="CLICK THAT POKEMON!!!"
          score={this.state.currentScore}
          maxScore={this.state.maxScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Click on a Pokemon but don't click any more than once or you'll
          lose!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;