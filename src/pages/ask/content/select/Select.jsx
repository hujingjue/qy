import React ,{useState}from 'react'

import {SelectWrap} from './select.js'
import Nav from './Nav.jsx'
import AskList from 'components/ask/AskList.jsx'

export default (props)=>{
    const [countries]=useState([
        {
            id:'14',
            country:'日本'
        },
        {
            id:'236',
            country:'美国'
        },
        {
            id:'215',
            country:'泰国'
        },
        {
            id:'50',
            country:'香港'
        },
        {
            id:'11186',
            country:'台湾'
        },
        {
            id:'241',
            country:'新西兰'
        },
        {
            id:'238',
            country:'加拿大'
        },
        {
            id:'13',
            country:'英国'
        },
        {
            id:'189',
            country:'意大利'
        }
    ])

    return (
        <SelectWrap style={{background:'#fff'}}>
            <Nav type="select" countries={countries}></Nav>
            <AskList url='/ask/ajaxapi/index/elite' ele={props.ele} type="select"></AskList>
        </SelectWrap>
    )
}