import React, { Component } from 'react'
import Title from 'components/title/Title.jsx'
import {SelectPlayWrap} from './selectPlay.js'


class SelectPlay extends Component {
    render() {
        return (
            <SelectPlayWrap>
                <Title title="精选玩乐"></Title>
                <div>
                    <ul>
                        <li>
                            <div>
                                <span>特价机票</span>
                                <img src="https://fes.qyerstatic.com/FjhPw2CAsHhvxjAuUQvT0EjTfOTF?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>机酒自由行</span>
                                <img src="https://fes.qyerstatic.com/Fh9eg1ZGwLp8GHrTbKSfjwMgUqz8?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>当地玩乐</span>
                                <img src="https://fes.qyerstatic.com/FrnlnoQrQLokB6xx4mGmJhuz9eCf?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>门票/票券</span>
                                <img src="https://fes.qyerstatic.com/Fv-WDaw3GtUH1_8rcId7Bny4bwYV?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>日本高铁</span>
                                <img src="https://fes.qyerstatic.com/FuFMfHPUrw-ms3echc2_SAd1EXoP?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>WiFi电话卡</span>
                                <img src="https://fes.qyerstatic.com/FgxEv9eVMgiTxXvVg4-h5GjE7muR?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>欧铁频道</span>
                                <img src="https://fes.qyerstatic.com/Fu9r87vH7j46Gtafrd8ohKHQEoBm?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>保险频道</span>
                                <img src="https://fes.qyerstatic.com/Fnf6W8mmlmHqGnzGvu-NnM_zK-1p?imageslim" alt=""/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>接送机/包车</span>
                                <img src="https://fes.qyerstatic.com/FnI5stm2aLT-icX075jIpjXIjKT4?imageslim" alt=""/>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </SelectPlayWrap>
        )
    }
}

export default SelectPlay
