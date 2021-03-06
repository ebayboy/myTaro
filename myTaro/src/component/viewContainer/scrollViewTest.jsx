import Taro, { Component } from '@tarojs/taro'
import { Text, ScrollView, View } from '@tarojs/components'

export default class ScrollViewTest extends Component {
    constructor() {
        super(...arguments)
    }

    onScrollToUpper() { }

    // or 使用箭头函数
    // onScrollToUpper = () => {}

    onScroll(e) {
        console.log(e.detail)
    }

    render() {
        const scrollStyle = {
            height: '150px'
        }
        const scrollTop = 0
        const Threshold = 20
        const vStyleA = {
            height: '150px',
            'background-color': 'rgb(26, 173, 25)'
        }
        const vStyleB = {
            height: '150px',
            'background-color': 'rgb(39,130,215)'
        }
        const vStyleC = {
            height: '150px',
            'background-color': 'rgb(241,241,241)',
            color: '#333'
        }
        return (
            <View>
                <Text>ScrollViewTest</Text>
                <ScrollView
                  className='scrollview'
                  scrollY
                  scrollWithAnimation
                  scrollTop={scrollTop}
                  style={scrollStyle}
                  lowerThreshold={Threshold}
                  upperThreshold={Threshold}
                  onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                  onScroll={this.onScroll}
                >
                    <View style={vStyleA}>A</View>
                    <View style={vStyleB}>B</View>
                    <View style={vStyleC}>C</View>
                </ScrollView>
            </View>
        )
    }
}