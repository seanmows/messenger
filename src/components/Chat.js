import React from 'react';

import PropTypes from 'prop-types';

import {GiftedChat} from 'react-native-gifted-chat';

import firebase  from '../firebase';

import {
    View,
    Text,
} from 'react-native';

class Chat extends React.Component {
    constructor(props){

        super(props);
        this.database = this.app.database().ref().child('messages');
    
        state = {
            messages: [],
        };
        this.onSend = this.onSend.bind(this);
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }));
      }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id:1,
                }}
            />
        )
    }
}

Chat.defaultProps = {
    userName:'User',
};
Chat.propType = {
    userName: PropTypes.string,
};


export default Chat; 
