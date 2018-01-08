import React, { Component } from "react";
import "./App.css";
import CollapsePanel from "./CollapsePanel";

let nextId = 0;

class App extends Component {
  constructor() {
    super();
    this.state = { pets: null };
    this.fetchData = this.fetchData.bind(this);
    this.manipulateData = this.manipulateData.bind(this);
    this.removePet = this.removePet.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url =
      "https://s3-ap-southeast-2.amazonaws.com/memberbuy-static-content/interview.json";
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(
            "Fail to get response with status " + response.status
          );
        }
        response
          .json()
          .then(responseJson => {
            const pets = this.manipulateData(responseJson);
            this.setState({ pets });
          })
          .catch(error => {
            console.log(error + "1");
            this.setState({ pets: null });
          });
      })
      .catch(error => {
        console.log(error + "2");
        this.setState({ pets: null });
      });
  }

  manipulateData(originData) {
    //tag gender into pets Array for each owner
    const originPetsWithGender = originData.map(ownerItem => {
      if (ownerItem.pets)
        return ownerItem.pets.map(pet => ({
          name: pet.name,
          id: nextId++,
          category: ownerItem.gender
        }));
    });

    const reducer = (accumulator, currentValue) => {
      return currentValue ? accumulator.concat(currentValue) : accumulator;
    };

    const sortName = (a, b) => a.name.localeCompare(b.name);

    //combine pets array and sort by pets name
    const pets = originPetsWithGender.reduce(reducer, []).sort(sortName);

    return pets;
  }

  removePet(id) {
    const pets = this.state.pets.filter(pet => {
      return pet.id !== id;
    });
    this.setState({ pets });
  }

  render() {
    if (!this.state.pets) {
      return <div>Loading ICON</div>;
    }

    return <CollapsePanel pets={this.state.pets} removePet={this.removePet} />;
  }
}

export default App;
