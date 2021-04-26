import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                    </tr>
                </thead>
                <tbody>
                    {/* { this.documentList()} */}
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
                </tr>
                </tbody>
                </table>
            </div>
              :

              <div></div>
            }
        <button
              type="button"
              className="make-button-link"
              onClick={this.handleAddSecondInput}
            >
              View More
        </button>
          {/* <h3>Traffic Violation Results Page:</h3> */}
         {/* <form onSubmit={this.handleAddSecondInput}>
           <div className="form-group">

             <input  type="text"
                 required
                 className="form-control"
                  value={this.state.description}
                 onChange={this.onChangeList}
                 />
           </div>
           <div className="form-group">
             <input type="submit" value="View More" className="btn btn-primary" />
           </div>
         </form> */}
        {/* <table className="table">
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
             </tr>
           </thead>
           <tbody>
             { this.documentList()}
             <tr>
                <td>{this.props.data.subAgency}</td>
                <td>{this.state.document.description}</td>
                <td>{this.state.document.location}</td>
                <td>{this.state.document.accident}</td>
                <td>{this.state.document.belts}</td>
                <td>{this.state.document.fatal}</td>
                <td>{this.state.document.alcohol}</td>
                <td>{this.state.document.state}</td>
                <td>{this.state.document.vehicleType}</td>
                <td>{this.state.document.make}</td>
            </tr>
           </tbody>
         </table> */}
       </div>
    )
  }
 }

// const searchPage = (props) =>{
//     return(
//         <div>
//             <h3>{props.data.description}</h3>
//         </div>
//     )
// }