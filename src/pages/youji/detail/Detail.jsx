import React, { useState } from 'react'

import { DetailWrap } from './detail.js'
import { Carousel, WingBlank } from 'antd-mobile';
import DetailList from './DetailList.jsx'

export default (props) => {
    const [imgHeight] = useState(176)
    const [imgList] = useState([
        'https://pic.qyer.com/album/user/3091/96/QklcQxMBZko/index/680x400',
        'https://pic.qyer.com/album/user/3042/17/QklRQBsAaU8/index/680x400',
        'https://pic.qyer.com/album/user/3014/12/QklURhsFYUA/index/680x400',
        'https://pic.qyer.com/album/user/3101/33/QkhVQxkEY00/index/680x400'
    ])

    return (
        <DetailWrap>
            <div>
                <h2>{props.match.params.name}</h2>
                <p>
                    共<span>38385</span>篇帖子
                </p>
            </div>
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {imgList.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%',height:imgHeight }}
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
            <DetailList></DetailList>
        </DetailWrap>
    )
}