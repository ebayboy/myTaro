import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

/* import PageView from '../../component/pageView'  */
import  Constellation from '../../component/constellation'
import  PageView from '../../component/pageView'
import ScrollViewTest from '../../component/scrollViewTest'
import SwiperTest from '../../component/swiperTest'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello myTaro 333!</Text>
        <Constellation></Constellation>
        <PageView></PageView>
        <ScrollViewTest></ScrollViewTest>
        <SwiperTest></SwiperTest>
      </View>
    )
  }
}
