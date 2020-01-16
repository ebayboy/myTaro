
/* 用于展示小程序开放的数据 */
import Taro, { Component } from '@tarojs/taro'
// 引入 OpenData 组件
import { OpenData } from '@tarojs/components'

export default class OpenDataTest extends Component {
    render() {
        return (
            <View>
                <Text>OpenDataTest</Text>
                <OpenData type='' />
            </View>
        )
    }
}