
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'

export default class TextAreaTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='components-page'>
                <Text>输入区域高度自适应，不会出现滚动条</Text>
                <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight />
                <Text>这是一个可以自动聚焦的 textarea</Text>
                <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus />
            </View>
        )
    }
}