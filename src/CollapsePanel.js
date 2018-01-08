import React, { Component } from "react";
import CollapseItem from "./CollapseItem";

class CollapsePanel extends Component {
  constructor() {
    super();
    this.state = {
      maleOpened: false,
      femaleOpened: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(category) {
    category === "Male"
      ? this.setState({ maleOpened: !this.state.maleOpened })
      : this.setState({ femaleOpened: !this.state.femaleOpened });
  }

  render() {
    const { pets, removePet } = this.props;

    const petMaleItem = this.state.maleOpened && (
      <ul>
        {pets.map(
          pet =>
            pet.category === "Male" && (
              <CollapseItem
                key={pet.id}
                name={pet.name}
                removePet={() => removePet(pet.id)}
              >
                {pet.name}
              </CollapseItem>
            )
        )}
      </ul>
    );

    const petFemaleItem = this.state.femaleOpened && (
      <ul>
        {pets.map(
          pet =>
            pet.category === "Female" && (
              <CollapseItem
                key={pet.id}
                name={pet.name}
                removePet={() => removePet(pet.id)}
              >
                {pet.name}
              </CollapseItem>
            )
        )}
      </ul>
    );

    return (
      <div>
        <p onClick={() => this.toggleOpen("Male")}>
          {this.state.maleOpened ? <label>Open</label> : <label>Close</label>}Male:
        </p>
        {petMaleItem}

        <p onClick={() => this.toggleOpen("Female")}>
          {this.state.femaleOpened ? <label>Open</label> : <label>Close</label>}Female:
        </p>
        {petFemaleItem}
      </div>
    );
  }
}

export default CollapsePanel;
