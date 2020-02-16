import React,{useEffect} from 'react'

import Header from './header/Header.jsx'
import TopImg from './topImg/TopImg.jsx'
import Content from './content/Content.jsx'

export default (props)=>{
    useEffect(()=>{
        
    })
    return (
        <div style={{height:'100%'}} id="wrap">
            <div>
                <Header></Header>
                <TopImg></TopImg>
                <Content></Content>
            </div>
        </div>
    )
}