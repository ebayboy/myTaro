
import Taro, { Component } from '@tarojs/taro'
// 引入 Label 组件
import { View, Text, RadioGroup, Radio, Label } from '@tarojs/components'

export default class LableTest extends Component {

  render() {
    return (
      <View>
        <Text>LableTest</Text>
        <RadioGroup>
          <Label className='example-body__label' for='1' key='1'>
            <Radio value='USA'>USA</Radio>
          </Label>
          <Label className='example-body__label' for='2' key='2'>
            <Radio value='CHN' checked> CHN </Radio>
          </Label>
        </RadioGroup>
      </View>
    )
  }
}

