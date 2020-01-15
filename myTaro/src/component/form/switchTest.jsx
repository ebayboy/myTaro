import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'

export default class SwitchTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='components-page'>
                <Text>默认样式</Text>
                <Switch checked />
                <Switch />
                <Text>推荐展示样式</Text>
                <Switch checked />
                <Switch />
            </View>
        )
    }
}