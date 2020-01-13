
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox, Label } from '@tarojs/components'

export default class CheckboxTest extends Component {
    state = {
        list: [
            {
                value: '美国',
                text: '美国',
                checked: false
            },
            {
                value: '中国',
                text: '中国',
                checked: true
            },
            {
                value: '巴西',
                text: '巴西',
                checked: false
            },
            {
                value: '日本',
                text: '日本',
                checked: false
            },
            {
                value: '英国',
                text: '英国',
                checked: false
            },
            {
                value: '法国',
                text: '法国',
                checked: false
            }
        ]
    }

    /* 
    Lable for的作用：
    for 属性规定 label 与哪个表单元素绑定。
    作用是 在点击label 时 会自动将焦点移动到绑定的 元素上
    比如 x y
    特别是使用 checkbox 时,如果没有绑定的话,需要鼠标点中小方框,才可以选中或不选,
    绑定以后点击label就可以改变checkbox 的值了
    */

    render() {
        return (
            <View className='page-body'>
                <Text>CheckboxTest</Text>
                <View className='page-section'>
                    <Text>默认样式</Text>
                    <Checkbox value='选中' checked>选中</Checkbox>
                    <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
                </View>
                <View className='page-section'>
                    <Text>推荐展示样式</Text>
                    {this.state.list.map((item, i) => {
                        console.log(i)
                        return (
                            <Label className='checkbox-list__label' for={i} key={i}>
                                <Checkbox className='checkbox-list__checkbox'
                                  value={item.value}
                                  checked={item.checked}
                                > {item.text} </Checkbox>
                            </Label>
                        )
                    })}
                </View>
            </View>
        )
    }
}