import React, { Component } from 'react'

import {MustCityWrap} from './mustCity.js'

import {connect} from 'react-redux'
import {httpGet} from 'utils/http.js'
import BScroll from 'better-scroll'

const mapState=(state)=>({
    mustCity:state.plane.mustCity,
    countryList:state.plane.countryList,
    firstCity:state.plane.firstCity,
    cityList:state.plane.cityList
})

const mapDispatch=(dispatch)=>{
    return {
        chooseMustCity:()=>{
            dispatch({
                type:'mustCity',
                mustCity:true
            })
        },
        chooseCityList:(cityList)=>{
            dispatch({
                type:'cityList',
                cityList
            })
        }
    }
}

class MustCity extends Component {
    state={
        index:0,
        list:[],
        currentCityList:[],
        chooseIndex:[]
    }

    componentDidMount(){
        new BScroll('.must-city-wrap',{
            scrollY:true,
            preventDefault:false,
            mouseWheel:true
        })
    }

    static getDerivedStateFromProps(props,state){
        if(state.index===0){
            return {
                list:props.firstCity
            }
        }

        return null
        
    }

    changeHighLight=(index)=>{
        return async ()=>{
            await this.setState({
                index
            })
            this.getData('/plan/city/getcity/',{countryid:this.props.countryList[index].id})
        }
    }

    chooseCity=(index)=>{
        return ()=>{
            if(this.state.currentCityList.length<3){
                this.setState({
                    currentCityList:[
                        ...this.state.currentCityList,
                        this.state.list[index]
                    ],
                    chooseIndex:[
                        ...this.state.chooseIndex,
                        index
                    ]
                })
            }
        }
    }

    handleConfirm=()=>{
        this.props.chooseCityList(this.state.currentCityList)
        this.props.chooseMustCity()
    }

    async getData(url, params) {
        let result = await httpGet({
            url,
            params
        })
        await this.setState({
            list: result.data.data
        })
    }

    render() {
        if(this.state.list!==undefined){
            this.state.list.forEach(value=>{
                this.state.currentCityList.forEach(item=>{
                    if(item.cityid===value.cityid){
                        value.complete=true
                    }
                })
            })
        }
        return (
            <MustCityWrap>
                <section className='must-city-wrap'>
                    <div>
                        <h2>{(this.props.countryList.length!==0)?this.props.countryList[this.state.index].name:''}热门城市</h2>
                        <ul>
                            {   
                                (this.state.list!==undefined)
                                ?this.state.list.map((value,index)=>{
                                    return (
                                        <li 
                                        key={value.cityid}
                                        onClick={this.chooseCity(index)}
                                        className={value.complete?'iconfont icon-complete':''}
                                        
                                        >
                                            <img src={value.cityimg} alt=""/>
                                            <span>{value.cityname}</span>
                                        </li>
                                    )
                                })
                                :''
                            }
                            
                        </ul>
                    </div>
                </section>
                <div>
                    <ul>
                        {
                            this.props.countryList.map((value,index)=>{
                                return (
                                    this.state.index===index
                                    ?(<li 
                                    key={value.id}
                                    className="active"
                                    >
                                        <img src={value.img} alt=""/>  
                                        <p>{value.name}</p>  
                                    </li> )
                                    :(<li 
                                    key={value.id}
                                    onClick={this.changeHighLight(index)}
                                    >
                                        <img src={value.img} alt=""/>  
                                        <p>{value.name}</p>  
                                    </li> )
                                )
                            })
                        }
                           
                        
                    </ul>   
                                                                
                    <div onClick={this.handleConfirm}>
                        确定    
                    </div>
                </div>
            </MustCityWrap>
        )
    }
}

export default connect(mapState,mapDispatch)(MustCity)
