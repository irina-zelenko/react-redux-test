import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { itemsFetchData } from '../../actions/userActions'
import Button from '../Button'


class Panel extends Component {
    render() {
        return (
            <div>
                <p>{this.props.isLoading}</p>
                <Button text={"Get Users"} onClick={this.props.itemsFetchData}/>

                {this.props.list.map((item) => (
                    <div className={'user'}>
                        <div className={'image-block'}>
                            <img src={item.avatar} />
                        </div>
                        <div className={'user-info'}>
                            <p>{item.first_name}</p>
                            <p>{item.last_name}</p>
                        </div>
                    </div>
                ))}
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
