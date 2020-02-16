import React, { Component } from 'react'

import {TitleWrap} from './title.js'

export class Title extends Component {
    render() {
        return (
            <TitleWrap>
                <h2>{this.props.title}</h2>
            </TitleWrap>
        )
    }
}

export default Title
