const colors = ['red', 'orange', 'blue', 'green'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click",function(){

    const randomNumbers = getRandomNumbers();
    //console.log(randomNumbers);
    document.body.style.backgroundColor = colors[randomNumbers];
    color.textContent = colors[randomNumbers];
    // console.log(document.body);
});

function getRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}

function copyPaste(){
    const copyText = document.getElementById("clip").textContent;
    //copyText.select();
    // copyText.setSelectionRange(0, 99999);
    var clip = navigator.clipboard.writeText(copyText);
    console.log(copyText);
    window.alert("Value Copied : " +  copyText);
}

var Mbtn = document.getElementById('buttonRole');

Mbtn.addEventListener("click", function(){
    
})