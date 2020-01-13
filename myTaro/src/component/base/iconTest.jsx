
import Taro, { Component } from '@tarojs/taro'
import { Text, View, Icon } from '@tarojs/components'

export default class IconTest extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='iconText'>
        <Text>Icontest</Text>
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' color='#ccc' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='20' type='success_no_circle' />
        <Icon size='20' type='warn' />
        <Icon size='20' type='success' />
        <Icon size='20' type='download' />
        <Icon size='20' type='clear' color='red' />
        <Icon size='20' type='search' />
      </View>
    )
  }
}