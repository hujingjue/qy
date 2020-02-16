import React, { Component } from 'react'

import {FooterWrap} from './footer.js'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <div className='footer-wrap'>
                    <div>
                        <ul className="list-wrap">
                            <li>登录</li>
                            <span></span>
                            <li>注册</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-wrap">
                            <li>穷游首页</li>
                            <span></span>
                            <li>目的地</li>
                            <span></span>
                            <li>折扣</li>
                            <span></span>
                            <li>论坛</li>
                            <span></span>
                            <li>问答</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-wrap">
                            <li className='phone'>手机版</li>
                            <span></span>
                            <li>电脑版</li>
                            <span></span>
                            <li>APP</li>
                            <span></span>
                            <li>提意见</li>
                        </ul>
                    </div>
                    <p>Copyright &copy; 2004-2015 QYER.inc</p>
                </div>
            </FooterWrap>
        )
    }
}
