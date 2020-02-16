import styled from 'styled-components'

export const DetailWrap = styled.div`
    padding:0 .15rem;
    >div:first-child{
        height:.6rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        h2{
            font-size:.2rem;
        }
        p{
            color:#a3a3a3;
            font-size:.16rem;
            span{
                color:#000;
                font-size:.14rem;
                padding:0 .05rem;
            }
        }
    }
    .am-wingblank.am-wingblank-lg{
        margin:0;
        img{
            border-radius:.1rem;
        }
    }
    * { touch-action: none; } 
`