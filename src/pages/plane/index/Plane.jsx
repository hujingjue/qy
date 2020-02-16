import React from 'react'

import {PlaneWrap} from './plane.js'
import Show from './Show.jsx'

export default class Plane extends React.Component {
  state = {
    docked: false,
    contentList:[
        {
            title:'首页',
            icon:'xuanzhongshangcheng'
        },{
            title:'目的地',
            icon:'zuobiao'
        },
        {
            title:'行程助手',
            icon:'rili'
        },
        {
            title:'旅游锦囊',
            icon:'jinnang'
        },
        {
            title:'最世界.自由行',
            icon:'lvhang'
        },
        {
            title:'问答',
            icon:'wenda'
        },
        {
            title:'论坛',
            icon:'luntan'
        },
        {
            title:'穷游出品',
            icon:'yifu'
        },
        {
            title:'酒店',
            icon:'jiudian'
        },
        {
            title:'机票',
            icon:'jipiao'
        }
        
    ]
  }

  render() {
    return (
        <PlaneWrap>
            <Show></Show>
        </PlaneWrap>
    )
  }
}