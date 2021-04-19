import React, {Component} from 'react';

export default class searchResults extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Add Comment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        
                    </div>
                </form>
            </div>
        );
    }
}