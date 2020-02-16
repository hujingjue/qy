import React, { Component } from 'react'

import {FooterWrap} from './footer.js'


export default class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <footer>
                    <ul>
                        <li>手机版</li>
                        <li>电脑版</li>
                        <li>APP</li>
                        <li>意见反馈</li>
                    </ul>
                    <p>2004-2019 &copy;北京穷游天下科技发展有限公司™</p>
                    <p>京ICP备12003524号 | 电话 010 64554669</p>
                </footer>
            </FooterWrap>
        )
    }
}
