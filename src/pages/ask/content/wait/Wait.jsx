import React from 'react'

import {WaitWrap} from './wait.js'
import AskList from 'components/ask/AskList.jsx'

export default (props)=>{
    return (
        <WaitWrap>
            <AskList url='/ask/ajaxapi/index/unanswered' ele={props.ele} type="select"></AskList>
        </WaitWrap>
    )
}