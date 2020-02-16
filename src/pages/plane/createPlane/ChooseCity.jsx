import React, { Component } from 'react'

import {ChooseCityWrap} from  './ChooseCity.js'

import Cancel from 'components/plane/Cancel.jsx'
import Search from 'components/plane/Search.jsx'

import {connect} from 'react-redux'

import {httpGet} from 'utils/http.js'

const mapState=(state)=>{
    return ({isShow:state.plane.isShow,city:state.city.city})
}

const mapDispatch=dispatch=>{
    return {
        change:()=>{
            dispatch({
                type:'show',
                isShow:true
            })
        },
        getCity:(city)=>{
            dispatch({
                type:'city',
                city
            })
            
        }
    }
}


class ChooseCity extends Component {
    state={
        list:[]
    }

    async componentDidMount(){
        let url='/plan/city/search_start_city'
        this.getData(url)
        
    }

    handleCancle=()=>{
        this.props.change()
    }


    handleChooseCity=(e)=>{
        this.props.getCity(e.target.innerHTML)
        this.props.change() 
    }

    getList=(kw)=>{
        let url='/plan/city/search_start_city'
        this.getData(url,kw)
    }

    async getData(url,kw=''){
        let result=await httpGet({
            url,
            params:{
                kw,
                limit:10
            }
        })
        this.setState({
            list:result.data.data
        })
    }

    render() {
        return (
            <ChooseCityWrap>
                <div>
                    <div>
                        <Search 
                        type="chooseCity" 
                        sendData={this.getList} 
                        placehoder="搜索出发及返回城市"
                        ></Search>
                        <ul className="list-wrap">
                            {
                                this.state.list.map(value=>{
                                    return (
                                        <li 
                                        key={value.cityid}
                                        onClick={this.handleChooseCity}
                                        >
                                            {value.cityname}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Cancel type='chooseCity'></Cancel>
                </div>
            </ChooseCityWrap>
        )
    }
}
export default connect(mapState,mapDispatch)(ChooseCity)
