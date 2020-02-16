const init=(d,currentYear,currentMonth,confirmMonth)=>{
    let days=getDays(currentYear,confirmMonth)
    getFirstWeek(d,currentYear,currentMonth)
    let firstDateWeek=d.getDay()
    return {firstDateWeek,days}
}
const getDays=(currentYear,confirmMonth)=>{
    if(confirmMonth===1||confirmMonth===3||confirmMonth===5||confirmMonth===7||confirmMonth===8||confirmMonth===10||confirmMonth===12){
        return 31
    }else if(confirmMonth===4||confirmMonth===6||confirmMonth===9||confirmMonth===11){
        return 30
    }else{
        if((currentYear%4===0&&currentYear%100!==0)||currentYear%400===0){
            return 29
        }else{
            return 28
        }
    }
}

const getFirstWeek=(d,currentYear,currentMonth)=>{
    d.setFullYear(currentYear)
    d.setMonth(currentMonth)
    d.setDate(1)
}

export {
    init
}