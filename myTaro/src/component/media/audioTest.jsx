
import Taro, { Component } from '@tarojs/taro'
import { View, Audio } from '@tarojs/components'

export default class AudioTest extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='components-page'>
                <Audio
                    src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={true}
                    initialTime='30'
                    id='video'
                />
            </View>
        )
    }
}