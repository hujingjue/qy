import styled from 'styled-components'

export const ChooseCityWrap = styled.div`
    height:100%;
    overflow:hidden;
    >div{
        background:url('https://fes.qyerstatic.com/_plan_/mobile/create/img/pg-2.jpg')no-repeat;
        background-size: cover;
        color:#fff;
        height:100%;
        display:flex;
        flex-direction:column;
        
        >div:first-child{
            flex:1;
            height:100%;
            padding:.1rem .2rem;
            .list-wrap{
                border:.01rem solid #7ae0b4;
                background:#65c978;
                border-top:none;
                border-bottom:none;
                li{
                    height:.46rem;
                    width:100%;
                    line-height:.46rem;
                    border-bottom:.01rem solid #83d192;
                    padding-left:.15rem;
                }
            }
        }
        
    }
    
`