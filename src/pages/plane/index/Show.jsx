import React, { Component } from 'react'

import {ShowWrap} from './show.js'

import {NavLink} from 'react-router-dom'

export default class Show extends Component {
    render() {
        return (
            <ShowWrap>
                <header>
                    <i className="iconfont icon-menu1"></i>
                    <p>穷游行程助手</p>
                </header>
                <div>
                    <div>
                        <p>拿上别人的行程即刻出发；全程线路规划最短路线；</p>                    
                        <p>导出PDF打印带上路，一键生成英文送签单；</p>
                        <p>告别办公软件吧！</p>
                    </div>
                    
                </div>
                <div>
                    <NavLink
                        to='/plan/createplans'
                    >
                        <div className="button">
                            <i></i>
                            <span>创建新的行程</span>
                        </div>
                    </NavLink>
                    <div>
                        <i></i>
                    </div>
                </div>
            </ShowWrap>
        )
    }
}
