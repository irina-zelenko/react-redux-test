import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { itemsFetchData } from '../../actions/userActions'
import Button from '../Button'


class Panel extends Component {
    render() {
        return (
            <div className={"Panel"}>
                <Button text={"Get Users"} onClick={this.props.itemsFetchData}/>
                <div className={""}>
                    <p>User number: {this.props.list.length}</p>
                </div>

            </div>
        );
    }
}

Panel.propTypes = {
    list:  PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}
const mapStateToProps = state => {
    return {
        list: state.usersReducer.list,
        isLoading: state.usersReducer.fetchUsersListAction
    }
}
const mapDispatchToProps = dispatch => {
    return { itemsFetchData: () => dispatch(itemsFetchData('https://reqres.in/api/users')) } //note the dispatch call
}
export default connect (mapStateToProps, mapDispatchToProps)(Panel)



/*export default connect(null, (dispatch) => bindActionCreators({
    itemsFetchData: itemsFetchData('https://reqres.in/api/users')
}, dispatch) )(Panel);*/
