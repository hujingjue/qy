import styled from 'styled-components'

export const StepOneWrap = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    background:url('https://fes.qyerstatic.com/_plan_/mobile/create/img/pg-2.jpg')no-repeat;
    background-size: cover;
    color:#fff;
    .step-one-wrap{
        flex:1;
        padding:.2rem;
        font-size:.16rem;
        div:first-child{
            h2{
                font-size:.36rem;
            }
            margin-bottom:.2rem;
        }
        div:nth-child(2){
            div{
                height:.48rem;
                line-height:.48rem;
                text-align:center;
                margin:.1rem 0 .2rem 0;
            }
        }
    }
    .nextTip{
        height:.5rem;
        line-height:.5rem;
        text-align:center;
        background:rgba(0,0,0,.7);
        color:#fff;
    }
.position{
    margin-right:.05rem;
}
.border{
    border:.01rem solid #9ddaae;
    background:rgba(255,255,255,.1);
    background-image:url('https://fes.qyerstatic.com/_plan_/mobile/create/img/bg-ico.png');
}
.list-wrap{
    display:flex;
}
.li{
    width:1.05rem;
    height:1.05rem;
    line-height:1.05rem;
    text-align:center;
    margin:.1rem 0 .2rem 0;
    position: relative;
    margin-right:.1rem;
    .img{
        width:1.05rem;
        height:1.05rem;
        position:absolute;
        top:-.01rem;
        left:-.01rem;
        z-index:1;
    }
    .close{
        position:absolute;
        z-index:2;
        top:0;
        right:0;
        line-height:.18rem;
        color:#fff;
        font-size:.18rem;
        background:#000;
        border-radius:50%;
    }
    span{
        line-height:.2rem;
        position:absolute;
        bottom:0;
        left:.1rem;
        z-index:2;
    }
}
`

export const SectionWrap = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    z-index:1;
`

export const Wrap = styled.div`
    height:100%;
    position: relative;
    .wrap{
        position:absolute;
        z-index:9;
    }
` 
export const ChooseWrap = styled.div`
    position:absolute;
    z-index:9;
    width:100%;
    height:0;
    transition:all .5s;
`
