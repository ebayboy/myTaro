
import Taro, { Component } from '@tarojs/taro'
// 引入 Ad 组件
import { Ad, View, Text } from '@tarojs/components'

export default class AdTest extends Component {
    render() {
        return (
            <View>
                <Text>AdTest</Text>
                <Ad
                  unit-id=''
                  ad-intervals={60}
                  onLoad={() => console.log('ad onLoad')}
                  onError={() => console.log('ad onError')}
                  onClose={() => console.log('ad onClose')}
                />
            </View>
        )
    }
}