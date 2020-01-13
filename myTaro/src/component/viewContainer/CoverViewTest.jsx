
import Taro, { Component } from '@tarojs/taro';
import { Video, CoverImage, CoverView, View, Text } from '@tarojs/components';

export default class CoverViewTest extends Component {
    render() {
        return (
            <View>
                <Video id='myVideo' src='src'>
                    <Text>CoverViewTest</Text>
                    <CoverView class='controls'>
                        <CoverView class='play' onClick='play'>
                            <CoverImage class='img' src='src' />
                        </CoverView>
                    </CoverView>
                </Video>
            </View>);
    }
}
