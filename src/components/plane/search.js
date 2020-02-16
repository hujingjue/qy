import styled from 'styled-components'

export const SearchWrap = styled.div`
    .input-wrap{
        height:.46rem;
        border:.01rem solid #fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .1rem;
        input{
            background:none;
            border:none;
            color:#fff;
        }
        input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
            color: #B2E1B3;
            font-size: .14rem;
        }
    }
`