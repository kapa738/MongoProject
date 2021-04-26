import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ReactiveButton from 'reactive-button';

import geoSearchPage from './geoSearchPage.component'

const Document = props => {
  // <tr>
  //   <td>{props.document.subAgency}</td>
  //   <td>{props.document.description}</td>
  //   <td>{props.document.location}</td>
  //   <td>{props.document.accident}</td>
  //   <td>{props.document.belts}</td>
  //   <td>{props.document.fatal}</td>
  //   <td>{props.document.alcohol}</td>
  //   <td>{props.document.state}</td>
  //   <td>{props.document.vehicleType}</td>
  //   <td>{props.document.make}</td>
  //   <td>{props.document.charge}</td>
  // </tr>
  return (

  // <tr>
  //   <td>
  //     {/* <Link to="/trafficviolationsearch/src/components/searchPage.component.js" desc={props.document}>
  //         {props.document.description}
  //       </Link> */}
  //     <Link to="/trafficviolationsearch/src/components/searchPage.component.js" data={props.document}>{props.document.description}</Link>
  //   </td>
  // </tr>
  <li>
    <a>{props.document.description}</a>
    {/* <div><button onClick={message}>Click Here</button></div> */}
    <Link to="/" component={geoSearchPage} data={props.document}>Click Here</Link>
    {/* <a href={'./searchPage'}>Click Here</a> */}
  </li>
  )
}

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
  if(e.target.value == 'florida'){
    this.setState({
      geoCoordinates: [-77.0633916666667, 39.15305]
    })
  }
  else if(e.target.value == 'westvirginia'){
    this.setState({
      geoCoordinates: [-76.9841983333333, 39.0293466666667]
    })
  }
  else if(e.target.value == 'virginia'){
    this.setState({
      geoCoordinates: [-77.14941, 39.067535]
    })
  }
  else if(e.target.value == 'maryland'){
    this.setState({
      geoCoordinates: [-77.09310515, 38.9835782]
    })
  }
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
        <div className="header">
                <h3>Traffic Violation Results Search:</h3>
                </div>
         <form onSubmit={this.onSubmit}>
            <div className="choice" onChange={this.onChangeList}>
             <input type="radio" value="florida" name="city"/>Florida
             <input type="radio" value="westvirginia" name="city"/>West Virginia
             <input type="radio" value="virginia" name="city"/>Virginia
             <input type="radio" value="maryland" name="city"/>Maryland
           </div>
           <div className="form-group1">
             <input  type="text" required className="form-control" value={this.state.geoCoordinates} onChange={this.onChangeList}/>
           </div>
           <div className="form-group">
             <ReactiveButton rounded type="submit" value="submit" className="btn btn-primary" color="primary" width="250px" height= "60px" animation="yes">
              View More
        </ReactiveButton>
           </div>
         </form>
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
              <th>Geolocation</th>
             </tr>
           </thead>
           <tbody>
             { this.documentList()}
           </tbody>
         </table> */}
         <ul>
            { this.documentList()}
         </ul>
       </div>
    )
  }
}