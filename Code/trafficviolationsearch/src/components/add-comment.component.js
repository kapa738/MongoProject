import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class searchList extends Component {
  constructor(props) {
    super(props);

    this.onChangeList = this.onChangeList.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Description: ''
    }
  }

  onChangeList(e) {
  this.setState({
    Description: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();

  const user = {
    Description: this.state.Description
  }

  console.log(user);

  axios.get('http://localhost:5000/functions/add/'+this.state.Description)
  .then(response => {
     this.setState({
       Description: response.data.Description
     })
     console.log(response.data);
   })
   .catch(function (error) {
     console.log(error);
   })


  this.setState({
    Description: ''
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
                  value={this.state.Description}
                 onChange={this.onChangeList}
                 />
           </div>
           <div className="form-group">
             <input type="submit" value="submit" className="btn btn-primary" />
           </div>
         </form>
       </div>
    )
  }
}