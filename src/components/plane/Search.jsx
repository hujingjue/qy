import React, { Component,createRef } from 'react'

import {SearchWrap} from './search.js'

import _ from 'lodash'


export default class Search extends Component {
    constructor(){
        super()
        this.inputRef=createRef()
    }
    searchCity=async ()=>{
        this.props.sendData(this.inputRef.current.value)
    }

    render() {
        return (
            <SearchWrap>
                <div className="input-wrap">
                    <input 
                        type="text"
                        placeholder={this.props.placehoder}
                        onKeyUp={_.debounce(this.searchCity,500)}
                        ref={this.inputRef}
                        />
                    <i className="iconfont icon-search"></i>
                </div>
            </SearchWrap>
        )
    }
}
