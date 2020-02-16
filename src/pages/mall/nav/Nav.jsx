import React,{useState} from 'react'

import {NavWrap} from './nav.js'

export default (props)=>{
    const [navList]=useState([
        {
            id:'535,146',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/09/14890319834715',
            content:'自由行'
        },
        {
            id:'535,145',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888571565144',
            content:'优惠机票'
        },
        {
            id:'159，162',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888573031809',
            content:'当地玩乐'
        },
        {
            id:'536,149',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888575672497',
            content:'签证'
        },
        {
            id:'111,222',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888577761167',
            content:'租车自驾'
        },
        {
            id:'536,157',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888735248675',
            content:'酒店'
        },
        {
            id:'22,33',
            img:'https://pic.qyer.com/public/mzworld/barconf/2017/07/17/15002721026136',
            content:'邮轮'
        },
        {
            id:'11,55',
            img:'//common1.qyerstatic.com/zworld/m/project/index/images/category_all.png',
            content:'全部'
        }
    ])
    const [signList]=useState([
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888690439619',
            content:'门票/票券'
        },
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2019/01/07/15468410771139',
            content:'JR Pass频道'
        },
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888772886732',
            content:'WiFi'
        },
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2019/01/07/15468407757416',
            content:'欧铁频道'
        },
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888774385017',
            content:'保险频道'
        },
        {
            img:'https://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888775556615',
            content:'接送机'
        }
    ])

    const goDetail=(id)=>{
        return ()=>{
        }
    }
    return (
        <>
            <NavWrap>
                <ul>
                    {
                        navList.map(value=>{
                            return (
                                <li key={value.id} onClick={goDetail(value.id)}>
                                    <img src={value.img} alt=""/>
                                    <span>{value.content}</span>
                                </li>
                            )
                        })
                    }
                   
                </ul>
                <div className='space'></div>
                <ul>
                    {
                        signList.map(value=>{
                            return (
                                <li key={value.img}>
                                    <img src={value.img} alt=""/>
                                    <span>{value.content}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='space'></div>
            </NavWrap>
        </>
    )
}