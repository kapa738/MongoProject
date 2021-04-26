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
      clickInput: false,
      commentText:'',
      comments: []
    }
    this.state = {documents: []};

  }

  onChangeList(e) {
    //console.log(this.state.commentText)
    //console.log(this.state.comments)
    this.setState({
      commentText: e.target.value
    })
   }

handleAddSecondInput () {
    this.setState({
        clickInput:true
    })
}

onSubmit(e) {
  e.preventDefault();

  const commentData = {
    commentText: this.state.commentText,
  }

   axios.put('http://localhost:5000/functions/addComments/' +this.props.data.id+"/"+ this.state.commentText)
   .then(response => {
     console.log(this.state.comments)
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  })


    //  axios.post('http://localhost:5000/users/addComments', user)
    //  .then(response => {
    //     this.setState({
    //       description: response.data.description
    //     })
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })


  this.setState({
    username: ''
  })
}

documentList() {
        return <Document document={this.props.data}/>;
    }

  render() {
    return (
      <div className>
          {
              this.state.clickInput?
              <div className="tb">
                <h3>Traffic Violation Results Page:</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>SubAgency</th>
                    {/* <th>Description</th>
                    <th>Location</th>
                    <th>Accident</th>
                    <th>Belts</th>
                    <th>Fatal</th>
                    <th>Alcohol</th>
                    <th>State</th>
                    <th>VehicleType</th>
                    <th>Make</th>
                    <th>Charge</th> */}
                    <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { this.documentList()} */}
                    <tr>
                    <td>{this.props.data.subAgency}</td>
                    {/* <td>{this.props.data.description}</td>
                    <td>{this.props.data.location}</td>
                    <td>{this.props.data.accident}</td>
                    <td>{this.props.data.belts}</td>
                    <td>{this.props.data.fatal}</td>
                    <td>{this.props.data.alcohol}</td>
                    <td>{this.props.data.vehicleType}</td>
                    <td>{this.props.data.make}</td> */}
                    <td><img src="../images/maryland.png"/></td>
                    <td>{this.props.data.comments[0]}</td>
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
        <ReactiveButton rounded value="submit" className="btn btn-primary" color="primary" width="30px" height= "20px" animation="yes"
              type="button"
              className="make-button-link"
              onClick={this.handleAddSecondInput}
            >
           <span>VIEW</span>  
        </ReactiveButton>
        <h3> Add comments:</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <input  type="text"
                required
                className="form-control"
                 value={this.state.username}
                onChange={this.onChangeList}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>

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