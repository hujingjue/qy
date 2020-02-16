import styled from 'styled-components'

export const HotWrap = styled.div`
    >div:first-child{
        height:.44rem;
        border-bottom:1px solid #e6e8ea;
        line-height:.44rem;
        padding-left:.15rem;
        a{
            display:inline-block;
            padding-right:.2rem;
            color:#444;
            height:.44rem;
        }
        .active{
            color:#2bab79;
            position: relative;
        }
        .active:after{
            content:'';
            display:block;
            position:absolute;
            left:.25rem;
            bottom:-.04rem;
            width:.08rem;
            height:.08rem;
            border-right: 1px solid #e6e8ea;
            border-bottom: 1px solid #e6e8ea;
            transform:rotate(45deg);
            background:#fff;
        }
    }
`