import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactiveButton from 'reactive-button';
import searchResults from './searchResults.component';


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
    this.handleAddSecondInput = this.handleAddSecondInput.bind(this);
    
    this.state = {
      description: '',
      document:'',
      clickInput: false
    }
    this.state = {documents: []};

  }

  onChangeList(e) {
  this.setState({
    description: e.target.value
  })
}

handleAddSecondInput () {
    this.setState({
        clickInput:true
    })
}

onSubmit(e) {
    e.preventDefault();

  }

documentList() {
        return <Document document={this.props.data}/>;
    }

  render() {
    return (
      <div>
          {
              this.state.clickInput?
              <div>
                <h3>Traffic Violation Results Page:</h3>
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
                    <tr>
                    <td>{this.props.data.subAgency}</td>
                    <td>{this.props.data.description}</td>
                    <td>{this.props.data.location}</td>
                    <td>{this.props.data.accident}</td>
                    <td>{this.props.data.belts}</td>
                    <td>{this.props.data.fatal}</td>
                    <td>{this.props.data.alcohol}</td>
                    <td>{this.props.data.state}</td>
                    <td>{this.props.data.vehicleType}</td>
                    <td>{this.props.data.make}</td>
                    <td>{this.props.data.charge}</td>
                    <td>{this.props.data.geoLoc.coordinates[0]+","+this.props.data.geoLoc.coordinates[1]}</td>
                    {/* <td>{() =>{
                        var geolocation = this.props.data.geoLoc.coordinates
                        if(typeof geolocation !== 'undefined'){
                            return (geolocation[0]+","+geolocation[1])
                        }
                        else {
                            return null
                        }
                    }
                    }</td> */}
                </tr>
                </tbody>
                </table>
            </div>
              :

              <div></div>
            }
        {/* <button
              type="button"
              className="make-button-link"
              onClick={this.handleAddSecondInput}
            >
              View More
        </button> */}
        <ReactiveButton rounded  type="button"
            className="make-button-link"
            onClick={this.handleAddSecondInput} color="primary" width="70px" height= "60px" animation="yes">
            View More
      </ReactiveButton>
       </div>
    )
  }
 }