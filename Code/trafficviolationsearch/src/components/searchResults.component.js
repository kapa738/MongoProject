// import React, {Component} from 'react';

// import {Link} from 'react-router-dom';
// import axios from 'axios';

// const Document = props => (
//     <tr>
//         <td>{props.currentDoc}</td>
//     </tr>
// )

// export default class searchResults extends Component {
//     constructor(props){
//         super(props);

//         this.state = {documents:[]};
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/functions')
//         .then(response=> {
//             this.setState({documents:response.data});
//             //console.log(this.state.documents);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//     }

//     documentsList() {
//         //return this.state.documents;
//         return this.state.documents.map(currentDoc =>{
//             console.log(currentDoc);
//             return <Document doc={currentDoc}/>;
//         })
//     }

//     documentsList() {
//         return this.state.documents.map(currentDoc => {
//         })
//     }

//     render(){
        
//        return (
//             <div>
//                 <h3>List of Documents</h3>
//                 <table className="table">
//                     <tbody>
//                         {this.state.documents.map(currentDoc =>{
//                         return(
//                             <tr>
//                                 <td>currentDoc.Description</td>
//                             </tr>
//                         );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//        );
//     }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Document = props => (
  <tr>
    <td>{props.document.SubAgency}</td>
    <td>{props.document.Description}</td>
    <td>{props.document.Location}</td>
    <td>{props.document.Accident}</td>
    <td>{props.document.Belts}</td>
    <td>{props.document.Fatal}</td>
    <td>{props.document.Alcohol}</td>
    <td>{props.document.State}</td>
    <td>{props.document.VehicleType}</td>
    <td>{props.document.Make}</td>
    <td>{props.document.Charge}</td>
    <td>{props.document.Geolocation}</td>
  </tr>
)

export default class DocumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {documents: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/functions/')
      .then(response => {
        this.setState({ documents: response.data })
       console.log(response.data);
       //return(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  documentList() {
    return this.state.documents.map(details => {
      return <Document document={details}  key={details._id}/>;
    })
  }

  render() {
    return (
      <div>
          <nav className="navbar-logo">
                <div className="navBar-list">
                <a>
                    <Link to="/" className="navBar-brand">Traffic Violation Data</Link>
                </a>
                    <ul className="navBar-items">
                        <li className="navBar-item">
                            <a>
                                <Link to="/" className="nav-link">Home</Link>
                            </a>
                        </li>
                        <li className="navBar-item">
                            <a>
                                <Link to="/search" className="nav-link">Search documents</Link>
                            </a>
                        </li>
                        <li className="navBar-item">
                            <a>
                                <Link to="/add" className="nav-link">Add Comments</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        <h3>Traffic Violation Search</h3>
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