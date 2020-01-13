import Taro, { Component } from '@tarojs/taro'
// 引入 MovableArea, MovableView 组件
import { MovableArea, MovableView } from '@tarojs/components'

export default class MoveableViewTest extends Component {
  render () {
    return (
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
      </MovableArea>
    )
  }
}