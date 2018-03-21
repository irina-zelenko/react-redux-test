import React,  { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <div className={'user'}>
                    <div className={'image-block'}>
                        <img src={this.props.avatar} />
                    </div>
                    <div className={'user-info'}>
                        <p>{this.props.name}</p>
                        <p>{this.props.lastName}</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default User;