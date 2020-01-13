/* eslint-disable react/jsx-key */

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class ButtonTest extends Component {
    state = {
        btn: [
            {
                text: '页面主操作 Normal',
                size: 'default',
                type: 'primary'
            },
            {
                text: '页面主操作 Loading',
                size: 'default',
                type: 'primary',
                loading: true,
            },
            {
                text: '页面主操作 Disabled',
                size: 'default',
                type: 'primary',
                disabled: true,
            },
            {
                text: '页面次要操作 Normal',
                size: 'default',
                type: 'default'
            },
            {
                text: '页面次要操作 Disabled',
                size: 'default',
                type: 'default',
                disabled: true,
            },
            {
                text: '警告类操作 Normal',
                size: 'default',
                type: 'warn'
            },
            {
                text: '警告类操作 Disabled',
                size: 'default',
                type: 'warn',
                disabled: true,
            }
        ]
    }
    render() {
        return (
            <View className='container'>
                <Text>buttonTest</Text>
                {this.state.btn.map(item => {
                    return (
                        <Button
                          size={item.size ? item.size : ''}
                          type={item.type ? item.type : ''}
                          loading={item.loading ? item.loading : false}
                          disabled={item.disabled ? item.disabled : false}
                        > {item.text}
                        </Button>
                    )
                })}
                <Text>None Mapped Button</Text>
                <Button className='btn-max-w' plain type='primary'>按钮</Button>
                <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
                <Button className='btn-max-w' plain >按钮</Button>
                <Button className='btn-max-w' plain disabled >按钮</Button>
                <Button size='mini' type='primary'>按钮</Button>
                <Button size='mini' >按钮</Button>
                <Button size='mini' type='warn'>按钮</Button>
            </View>
        )
    }
}