import React,{useState} from 'react'
import {HotWrap} from './hot.js'
import HotList from './HotList.jsx'
import Sort from '../sort/Sotr.jsx'

import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

export default (props)=>{
    const [hotTopic]=useState([
        {
            id:3345595,
            content:'【我在欧洲天旋地转Spinning Around】星月苍茫红河岸（土耳其国庆自驾游.热气球.滑翔伞.世遗.网红全记录）'
        },
        {
            id:3362891,
            content:'泰国清迈|没寺庙没传统景点的小众旅游攻略（4天3晚）'
        },
        {
            id:3323954,
            content:'阿拉腊山顶的方舟，高加索的悠远记忆 II 光影中的亚美尼亚'
        },
        {
            id:3349256,
            content:'​【最佳欧洲③】冰与雪之夏：霞慕尼 & 勃朗峰地区（Chamonix Mont-Blanc）'
        },
        {
            id:3344661,
            content:'千年一梦—中东游记之以色列，约旦篇'
        }
    ])
    const [hotNotes]=useState([
        {
            id:3362430,
            content:'五入顺德 | 有一种旅行，叫做从白天吃到黑夜'
        },
        {
            id:3363118,
            content:'再遇灣灣——台湾自由行八日【更新中】台中、鹿港、宜兰、台北'
        },
        {
            id:3363798,
            content:'【穷游 X KLOOK】圣诞跨年玩转全球！预订全球旅行体验立享超值折扣！'
        },
        {
            id:3363231,
            content:'还是与中东有关的一年'
        },
        {
            id:3363353,
            content:'金色童话里的追“星”记（一万元新西兰南岛自驾15天）'
        }
    ])
    
    return (
        <HotWrap>
            <div>
                <NavLink to="/youji/topic" activeClassName="active">热门话题</NavLink>
                <NavLink to="/youji/hotNotes" activeClassName="active">一周内热帖</NavLink>
            </div>
            <Switch>
                <Route
                    path="/youji/topic"
                    render={
                        (props)=>{
                            return <HotList list={hotTopic}></HotList>  
                        }
                    }
                ></Route>
                <Route
                    path="/youji/hotNotes"
                    render={
                        (props)=>{
                            return <HotList list={hotNotes}></HotList>  
                        }
                    }
                ></Route>
                <Redirect
                from='/youji'
                to='/youji/topic'
                ></Redirect>
            </Switch>
            <Sort></Sort>
            
        </HotWrap>
    )
}