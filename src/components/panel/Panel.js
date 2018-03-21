import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { itemsFetchData } from '../../actions/userActions'
import Button from '../UI/Button'


class Panel extends Component {
   constructor(props) {
       super(props);
       this.state = {
           totalPages: 4,
           current: 1
       };

       this.nextPage = this.nextPage.bind(this);
       this.prevPage = this.prevPage.bind(this);
       this.initPage = this.initPage.bind(this);
   }

   nextPage() {
       this.setState({ current :  this.state.current + 1});
       this.props.itemsFetchData('https://reqres.in/api/users?page=', this.state.current + 1)
   }
    prevPage() {
        this.setState({ current :  this.state.current - 1});
        this.props.itemsFetchData('https://reqres.in/api/users?page=', this.state.current -1)
    }
    initPage() {
        this.setState({ current :  1});
        this.props.itemsFetchData('https://reqres.in/api/users?page=', this.state.current)
    }
    render() {

        return (
            <div className={"Panel"}>
                <Button disabled={this.props.list.length > 0} cur={this.state.current} text={"Get Users"} onClick={this.initPage}/>
                <Button disabled={this.state.current === 1 } text={"Prev page"} cur={this.state.current} onClick={this.prevPage}/>
                <Button disabled={this.state.current === this.state.totalPages || this.props.list.length === 0}  text={"Next Page"} cur={this.state.current} onClick={this.nextPage}/>
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
    return { itemsFetchData: (url, currentPage ) => dispatch(itemsFetchData('https://reqres.in/api/users?page=' + currentPage))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Panel)

/*export default connect(null, (dispatch) => bindActionCreators({
    itemsFetchData: itemsFetchData('https://reqres.in/api/users')
}, dispatch) )(Panel);*/
