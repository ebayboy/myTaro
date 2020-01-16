
import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'

export default class NavigatorTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View>
                <View class="btn-area">
                    <Navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</Navigator>
                    <Navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</Navigator>
                    <Navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</Navigator>
                    <Navigator target="miniProgram" open-type="navigate" app-id="" path="" extra-data="" version="release">打开绑定的小程序</Navigator>
                </View>
            </View>
        )
    }
}