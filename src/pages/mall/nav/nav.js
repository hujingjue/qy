import styled from 'styled-components'

export const NavWrap = styled.div`
    ul:first-child{
        display:flex;
        flex-wrap:wrap;
        margin-top:.2rem;
        li{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:.7rem;
            width:25%;
            margin-bottom:.1rem;
            color:#646464;
            img{
                width:.44rem;
                height:.44rem;
                margin-bottom:.05rem;
            }
        }
    }
    .space{
        width:100%;
        height:.15rem;
        background:#f5f5f5;
    }
    ul:nth-child(3){
        display:flex;
        flex-wrap:wrap;
        li{
            height:.4rem;
            width:33.3333%;
            display:flex;
            align-items:center;
            padding-left:.15rem;
            border-bottom:1px solid #F5F5F5;
            border-right:1px solid #F5F5F5;
            img{
                width:.17rem;
                height:.17rem;
            }
        }
    }
`