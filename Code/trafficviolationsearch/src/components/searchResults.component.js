// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Document = props => (
//   <tr>
//     <td>{props.document.SubAgency}</td>
//     <td>{props.document.Description}</td>
//     <td>{props.document.Location}</td>
//     <td>{props.document.Accident}</td>
//     <td>{props.document.Belts}</td>
//     <td>{props.document.Fatal}</td>
//     <td>{props.document.Alcohol}</td>
//     <td>{props.document.State}</td>
//     <td>{props.document.VehicleType}</td>
//     <td>{props.document.Make}</td>
//     <td>{props.document.Charge}</td>
//     <td>{props.document.Geolocation}</td>
//   </tr>
// )

// export default class DocumentList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {documents: []};
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/functions/')
//       .then(response => {
//         this.setState({ documents: response.data })
//        console.log(response.data);
//        //return(response.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   documentList() {
//     return this.state.documents.map(details => {
//       return <Document document={details}/>;
//     })
//   }

//   render() {
//     return (
//       <div>
//           <nav className="navbar-logo">
//                 <div className="navBar-list">
//                 <a>
//                     <Link to="/" className="navBar-brand">Traffic Violation Data</Link>
//                 </a>
//                     <ul className="navBar-items">
//                         <li className="navBar-item">
//                             <a>
//                                 <Link to="/" className="nav-link">Home</Link>
//                             </a>
//                         </li>
//                         <li className="navBar-item">
//                             <a>
//                                 <Link to="/search" className="nav-link">Search documents</Link>
//                             </a>
//                         </li>
//                         <li className="navBar-item">
//                             <a>
//                                 <Link to="/add" className="nav-link">Add Comments</Link>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         <h3>Traffic Violation Search</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>SubAgency</th>
//               <th>Description</th>
//               <th>Location</th>
//               <th>Accident</th>
//               <th>Belts</th>
//               <th>Fatal</th>
//               <th>Alcohol</th>
//               <th>State</th>
//               <th>VehicleType</th>
//               <th>Make</th>
//               <th>Charge</th>
//               <th>Geolocation</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.documentList()}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import searchPage from './searchPage.component';


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

  const message = () =>{
    // return <Link to="/" component={searchPage} data={props.document}>Click Here</Link>
    return <searchPage data={props.document}/>
  }

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
    <Link to="/" component={searchPage} data={props.document}>Click Here</Link>
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
      description: ''
    }
    this.state = {documents: []};
  }

  onChangeList(e) {
  this.setState({
    description: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();

  const user = {
    description: this.state.description
  }

  console.log(user);

  axios.get('http://localhost:5000/functions/search/'+this.state.description)
  .then(response => {
     this.setState({
      description: response.data.description
     })
     console.log(response.data);
     this.setState({ documents: response.data });
   })
   .catch(function (error) {
     console.log(error);
   })


  this.setState({
    description: ''
  })
}

documentList() {
      return this.state.documents.map(details => {
        return <Document document={details}/>;
      })
    }

    singleDocList() {
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

             <input  type="text"
                 required
                 className="form-control"
                  value={this.state.description}
                 onChange={this.onChangeList}
                 />
           </div>
           <div className="form-group">
             <input type="submit" value="submit" className="btn btn-primary" />
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