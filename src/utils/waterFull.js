export default (_)=>{
    let col=parseInt(document.documentElement.clientWidth / 168)
    let arrHeight=[]
    
    if(_.props.listWrap.current){
        Array.from(_.props.listWrap.current.childNodes[0].childNodes).forEach((value, index) => {
            if (index < col) {
                value.style.left = index === 0 ? 168 * index + 'px' : (168+ 10) * index  + 'px'
                arrHeight.push(value.offsetHeight)
            } else {
                let minHeight = Math.min.apply(null, arrHeight)
                let minIndex = arrHeight.indexOf(minHeight)
                value.style.left = minIndex === 0 ? 168 * minIndex + 'px' : (168+ 10) * minIndex  + 'px'
                value.style.top = arrHeight[minIndex] + 20 + 'px'
                arrHeight[minIndex] += value.offsetHeight + 20
            }
        })
        _.props.listWrap.current.style.height = arrHeight[arrHeight.indexOf(Math.max.apply(null, arrHeight))] + 'px'
    }
    
}