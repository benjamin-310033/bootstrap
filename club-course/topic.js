let topicsArray = [
    "1600自由式 400專項 200衝刺 400漫游",
    "1600混合式 400專項 200衝刺 400漫游",
    "1600專項 400自由式 200衝刺 400漫游",
    "1600自由式 400專項 200衝刺 400漫游",
    "800蝶式 400自由式 200衝刺 400漫游"
];
let timeArray = [
    "16:00~18;00",
 
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours0(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

