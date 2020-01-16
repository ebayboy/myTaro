
/* WebView 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。个人类型与海外类型的小程序暂不支持使用 */

import Taro, { Component } from '@tarojs/taro'
// 引入 WebView 组件
import { View, Text } from '@tarojs/components'
//import { WebView, View, Text } from '@tarojs/components'

export default class WebViewTest extends Component {
    handleMessage() { }

    render() {
        return (
            <View>
                <Text>人类型的小程序暂不支持使用。</Text>
            </View>
            /* <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} /> */
        )
    }
}