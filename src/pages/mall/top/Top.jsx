import React,{useState,useEffect} from 'react'

import {TopWrap} from './top.js'
import Header from './Header.jsx'
import { Carousel, WingBlank } from 'antd-mobile';

export default (props)=>{
    const [data]=useState([
        'https://pic.qyer.com/public/lmapp/op_conf/2019/12/16/15764773701742?imageMogr2/thumbnail/!750x375r',
        'https://pic.qyer.com/public/lmapp/op_conf/2019/12/03/15753753463769?imageMogr2/thumbnail/!750x375r',
        'https://pic.qyer.com/public/lmapp/op_conf/2019/09/05/15676684556369?imageMogr2/thumbnail/!750x375r',
        'https://pic.qyer.com/public/lmapp/op_conf/2019/09/19/15688898077487?imageMogr2/thumbnail/!750x375r'
    ])
    const [imgHeight]=useState(180)

    return (
        <TopWrap>
            <Header></Header>
            <WingBlank>
                <Carousel
                autoplay={true}
                infinite
                >
                {data.map(val => (
                    <a
                    key={val}
                    style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                    >
                    <img
                        src={val}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
        </TopWrap>
    )
}