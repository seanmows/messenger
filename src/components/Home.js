import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';


class Home extends React.Component {
    state = {
        name: '',
    };
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter you name :
                </Text>
                <TextInput 
                style={styles.textInput}
                placeholder="Emily Tran"
                onChangeText={(text)=>{
                    this.setState({name: text,
                    });
                }}
                value={this.state.name}
                />
                <TouchableOpacity 
                onPress={()=>{
                    Actions.chat({
                        userName:this.state.name,
                    });
                }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop:20,
        marginLeft:20,
        fontSize:20,
    },
    textInput: {
        height:40,
        margin:20,
        padding:5,
    },
    buttonText: {
        margin:20,
        fontSize: 20,

    }

})
export default Home; 