/* eslint-disable no-unused-vars */
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

/* import PageView from '../../component/viewContainer/pageView'  */
import Constellation from "../../component/viewContainer/constellation";
import PageView from "../../component/viewContainer/pageView";
import ScrollViewTest from "../../component/viewContainer/scrollViewTest";
import SwiperTest from "../../component/viewContainer/swiperTest";
import MovableviewTest from "../../component/viewContainer/movableviewTest"
import CoverViewTest from "../../component/viewContainer/CoverViewTest";
import IconTest from "../../component/base/iconTest"
import TextTest from "../../component/base/textTest";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  config: Config = { navigationBarTitleText: "首页" };

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>viewContainer</Text>
        <Constellation></Constellation>
        <PageView></PageView>
        <ScrollViewTest></ScrollViewTest>
        <SwiperTest></SwiperTest>
        <MovableviewTest></MovableviewTest>
        <CoverViewTest></CoverViewTest>

        <Text>Base</Text>
        <IconTest></IconTest>
        <TextTest></TextTest>

      </View>
    );
  }
}
