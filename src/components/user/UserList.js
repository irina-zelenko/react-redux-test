import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from './User'
import PropTypes from 'prop-types';


class UserList extends Component {
    render() {
        return (
           <div>
                <h1>{this.props.test}</h1>
               {
                   this.props.list.map( (item) => (
                       <User
                           avatar={item.avatar}
                           name = {item.first_name}
                           lastName = {item.last_name}
                           key = {item.id}

                       />
                   ))
               }
           </div>

        );
    }
}
UserList.propTypes = {
    list:  PropTypes.array.isRequired


}
const mapStateToProps = state => {
    return {
        list: state.usersReducer.list,
        test: state.usersReducer.test

    }
}

export default connect (mapStateToProps)(UserList)
/*export default connect((state) => ({
    /!*list: state.usersReducer.list,*!/
    test: state.usersReducer.test
}), null )(UserList);*/
