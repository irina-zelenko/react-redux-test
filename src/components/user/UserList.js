import React, { Component } from 'react';
import { connect } from 'react-redux'


class UserList extends Component {
    render() {
        return (
           <div>
                <h1>{this.props.test}</h1>

           </div>

        );
    }
}

export default connect((state) => ({
    /*list: state.usersReducer.list,*/
    test: state.usersReducer.test
}), null )(UserList);
