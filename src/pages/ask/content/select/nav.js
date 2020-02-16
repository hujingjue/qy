import styled from 'styled-components'

export const NavWrap = styled.div`
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        li{
            width:28vw;
            text-align:center;
            height:.36rem;
            line-height:.36rem;
            border:1px solid silver;
            margin:.1rem 0 ;
            border-radius:.05rem;
            color:#333;
        }
        .active{
            background:#11BF79;
            color:#fff;
            border:none;
        }
    }
`