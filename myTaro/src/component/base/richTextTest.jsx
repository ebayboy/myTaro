
import Taro, { Component } from '@tarojs/taro'
// 引入 RichText 组件
import { RichText } from '@tarojs/components'

export default class RichTextTest extends Component {
    state = {
        nodes: [{
            name: 'div',
            attrs: {
                class: 'div_class',
                style: 'line-height: 60px; color: red;'
            },
            children: [{
                type: 'text',
                text: 'RichText： Hello World!'
            }]
        }]
    }
    render() {
        return (
            <RichText nodes={this.state.nodes} />
        )
    }
}
