
import Taro, { Component } from '@tarojs/taro'
// 引入 Form 组件
import { Text, View, Form, Switch, Button } from '@tarojs/components'

export default class FormTest extends Component {

    formSubmit = e => {
        console.log(e)
    }

    formReset = e => {
        console.log(e)
    }

    render() {
        return (
            <Form onSubmit={this.formSubmit} onReset={this.formReset} >
                <View className='example-body'>
                    <Text>FormTest</Text>
                    <Switch name='switch' className='form-switch'></Switch>
                </View>
            </Form>
        )
    }
}