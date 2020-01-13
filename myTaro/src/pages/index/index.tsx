/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Swiper, SwiperItem, ScrollView } from "@tarojs/components";
import "./index.scss";

/* import PageView from '../../component/viewContainer/pageView'  */
import Constellation from "../../component/viewContainer/constellation";
import PageView from "../../component/viewContainer/pageView";
import ScrollViewTest from "../../component/viewContainer/scrollViewTest";
import SwiperTest from "../../component/viewContainer/swiperTest";
import MovableviewTest from "../../component/viewContainer/movableviewTest";
import CoverViewTest from "../../component/viewContainer/CoverViewTest";
import IconTest from "../../component/base/iconTest";
import TextTest from "../../component/base/textTest";
import ProgressTest from "../../component/base/progressTest";
import RichTextTest from "../../component/base/richTextTest";
import ButtonTest from "../../component/form/buttonTest";
import CheckboxTest from "../../component/form/checkBoxTest";
import FormTest from "../../component/form/formTest";
import InputTest from "../../component/form/inputTest";

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

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail);
  }

  render() {
    /* Swiper最高150， 当超过这个高度使用scrollview进行滚动，以显示全部内容 */
    const scrollStyle = {
      height: "150px"
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      "background-color": "rgb(26, 173, 25)"
    };

    return (
      <Swiper
        className="index"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        vertical
        circular
        indicatorDots
      >
        <SwiperItem>
          <ScrollView
            className="scrollview"
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScroll}
          >
            <View style={vStyleA}>
              <InputTest></InputTest>
            </View>
          </ScrollView>
        </SwiperItem>
        <SwiperItem>
          <View>
            <FormTest></FormTest>
          </View>
        </SwiperItem>

        <SwiperItem className="form">
          <ScrollView
            className="scrollview"
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScroll}
          >
            <View style={vStyleA}>
              <ButtonTest></ButtonTest>
            </View>
          </ScrollView>
        </SwiperItem>

        <SwiperItem>
          <View>
            <CheckboxTest></CheckboxTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <IconTest></IconTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <TextTest></TextTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <ProgressTest></ProgressTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <RichTextTest></RichTextTest>
          </View>
        </SwiperItem>
        <SwiperItem className="viewContainer">
          <View>
            <Constellation></Constellation>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <PageView></PageView>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <ScrollViewTest></ScrollViewTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <SwiperTest></SwiperTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <MovableviewTest></MovableviewTest>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <CoverViewTest></CoverViewTest>
          </View>
        </SwiperItem>
      </Swiper>
    );
  }
}
