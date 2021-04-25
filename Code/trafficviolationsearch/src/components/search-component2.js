import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Document = props => (
  <tr>
    <td>{props.document.subAgency}</td>
    <td>{props.document.description}</td>
    <td>{props.document.location}</td>
    <td>{props.document.accident}</td>
    <td>{props.document.belts}</td>
    <td>{props.document.fatal}</td>
    <td>{props.document.alcohol}</td>
    <td>{props.document.state}</td>
    <td>{props.document.vehicleType}</td>
    <td>{props.document.make}</td>
    <td>{props.document.charge}</td>
    <td>{props.document.geoLoc.coordinates[0] + ',' + props.document.geoLoc.coordinates[1]}</td>
  </tr>
)

export default class searchList extends Component {
  constructor(props) {
    super(props);

    this.onChangeList = this.onChangeList.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      documents: [],
      geoCoordinates: []
    }
  }

onChangeList(e) {
  this.setState({
    geoCoordinates: [-77.09310515, 38.9835782]
  })
}

onSubmit(e) {
  e.preventDefault();

  const user = {
    geoCoordinates: this.state.geoCoordinates
  }

  console.log(user);

  axios.get('http://localhost:5000/functions/geoSearch/' + this.state.geoCoordinates[0] + '/'+this.state.geoCoordinates[1])
  .then(response => {
     this.setState({
      geoCoordinates: response.data.geoCoordinates
     })
     console.log(response.data);
     this.setState({ documents: response.data });
   })
   .catch(function (error) {
     console.log(error);
   })


  this.setState({
    geoCoordinates:[]
  })
}

documentList() {
      return this.state.documents.map(details => {
        return <Document document={details}/>;
      })
    }

  render() {
    return (
      <div>
         <h3>Traffic Violation Search:</h3>
         <form onSubmit={this.onSubmit}>
           <div className="form-group">
             <input  type="text" required className="form-control" value={this.state.geoCoordinates} onChange={this.onChangeList}/>
           </div>
           <div className="form-group">
             <input type="submit" value="submit" className="btn btn-primary" />
           </div>
         </form>
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
             { this.documentList()}
           </tbody>
         </table>
       </div>
    )
  }
}