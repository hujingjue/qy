import React from 'react'

import {ImgWrap} from './img.js'

export default (props)=>{
    return (
        <ImgWrap>
            <div style={{background:'url('+props.img+') no-repeat center center /cover'}}>
                <h2>{props.name}</h2>
                <p>共有233634个问题</p>
                <p>共有700596位用户回答过问题</p>
            </div>
        </ImgWrap>
    )
}