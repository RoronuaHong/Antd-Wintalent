import React, { Component } from "react";
import { getCookie } from "../../utils/common";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                //登录判断
                const loginResult = this.props.handleSignIn(values);
            }
            
        });
    }

    //打开外链
    openOuterLink = url => {
        window.location.href = url;
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={ this.handleSubmit } className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        initialValue: getCookie("username") || "",
                        rules: [{ 
                            required: true, 
                            message: this.props.userPlaceHolder
                        }]
                    })(
                        <Input 
                            className={ this.props.userClass }
                            placeholder={ this.props.userPlaceHolder } 
                            autoComplete="off"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: this.props.pwdPlaceHolder }],
                    })(
                        <Input 
                            type="password" 
                            autoComplete="off"
                            className={ this.props.pwdClass }
                            placeholder={ this.props.pwdPlaceHolder } 
                        />
                    )}
                    <a 
                        className="forgetpwd"
                        onClick={ () => this.openOuterLink("/pwdmanage.html#/newmodifypwd") }
                    >
                        忘记密码？
                    </a>
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false
                    })(
                        <Checkbox
                            className="remind-account"
                        >
                            记住账号
                        </Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="buttons">
                        登&nbsp;&nbsp;&nbsp;&nbsp;录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
