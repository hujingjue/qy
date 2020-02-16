const hot=require('./hot.json')
const asia=require('./asia.json')
const europe=require('./europe.json')
const northAmerica=require('./northAmerica.json')
const southAmerica=require('./southAmerica.json')
const oceania=require('./oceania.json')
const africa=require('./africa.json')
const antarctica=require('./antarctica.json')

module.exports=()=>{
    return {
        hot,
        asia,
        europe,
        northAmerica,
        southAmerica,
        oceania,
        africa,
        antarctica
    }
}