import styled from 'styled-components'

export const SortListWrap = styled.div`
    padding:0 .15rem;
    ul{
        display:flex;
        align-items:center;
        margin-top:.05rem;
        flex-wrap:wrap;
        li{
            display:flex;
            align-items:center;
            height:.68rem;
            color:#494949;
            border-bottom:#EEEFF1 solid 1px;
            width:50%;
            font-size:.12rem;
            img{
                width:.4rem;
                height:.4rem;
                margin-right:.1rem;
            }
        }
        li:nth-of-type(odd){
            border-right:#EEEFF1 solid 1px;
        }
        li:nth-of-type(even){
            padding-left:.15rem;
        }
    }
`