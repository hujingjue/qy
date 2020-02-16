import React from 'react'

import {TopImgWrap} from './topImg.js'

export default (props)=>{
    return (
        <TopImgWrap>
            <ul>
                <li>
                    <img src="https://pic.qyer.com/ask/banner/15764822513934" alt=""/>
                    <section>
                        <p>
                            对世界好奇
                            <br/>
                            <span>收录你旅途中的好奇心</span>
                        </p>
                    </section>
                
                </li>
                <li>
                    <img src="https://pic.qyer.com/ask/banner/15758706111198" alt=""/>
                    <section>
                        <p>
                            签证诊断：日本专场
                            <br/>
                            <span>关于日签的那些事</span>
                        </p>
                    </section>
                    
                </li>
            </ul>
        </TopImgWrap>
    )
}