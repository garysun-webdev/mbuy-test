import React, { Component } from "react";
import CollapseItem from "./CollapseItem";
import TransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";
import "./CollapsePanel.css";

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
        <TransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
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
        </TransitionGroup>
      </ul>
    );

    const petFemaleItem = this.state.femaleOpened && (
      <ul>
        <TransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
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
        </TransitionGroup>
      </ul>
    );

    return (
      <div className="container">
        <div className="collapse-panel" style={{ marginTop: "80px" }}>
          {/* Header */}
          <div
            className="collapse-header"
            onClick={() => this.toggleOpen("Male")}
          >
            {this.state.maleOpened ? (
              <i className="fa fa-minus" aria-hidden="true" />
            ) : (
              <i className="fa fa-plus" aria-hidden="true" />
            )}
            Male
          </div>
          {/* Body */}
          <div className="collapse-body">{petMaleItem}</div>
        </div>

        <div className="collapse-panel">
          <div
            className="collapse-header"
            onClick={() => this.toggleOpen("Female")}
          >
            {this.state.femaleOpened ? (
              <i className="fa fa-minus" aria-hidden="true" />
            ) : (
              <i className="fa fa-plus" aria-hidden="true" />
            )}
            Female
          </div>
          <div className="collapse-body">{petFemaleItem}</div>
        </div>
      </div>
    );
  }
}

CollapsePanel.propTypes = {
  removePet: PropTypes.func.isRequired,
  pets: PropTypes.array.isRequired
};

export default CollapsePanel;
