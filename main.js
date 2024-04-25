const body = document.getElementById('body');


function FetchGreen(){
    let input = document.getElementById('HexColor');
    body.style.backgroundColor = "green";
    input.value = "#008000";
}

function FetchYellow(){
    let input = document.getElementById('HexColor');
    body.style.backgroundColor = "yellow";
    input.value = "#FFFF00";
}
function FetchRed(){
    input = document.getElementById('HexColor');
    body.style.backgroundColor = "red";
    input.value = "#FF0000";
}
function Random(){
    let input = document.getElementById('HexColor');
    let color ='#' ;
    const random = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hex;
    for(let i=0;i<6;i++){
        hex =  Math.floor(Math.random()*16);
        color= color + random[hex]; 
    }
    body.style.backgroundColor = color;
    input.value = color;
}
