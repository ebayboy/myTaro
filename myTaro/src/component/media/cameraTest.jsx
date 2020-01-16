
import Taro, { Component } from '@tarojs/taro';
import { Camera, Image, View, Text, Button } from '@tarojs/components';

export default class CameroTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View>
                <Camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></Camera>
                <Button type="primary" bindtap="takePhoto">拍照</Button>
                <View>预览</View>
                <Image mode="widthFix" src="{{src}}"></Image>
            </View>
        )
    }
}