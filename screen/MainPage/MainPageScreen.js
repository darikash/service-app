import React from 'react';
import CalculatorScreen from '../CalculatorScreen';
import RatingScreen from '../RatingScreen';
import { View, Text, Button } from "react-native";
import styles from './styles'
export default class MainPageScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: ''
        }
    }

    setTab = (tab) => {
        this.setState({ selectedTab: tab })
    }

    selectedTab = () => {
        switch (this.state.selectedTab) {
            case 'A':
                return <CalculatorScreen />
            case 'B':
                return <RatingScreen />
            default:
                return <CalculatorScreen />
        }
    }

    render() {
        return (
            <View>

                <View>{(this.selectedTab())}</View>
                <View>
                    <Button color={'white'} title='hi' onClick={() => this.setTab('A')} > </Button>
                    <Button color={'white'} title='hi' onClick={() => this.setTab('B')} > </Button>
                </View>

            </View>
        )
    }
}