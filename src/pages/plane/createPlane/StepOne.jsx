import React, { Component } from 'react'

import { StepOneWrap,Wrap,SectionWrap,ChooseWrap } from './StepOne.js'
import ChooseCity from './ChooseCity.jsx'
import ChooseCountry from './ChooseCountry.jsx'
import MustCity from './MustCity.jsx'
import {httpGet} from 'utils/http.js'
import {connect} from 'react-redux'



const mapState=(state)=>({
    isShow:state.plane.isShow,
    city:state.city.city,
    countryShow:state.plane.countryShow,
    mustCity:state.plane.mustCity,
    countryList:state.plane.countryList,
    cityList:state.plane.cityList
})

const mapDispatch=(dispatch)=>{
    return {
        change:()=>{
            dispatch({
                type:'show',
                isShow:false
            })
        },
        changeCountry:()=>{
            dispatch({
                type:'countryShow',
                isShow:false
            })
        },
        getCountry: (countryList,index) => {
            dispatch({
                type: 'countryList',
                countryList,
                index
            })
        },
        chooseMustCity:()=>{
            dispatch({
                type:'mustCity',
                mustCity:false
            })
        },
        getFirstCity:(firstCity)=>{
            dispatch({
                type:'firstCity',
                firstCity
            })
        },
        chooseCityList:(index)=>{
            dispatch({
                type:'cityList',
                index
            })
        }
    }
}

 class StepOne extends Component {
     state={
         list:[]
     }

    chooseCity = () => {
        this.props.change()
    }

    chooseCountry=()=>{
        this.props.changeCountry()
    }

    deleteCity=(index)=>{
        return ()=>{
            this.props.getCountry([],index)
            this.forceUpdate()
        }
    }

    deleteMustCity=(index)=>{
        return ()=>{
             this.props.chooseCityList(index)
             this.forceUpdate()
        }
    }

     getMustCity=async()=>{
        this.props.chooseMustCity()
        let url='/plan/city/getcity'
        if(this.props.countryList.length!==0){
            await this.getData(url,{countryid:this.props.countryList[0].id})
            this.props.getFirstCity(this.state.list)
        }
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
        return (
            <Wrap>
                <SectionWrap>
                    <StepOneWrap >
                        <div className="step-one-wrap">
                            <div>
                                <h2>Step1</h2>
                                <p>旅行地相关</p>
                            </div>
                            <div>
                                <p>
                                    <i className="iconfont icon-jipiao position"></i>
                                    我的出发城市及返回城市
                        </p>
                                <div
                                    className="border"
                                    onClick={this.chooseCity}

                                >{this.props.city}</div>
                            </div>
                            <div>
                                <p>
                                    <i className="iconfont icon-xin position"></i>
                                    我想去的国家或地区
                        </p>
                                <ul className="list-wrap">
                                {
                                    this.props.countryList.map((value,index)=>{
                                        return (
                                            <li 
                                            className="border li"
                                            key={value.id+value.img+value.name}
                                            >
                                                <img src={value.img} alt="" className="img"/>
                                                <span>{value.name}</span>
                                                <i 
                                                className="iconfont icon-close close"
                                                onClick={this.deleteCity(index)}
                                                ></i>
                                            </li>
                                        )
                                    })
                                }

                                        {
                                            (this.props.countryList.length===0)?
                                            ( <li 
                                                className="border li"
                                                onClick={this.chooseCountry}
                                                >
                                                <i className="iconfont icon-jia"></i>
                                                </li>
                                            ):''
                                        }
                                    
                                   
                                    {
                                        (this.props.countryList.length<3&&this.props.countryList.length!==0)?(
                                            <li
                                                className="border li"
                                                onClick={this.chooseCountry}
                                            >
                                                <i className="iconfont icon-jia"></i>
                                            </li>
                                        ):''
                                    }
                                </ul>
                            </div>
                            <div>
                                <p>
                                    <i className="iconfont icon-city position"></i>
                                    必去城市(选填)
                        </p>
                                <ul className="list-wrap">
                                    {
                                        (this.props.cityList!==undefined)
                                        ?this.props.cityList.map((value,index)=>{
                                            return (
                                                <li 
                                                className="border li"
                                                key={value.cityid+value.cityimg+value.cityname}
                                                >
                                                    <img src={value.cityimg} alt="" className="img"/>
                                                    <span>{value.cityname}</span>
                                                    <i 
                                                    className="iconfont icon-close close"
                                                    onClick={this.deleteMustCity(index)}
                                                    ></i>
                                                </li>
                                            )
                                        }):''
                                        
                                    }
                                    {
                                        (this.props.cityList!==undefined&&this.props.cityList.length===0)?
                                        ( <li 
                                            className="border li"
                                            onClick={this.getMustCity}
                                            >
                                            <i className="iconfont icon-jia"></i>
                                            </li>
                                        ):''
                                    }
                                    {
                                        (this.props.cityList.length<3&&this.props.cityList.length!==0)?(
                                            <li
                                                className="border li"
                                                onClick={this.getMustCity}
                                            >
                                                <i className="iconfont icon-jia"></i>
                                            </li>
                                        ):''
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="nextTip">下一步</div>
                    </StepOneWrap>
                </SectionWrap>

                <ChooseWrap style={{height:this.props.isShow?'':'100%'}}>
                    <ChooseCity></ChooseCity>
                </ChooseWrap>
                <ChooseWrap style={{height:this.props.countryShow?'':'100%'}}>
                    <ChooseCountry></ChooseCountry>
                </ChooseWrap>
                <ChooseWrap style={{height:this.props.mustCity?'':'100%'}}>
                    <MustCity></MustCity>
                </ChooseWrap>
            </Wrap>

        )
    }
}
export default connect(mapState,mapDispatch)(StepOne)
