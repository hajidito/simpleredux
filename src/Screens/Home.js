
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import Counter from '../Components/counter'
import {incNumber, getNotes} from '../publics/redux/actions/notes';
import { connect } from 'react-redux';
// import { FlatList } from 'react-native-gesture-handler';

class App extends Component {
    static navigationOptions = {
        title: 'Home Note'
    }
    constructor() {
        super();
        this.state = {
            counter: 0,
            isLoading : false
        }
    }
    handleNavigate = () => {
        const { navigation } = this.props;
        navigation.navigate('Note')
    }
    componentDidMount = () => {
        // setInterval(() => {
        //     this.props.dispatch(incNumber(this.props.notes.number + 1))
        // }, 1000)
        this.getData()
    }
    // componentWillUnmount = () => {
    //   clearTimeout();
    // }

    getData =()=> {
        this.props.dispatch(getNotes())
    }

    renderItem = ({item,index}) => (
        <View>
            <View>
                <Text>{item.name.first}</Text>
            </View>
        </View>
    )

    keyExtractor = (item,index) => item.login.uuid.toString();

    render() {
        console.log(typeof this.props.notes.isLoading);

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={{ color: 'blue', fontSize: 30 }} >Kelas Week 2</Text>{/*Inline Styling */}
                <Text style={{ color: 'red', fontSize: 20 }} >{this.props.notes.isLoading ? 'true' : 'false'}</Text>
                <Counter title="Hijau COunter" />
                <Counter title={26} />
                <TouchableOpacity onPress={this.handleNavigate} style={{ backgroundColor: 'blue' }} >
                    <Text style={{ color: 'white' }} >Note Me</Text>
                </TouchableOpacity>
                {this.props.notes.isLoading  ? <Text>loading</Text> : <FlatList
                data = {this.props.notes.data}
                keyExtractor = {this.keyExtractor}
                renderItem = {this.renderItem}
                refreshing = {this.props.notes.isLoading}
                onRefresh={
                    this.getData
                }
                />
}            
                </View>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        notes : state.notes
    }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    container: {
        flex: 1, //flexBox CSS
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
