import Taro, { Component } from '@tarojs/taro'
import { View, Text, Slider } from '@tarojs/components'

export default class SliderTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='components-page'>
                <Text>SliderTest</Text>
                <Text>设置 step</Text>
                <Slider step={1} value={50} />
                <Text>显示当前 value</Text>
                <Slider step={1} value={50} showValue />
                <Text>设置最小/最大值</Text>
                <Slider step={1} value={100} showValue min={50} max={200} />
            </View>
        )
    }
}