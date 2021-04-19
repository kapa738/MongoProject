import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    
    
    
    <td>{props.exercise.SubAgency}</td>
    <td>{props.exercise.Description}</td>
    <td>{props.exercise.Location}</td>
    <td>{props.exercise.Accident}</td>
    <td>{props.exercise.Belts}</td>
    <td>{props.exercise.Fatal}</td>
    <td>{props.exercise.Alcohol}</td>
    <td>{props.exercise.State}</td>
    
    <td>{props.exercise.Charge}</td>
    
    <td>{props.exercise.Geolocation}</td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

   

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/function/')
      .then(response => {
        this.setState({ exercises: response.data })
       console.log(response.data);
       //return(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

 

  exerciseList() {
    return this.state.exercises.map(deatils => {
      return <Exercise exercise={deatils}  key={deatils._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Traffic violationData</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
             
             
              <th>SubAgency</th>
              <th>Description</th>
              <th>Location</th>
              <th>Accident</th>
              <th>Belts</th>
              <th>Fatal</th>
              <th>Alcohol</th>
              <th>State</th>
              <th>VehicleType</th>
              <th>Make</th>
              
              <th>Charge</th>
              
              <th>Geolocation</th>
            
            </tr>
          </thead>
          <tbody>
            { this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}