
/* 公众号关注组件。当用户扫小程序码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。 */

import Taro, { Component } from '@tarojs/taro'
// 引入 OfficialAccount 组件
import { View, Text, OfficialAccount } from '@tarojs/components'

export default class OfficialAccountTest extends Component {
    render() {
        return (
            <View>
                <Text>OfficialAccountTest</Text>
                <OfficialAccount
                  onLoad={() => console.log('official-account onLoad')}
                  onError={() => console.log('official-account onError')}
                />
            </View>
        )
    }
}
