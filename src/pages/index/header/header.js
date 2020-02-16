import styled from 'styled-components'

export const HeaderWrap = styled.div`
   display:flex;
   height:.44rem;
   align-items:center;
   padding: 0 .15rem;
   img:first-child{
      width:.64rem;
      height:.2rem;
   }
   >div{
      flex:1;
      margin:0 .1rem;
      height:.3rem;
      background:#f0f0f0;
      border-radius:.3rem;
      padding:0 .15rem;
      display:flex;
      align-items:center;
      color:#444;
      i{
         height:.16rem;
         font-size:.12rem;
         font-weight:bold;
         margin-right:.1rem
      }
      span{
         overflow:hidden;
         text-overflow:ellipsis;
         -webkit-line-clamp:1;
         -webkit-box-orient:vertical;
         flex-basis:100%;
         display: -webkit-box;
      }
   }
   img:last-child{
      width:.28rem;
      height:.28rem;
   }
`