import React, { Component } from 'react'

import { CityListWrap } from './cityList.js'

import { Grid } from 'antd-mobile';

export default class cityList extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <CityListWrap>
                <div>
                    <Grid data={this.props.data}
                        columnNum={3}
                        className='grid-wrap'
                        activeStyle={true}
                        renderItem={value => (
                            <div>
                                <img src={value.img} style={{ width: '64px', height: '96px' }} alt="" />
                                <div>
                                    <p style={{color:'#2c2c2c',fontSize:'13px',marginTop:'10px'}}>{value.cityname}</p>
                                    <p style={{color:'#939393',fontSize:'12px'}}>{value.countryname}</p>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </CityListWrap>
        )
    }
}
