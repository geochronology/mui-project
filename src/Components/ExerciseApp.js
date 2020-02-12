import React, { Component } from 'react';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from './Layouts/Exercises';
import { muscleGroups, exercises } from "../store.js";

class ExerciseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises,
      category: ''
    };
    this.getExercisesByMuscles = this.getExercisesByMuscles.bind(this);
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
  }
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscleGroup } = exercise

        exercises[muscleGroup] = exercises[muscleGroup]
          ? [...exercises[muscleGroup], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  render() {
    const exercises = this.getExercisesByMuscles()
    const { category } = this.state

    return (
      <div className="ExerciseApp">
        <Header />
        <Exercises exercises={exercises} />
        <Footer
          category={category}
          muscleGroups={muscleGroups}
          onSelect={this.handleCategorySelected}
        />
      </div>
    );
  }
}

export default ExerciseApp;