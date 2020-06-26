/*
window.onload=function(){
    //document.write("Hello JavaScript!");
}
*/

$(document).ready(function(){
    $("#courseTable").append(
        "<tr><th>星期</th><th>時間</th><th>訓練項目</th></tr>"
    );

    let topicCount = topicsArray.length;
    

    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<topicCount; x++){
        let thisDate =  timeArray;
        let trSpecial = "<tr>";
        if(topicsArray[x]=="1600混合式 400專項 200衝刺 400漫游"){
            trSpecial = "<tr style='background-color:#d9e6f2'>";
        }if(topicsArray[x]=="1600自由式 400專項 200衝刺 400漫游"){
            trSpecial = "<tr style='background-color:#6699cc'>";
        }if(topicsArray[x]=="1600專項 400自由式 200衝刺 400漫游"){
            trSpecial = "<tr style='background-color:lightblue'>";
        }if(topicsArray[x]=="800蝶式 400自由式 200衝刺 400漫游"){
            trSpecial = "<tr style='background-color:#b3cce6'>";
        }
        
        $("#courseTable").append(
            trSpecial+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.slice(0)+"</td>"+
            "<td>"+ topicsArray[x]+"</td>"+
            "</tr>"
        );
    }
});