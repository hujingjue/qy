import styled from 'styled-components'

export const HeaderWrap = styled.div`
    height:.6rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 .15rem;
    position:absolute;
    width:100%;
    z-index:1;
    color:#fff;
    >i{
        width:.48rem;
        height:.3rem;
    }
    >div{
        flex:1;
        text-align:center;
        background:rgba(0,0,0,.3);
        border-radius:.2rem;
        height:.3rem;
        line-height:.3rem;
    }
`