import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

import './constellation.scss'

export default class Constellation extends Component {
    render() {
        return (
            <View >
                <Text>Constellation</Text>
                <View>
                    constellation
				</View>
            </View>
        )
    }
}