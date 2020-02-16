import styled from 'styled-components'

export const FooterWrap = styled.div`
    footer{
        height:1.1rem;
        background:#2d3741;
        position: relative;
        ul{
            display:flex;
            justify-content:space-around;
            font-size:.18rem;
            color:#9ea3ab;
            padding:.2rem 0 .1rem 0;
        }
        p{
            color:#656669;
            text-align:center;
            font-size:.12rem;
        }
    }
    footer::before{
        content:'';
        display:block;
        position:absolute;
        left:0;
        top:0;
        height:.06rem;
        width:100%;
        background:#2bab79;
    }
`