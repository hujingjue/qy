import React, { Component } from 'react'

import { ReserveWrap } from './reserve.js'
import Calendar from './Calendar.jsx'

import { httpGet } from 'utils/http.js'

export default class Reserve extends Component {
    state = {
        dataList: [],
        childIndex: 0,
        parentIndex:0,
        childHighLightIndex:0,
        thirdIndex:0,
        thirdHighLightIndex:0,
        pid:0
    }
    async componentDidMount() {
        await this.getData('/ajaxGetProductsTabs', {
            ajaxID: '59afcaa8cebeb65c1882399c',
            lid: this.props.match.params.id
        })
        await this.getPid()
    }

    changeOthers=(index)=>{
        return async ()=>{
            await this.setState({
                parentIndex:index,
                childIndex:0,
                childHighLightIndex:0,
                thirdHighLightIndex:0
            })
            await this.getPid()
        }
    }

    changeSecond=(index)=>{
        return async ()=>{
            await this.setState({
                childHighLightIndex:index,
                childIndex:index,
                thirdHighLightIndex:0,
                thirdIndex:0
            })
            await this.getPid()
        }
    }

    changeThird=(index)=>{
        return async ()=>{
            await this.setState({
                thirdHighLightIndex:index
            })
            await this.getPid()
        }
    }

    async getData(url, params) {
        let result = await httpGet({
            url,
            params
        })
        this.setState({
            dataList: result.data.data
        })
    }

    getPid(){
        if(this.state.dataList[this.state.parentIndex].child.length!==0&&this.state.dataList[this.state.parentIndex].child[this.state.childHighLightIndex].child!==undefined&&this.state.dataList[this.state.parentIndex].child[this.state.childHighLightIndex].child.length!==0){
            this.setState({
                pid:this.state.dataList[this.state.parentIndex].child[this.state.childHighLightIndex].child[this.state.thirdHighLightIndex].id
            })
            return false
        }
        if(this.state.dataList.length!==0&&this.state.dataList[this.state.parentIndex].child.length!==0){
            this.setState({
                pid:this.state.dataList[this.state.parentIndex].child[this.state.childHighLightIndex].id
            })
            return false;
        }
        if(this.state.dataList.length!==0){
            this.setState({
                pid:this.state.dataList[this.state.parentIndex].id
            })
            return false;
        }
        
        
    }

    render() {
        return (
            <ReserveWrap>
                <div className="title-wrap">
                    【枫叶季/元旦/春节】北京直飞东京/大阪/名古屋/冲绳/札幌/福冈/仙台2-30天往返含税机票【甩尾/多团期】
                </div>
                <div className="production-wrap">
                    <div className="type-wrap">
                        <h2>产品类型</h2>
                        <ul>
                            {
                                this.state.dataList.map((value,index) => {
                                    return (
                                        <li 
                                            className={this.state.parentIndex===index?'active':''}
                                            key={value.id}
                                            onClick={this.changeOthers(index)}
                                         >{value.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="type-wrap">
                        {
                            (this.state.dataList[this.state.parentIndex]!==undefined)?(this.state.dataList[this.state.parentIndex].child.length!==0 && (<h2>二级类型</h2>)):''
                        }
                        <ul>
                            {
                                (this.state.dataList[this.state.parentIndex]!==undefined)?this.state.dataList[this.state.parentIndex].child.map((value,index) => {
                                    return (
                                        <li 
                                            className={this.state.childHighLightIndex===index?'active':''}
                                            key={value.id}
                                            onClick={this.changeSecond(index)}
                                         >{value.title}</li>
                                    )
                                }):''
                            }
                        </ul>
                    </div>
                    <div className="type-wrap">
                        {
                            (this.state.dataList[this.state.parentIndex]!==undefined&&this.state.dataList[this.state.parentIndex].child[this.state.childIndex]!==undefined&&this.state.dataList[this.state.parentIndex].child[this.state.childIndex].child!==undefined&&this.state.dataList[this.state.parentIndex].child.length!==0)?(this.state.dataList[this.state.parentIndex].child[this.state.childIndex].child.length!==0 && (<h2>三级类型</h2>)):''
                        }
                        <ul>
                            {
                                (this.state.dataList[this.state.parentIndex]!==undefined&&this.state.dataList[this.state.parentIndex].child[this.state.childIndex]!==undefined&&this.state.dataList[this.state.parentIndex].child[this.state.childIndex].child!==undefined&&this.state.dataList[this.state.parentIndex].child.length!==0)?this.state.dataList[this.state.parentIndex].child[this.state.childIndex].child.map((value,index) => {
                                    return (
                                        <li 
                                            className={this.state.thirdHighLightIndex===index?'active':''}
                                            key={value.id}
                                            onClick={this.changeThird(index)}
                                         >{value.title}</li>
                                    )
                                }):''
                            }
                        </ul>
                    </div>
                </div>
                <Calendar
                    pid={this.state.pid}
                ></Calendar>
            </ReserveWrap>
        )
    }
}
