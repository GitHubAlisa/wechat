import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ChatList.sass'

class ChatList extends Component{
    render() {
        return (
            <div className="ChatList">
                ChatList
            </div>
        )
    }
}

export default connect()(ChatList)