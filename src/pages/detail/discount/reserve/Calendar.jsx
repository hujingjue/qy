import React, { PureComponent} from 'react'

import {CalendarWrap} from './calendar.js'

import {init} from 'utils/calendar.js'
import {httpGet} from 'utils/http.js'

import _ from 'lodash'

export default class Calendar extends PureComponent {
    state={
        d:new Date(),
        currentYear:0,
        currentMonth:0,
        confirmMonth:1,
        days:0,
        firstDateWeek:0,
        arr:[],
        pid:0,
        data:{},
        dataArr:[],
        index:0,
        resArr:[],
        error:false
    }

    static getDerivedStateFromProps(props,state){
        if(state.dataArr.length!==0&&state.dataArr.length>state.index&&state.index>=0){
            state.currentYear=state.dataArr[state.index].slice(0,4)
            state.currentMonth=~~state.dataArr[state.index].slice(5,7)-1
            state.confirmMonth=state.currentMonth+1
            state.firstDateWeek=init(state.d,state.currentYear,state.currentMonth,state.confirmMonth).firstDateWeek
            state.days=init(state.d,state.currentYear,state.currentMonth,state.confirmMonth).days
            state.resArr=[]
            for(let i=0;i<state.firstDateWeek+state.days;i++){
                let lock=true
                state.data[state.dataArr[state.index]].forEach(value=>{
                    if(i-state.firstDateWeek+1===(~~value.start_date.slice(8,10))){
                        state.resArr[i]={price:value.price,stock:value.stock}
                        lock=false
                    }
                })
                if(lock){
                    state.resArr[i]=0
                }
                
            }
        }
        return null
    }

    async componentDidUpdate(props,state){
        if(this.props.pid!==props.pid){
            this.getData()
        }
    }

    async getData(){
        let result=await httpGet({
            url:'/ajaxGetCategoryMem',
            params:{
                ajaxID:'59b12fa9cebeb65c188239a4',
                pid:this.props.pid
            }
        })
        if( result.data.result === "ok"){
            let data=_.groupBy(result.data.data,(a)=>{
                return a.start_date.slice(0,7)
            })
            let dataArr=Object.keys(data)
            this.setState({
                index:0,
                data,
                dataArr,
                error:true
            })
        }else{
            this.setState({
                error:false
            })
        }
    }

    changeMonth=(type)=>{
        return ()=>{
            if(type==='prev'){
                this.setState(state=>{
                    state.index=state.index===0?0:--state.index
                })
            }else{
                this.setState(state=>{
                    state.index=state.index===state.dataArr.length?state.dataArr.length:++state.index
                })
            }
            this.forceUpdate()
        }
    }

    render() {
        return (
            <CalendarWrap>
                <div className="calendar-wrap">
                    <div className="choose-date">
                        <span>选择日期</span>
                        <span>18:00 前可订次日 此产品需二次确认，商家将在48小时内（工作日9:00-18:00）核实是否有位。请咨询后在付款</span>
                    </div>
                    {
                        (this.state.dataArr[0]!==""&&this.state.error)?(
                            <div className="calendar">
                        <div className="date-title">
                            <i className="iconfont icon-houtui" onClick={this.changeMonth('prev')}></i>
                            <span>{this.state.currentYear}年{this.state.confirmMonth}月</span>
                            <i className="iconfont icon-qianjin" onClick={this.changeMonth('next')}></i>
                        </div>
                        <ul className="week-wrap">
                            <li>日</li>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                            <li>四</li>
                            <li>五</li>
                            <li>六</li>
                        </ul>
                        <ul className="date-wrap">
                           {
                               this.state.resArr.map((value,index)=>{
                                if(index<this.state.firstDateWeek){
                                    return (
                                        <li key={index}></li>
                                    )
                                }else{
                                    if(value===0){
                                        return (
                                            <li key={index}>
                                                {index-this.state.firstDateWeek+1}
                                            </li>
                                        )
                                    }else if(value.stock==='0'){
                                        return (
                                            <li key={index} className="sell-out">
                                                {index-this.state.firstDateWeek+1}
                                                <p>￥{value.price}</p>
                                                <p>已售罄</p>
                                            </li>
                                        )
                                    }else{
                                        return (
                                            <li key={index} className="more-ticket">
                                                {index-this.state.firstDateWeek+1}
                                                <p>￥{value.price}</p>
                                                <p>余{value.stock}</p>
                                            </li>
                                        )
                                    }
                                    
                                    
                                }
                               })
                           }
                        </ul>
                    </div>
                        ):''
                    }
                    
                </div>
            </CalendarWrap>
        )
    }
}
