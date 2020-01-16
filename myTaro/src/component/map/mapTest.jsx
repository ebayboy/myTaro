
import Taro, { Component } from '@tarojs/taro'
// 引入 map 组件
import { Map } from '@tarojs/components'

class MapTest extends Component {
  onTap () {}
  render () {
    return (
      <Map onClick={this.onTap} />
    )
  }
}