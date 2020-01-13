import Taro, {Component} from '@tarojs/taro';
import { Video, CoverImage, CoverView } from '@tarojs/components';

export default class CoverViewTest extends Component {
    render() {
        return (<Video id='myVideo' src='src'>
            <CoverView class='controls'>
                <CoverView class='play' onClick='play'>
                    <CoverImage class='img' src='src' />
                </CoverView>
            </CoverView>
        </Video>);
    }
}
