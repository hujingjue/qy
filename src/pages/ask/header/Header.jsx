import React from 'react'

import {HeaderWrap} from './header.js'
import {withRouter} from 'react-router-dom'


function Header (props){

    const backHome=()=>{
        return ()=>{
            props.history.push('/')
        }
    }

    return (
        <HeaderWrap>
            <div>
                <i className="iconfont icon-back1" onClick={backHome()}></i>
                <div>
                    <i className="iconfont icon--search"></i>
                    <span>搜索本版内容</span>
                </div>
                <div>我的问答</div>
            </div>
        </HeaderWrap>
    )
}

export default withRouter(Header)