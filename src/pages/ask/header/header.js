import styled from 'styled-components'

export const HeaderWrap = styled.div`
    >div{
        display:flex;
        height:.4rem;
        padding:0 .15rem;
        align-items:center;
        justify-content:space-between;
        color:#11BF79;
        box-shadow:0 0 10px 1px rgba(0,0,0,.3);
        i{
            font-size:.2rem;
        }
        div:nth-child(2){
            flex:1;
            height:.3rem;
            margin:0 .2rem;
            background:#f2f2f2;
            color:#B2B2B2;
            border-radius:.3rem;
            display:flex;
            align-items:center;
            i{
                font-size:.14rem;
                padding:0 .1rem;
            }
        }
        div:last-child{
            font-size:.18rem;
        }
    }
`