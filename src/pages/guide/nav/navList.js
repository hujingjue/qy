import styled from 'styled-components'

export const NavListWrap = styled.div`
    margin-top:.1rem;
    ul{
        display:flex;
        flex-wrap:wrap;
        background:#fff;
        li{
            flex:25%;
            height:.42rem;
            text-align:center;
            line-height:.42rem;
            border-bottom:1px solid #e7e7e7;
            position: relative;
            span{
                display:inline-block;
                padding:.01rem .1rem;
                line-height:.28rem;
                border-radius:.05rem;
                font-size:.16rem;
            }
            i{
                position:absolute;
                right:0;
                top:.1rem;
                display:inline-block;
                width:.01rem;
                height:.22rem;
                background:#e7e7e7;
               
            }
        }
    
        
    }
    .active{
        background:#ED323C;
        color:#fff;
    }
`