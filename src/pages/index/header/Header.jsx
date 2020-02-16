import React, { Component } from 'react'
import {HeaderWrap} from './header'



class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMTMwIDQxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT7nvJbnu4Q8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwOC40MzggMjIuMmMtLjI1OCA4LjQ5Ny0uNjAzIDExLjY0MS0xLjE2MiAxMi40NDktLjM0NC41NTItLjY4OC42NzktMS4xNjIuNjc5LS41MTcgMC0xLjE2MiAwLTEuOTM3LS4wODUgMS41NS00LjAzNiAyLjQxMS04LjU0IDIuODQtMTMuMDQ0aDEuNDIxem0yMS40Ni02LjQ0bC0zLjcyNi0yLjIyOC0uODYuMjk3aC02LjExM2MuMzAyLS44NS42MDMtMS43Ljg2MS0yLjU5MWg5LjgzOFY1LjQxN2gtOC40MThjLjMzMy0xLjk1OC41OTEtNC4xMzEuNTkxLTQuMTMxTDExNi4xLjI3NmMtLjM0NCAzLjMxNC0uOTQ3IDYuODgyLTEuODA4IDkuODE0VjYuOTA0aC00LjQ3NlYuNzhMMTAzLjc5LjI3NXY2LjYyOWgtNC42NDh2NS44MmgyLjc1NGMtLjE3MiA4LjU0LS42MDMgMTcuODAzLTQuODY0IDIzLjg3OSAxLjU5My45MzQgMy4zNTcgMi41OTEgNC4zNDcgMy45OTMgMS4wMzQtMS40ODcgMS44OTUtMy4xNDQgMi41ODMtNC44NDMuNjg4IDEuNDQ1IDEuMTIgMy40NDEgMS4yMDUgNC45MjggNC42OTIuMTI4IDUuODYxLS41NDcgNy4wNi0yLjI1MSAxLjYzNy0yLjMzMSAxLjkzNi0xOS44ODUgMS45MzYtMTkuODg1bC4wODYtMS45MDgtNi44LS4wMDRjLjA4Ni0xLjMxNy4xMjgtMi42MzQuMTcyLTMuOTA4aDUuNzY3Yy0uMzg3Ljg1LS43MzEgMS42MTQtMS4xNjIgMi4yOTQgMS4wMzMuNTEgMi40OTcgMS4zNiAzLjY1OSAyLjE2N3YxLjk1NGg1Ljk4NmwtLjg4MiAxLjM0Ni0xLjc0My4wMDN2My45NjJoLTQuNDA3djUuNDhoNC40MDd2NC42MzJjMCAuNDY4LS4xNzMuNTUzLS43MzIuNTk1LS41MTcgMC0yLjIwOCAwLTMuNjcxLS4wODUuNzMxIDEuNjE1IDEuNDIgMy45NTIgMS41OTIgNS42MDggNy4zNiAwIDguNjIxLTEuMTg5IDguNjIxLTUuOTl2LTQuNzZoNC44NDJ2LTUuNDhoLTQuODQydi0xLjAybDQuODQyLTcuNjd6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZD0iTTk5LjU0OSAxNi4wMmMtMS40NjMtMS4yNzUtNC41MTktMi43NjItNi44LTMuNjExbC0zLjQ0NCA0LjU0NmMyLjMyNCAxLjAyIDUuMjUxIDIuNzYyIDYuNTg2IDQuMDM2bDMuNjU4LTQuOTd6TTEwMC41NjQgNC41NjJDOTkuMDU3IDMuMjQ1IDk2IDEuNjczIDkzLjY3Ny43OEw5MC4xOSA1LjI4NGMyLjMyNCAxLjA2MyA1LjMzNyAyLjg5IDYuNjcxIDQuMjA3bDMuNzAzLTQuOTN6TTk5LjU0OSAyNi4yNzhsLTUuMDgtMy4wNTljLTEuNTQ4IDUuMTgzLTMuNjEzIDEwLjU4LTUuMTIgMTQuMDJsNS41NzggMi44NTlzLjI2NS0uNjMuNDktMS4yNDNjMS4yOTEtMy4zNTcgMi43OTgtNy45MDMgNC4xMzItMTIuNTc3TTY0LjA5NiAxMC44NThjLTEuNDMtLjA3My02LjY2NC0uNDEtNi42NjQtLjQxLS45NzUgMy40MS0zLjgxNiA2LjA5Ny0xMS43NjQgNi44NDQgMS4xNjIgMS4xOTIgMi42NyAzLjQ5IDMuMTg3IDQuOTc5IDguOTktMS4zOCAxMy41MDYtNS45NzkgMTUuMjQxLTExLjQxM004Ni4yNiAxNS44MTloLTkuOTRjLTEuMzc5IDAtMS42MzYtLjEyNy0xLjYzNi0xLjMxOWwtLjAwNi0zLjY2LTYuMTk3LS4zMTh2NC43N2MwIDQuNjM4IDEuMjkzIDYuMTcgNi44OTIgNi4xN2gxMC4xNTVsLjczMi01LjY0M3pNNDcuMTkgOS4zN2gzNy41NDhWNC4zMThINDcuMTl6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZmlsbD0iIzgyODI4MiIgZD0iTTY5LjUxNiA1LjMyOGgtNy4xMDRWLjI3NWw3LjEwNC41MDZ6TTQ3LjE5IDEzLjQxMmg2LjA4OFY4LjM2SDQ3LjE5ek03OC42NDkgMTMuNDEyaDYuMDlWOC4zNmgtNi4wOXpNNDcuMTkgMjMuMDM3djUuNzAxaDMwLjY1N2MtLjUyMyA1LjExLTIuMzE5IDUuNjA0LTMuNjQ1IDUuNjA0LTEuMTY1IDAtMy41NCAwLTYuMTI5LS4yMTMgMS4yNTIgMS44MzQgMi4xMjYgNC42NzkgMi4yNTYgNi41NTUgOC4yNjQgMCAxMy45NTMtMS4wOTkgMTQuNDEtMTcuNjQ3aC0zNy41NXoiLz48cGF0aCBkPSJNNjAuMzMyIDE4LjYxN2MwIDExLjk3NC02LjE3NCAxNS42NDYtMTQuNjY1IDE2LjkyMSAxLjI1IDEuMjM1IDIuOTU2IDMuNTg0IDMuNTE2IDUuMTU4IDEwLjcyNi0yLjEyMiAxNy44OTctNy43MTMgMTguNC0yMS43MDgiIGZpbGw9IiM4MjgyODIiLz48cGF0aCBkPSJNMjAuMjk3IDMyLjY5Yy02Ljc3IDAtMTIuMjU2LTUuNDY0LTEyLjI1Ni0xMi4yMDRTMTMuNTI4IDguMjgyIDIwLjI5NyA4LjI4MmM2Ljc2OCAwIDEyLjI1NSA1LjQ2NCAxMi4yNTUgMTIuMjA0UzI3LjA2NSAzMi42OSAyMC4yOTcgMzIuNjltMC0zMi40MTVDOS4wODcuMjc1IDAgOS4zMjQgMCAyMC40ODVjMCAxMS4xNjMgOS4wODcgMjAuMjExIDIwLjI5NyAyMC4yMTEgMTEuMjA5IDAgMjAuMjk2LTkuMDQ4IDIwLjI5Ni0yMC4yMVMzMS41MDYuMjc2IDIwLjI5Ny4yNzYiIGZpbGw9IiMwMDc4NTIiLz48cGF0aCBkPSJNMzkuMzQgMzkuOTgxTDIwLjc0MSAyOS4zN2EuMzkuMzkgMCAwIDEtLjA4Mi0uNjE1bDcuOTQxLTcuOTA3YS4zOTMuMzkzIDAgMCAxIC42MTcuMDgybDEwLjY1OCAxOC41MmMuMTk5LjM0NS0uMTg4LjczLS41MzUuNTMyIiBmaWxsPSIjQUMxNjJDIi8+PC9nPjwvc3ZnPg==" alt=""/>
                <div>
                    <i className="iconfont icon--search"></i>
                    <span>搜索目的地、游记攻略等</span>
                </div>
                <img src="https://fes.qyerstatic.com/FurPR8aA_RznD30juuPr3LhFdOiY?imageslim" alt=""/>
            </HeaderWrap>
        )
    }
}

export default Header
