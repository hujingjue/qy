import React from 'react'

import {NewWrap} from './new.js'
import AskList from 'components/ask/AskList.jsx'

export default (props)=>{
    return (
        <NewWrap>
            <AskList url='/ask/ajaxapi/index/new' ele={props.ele} type="select"></AskList>
        </NewWrap>
    )
}