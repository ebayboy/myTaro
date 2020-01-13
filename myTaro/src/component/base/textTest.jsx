

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class TextTest extends Component {

  //global array data
  state = {
    contents: [],
    contentsLen: 0
  }

  // click addline callback func
  add = () => {
    //setState ?  通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么。
    //slice ?  slice方法用于提取原数组的一部分，返回一个提取的新数组，原数组不变。
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.push({ text: 'hello world' })
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  //click removeline callback func
  remove = () => {
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.pop()
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  //map(item, index)渲染
  render() {
    return (
      <View className='container'>
        {
          this.state.contents.map((item, index) => (
            <Text key={index}>{item.text}</Text>
          ))
        }

        <Button className='btn-max-w button_style'
          plain type='default'
          onClick={this.add}
        >add line</Button>

        <Button className='btn-max-w button_style'
          plain type='default'
          disabled={this.state.contentsLen ? false : true}
          onClick={this.remove}
        >remove line</Button>

      </View>
    )
  }
}
