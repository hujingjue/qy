import React from 'react'

import {HeaderWrap} from './header.js'

export default (props)=>{
    return (
        <HeaderWrap>
            <i className='iconfont icon-menu1'></i>
            <div>
                <i className='iconfont icon-search'></i>
                <span>搜索目的地/折扣/关键字</span>
            </div>
        </HeaderWrap>
    )
}