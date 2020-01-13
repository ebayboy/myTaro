

import Taro, { Component } from '@tarojs/taro'
import { View, Progress } from '@tarojs/components'

export default class ProgressTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='components-page'>
                <Progress percent={20} showInfo strokeWidth={2} />
                <Progress percent={40} strokeWidth={2} active />
                <Progress percent={60} strokeWidth={2} active />
                <Progress percent={80} strokeWidth={2} active activeColor='blue' />
            </View>
        )
    }
}