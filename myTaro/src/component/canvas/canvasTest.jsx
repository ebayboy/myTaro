
import Taro, { Component } from '@tarojs/taro'
// 引入 Canvas 组件
import { Canvas } from '@tarojs/components'

export default class CanvasTest extends Component {
    render() {
        return (
            <Canvas style='width: 300px; height: 200px;' canvasId='canvas' />
        )
    }
}
