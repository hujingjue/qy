import React, { Component } from 'react'
import {SearchWrap} from './cancel.js'

import {connect} from 'react-redux'

const mapState=state=>({
    isShow:state.plane.isShow,
    countryShow:state.plane.countryShow
})

const mapDispatch=dispatch=>{
    return {
        change:()=>{
            dispatch({
                type:'show',
                isShow:true
            })
        },
        changeCountry:()=>{
            dispatch({
                type:'countryShow',
                countryShow:true
            })
        }
    }
}

class Search extends Component {
    handleCancel=()=>{
        if(this.props.type==='chooseCountry'){
            this.props.changeCountry()
        }else if(this.props.type==='chooseCity'){
            this.props.change()
        }
    }
    render() {
        return (
            <SearchWrap 
                onClick={this.handleCancel}
            >
                取消
            </SearchWrap>
        )
    }
}
export default connect(mapState,mapDispatch)(Search)
