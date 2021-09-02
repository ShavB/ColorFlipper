const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexColor = "#";
    for(let i = 0; i<6;i++){
        hexColor += colors[getRandomNumbers1()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    //console.log(document.body);
});

function getRandomNumbers1(){
    return Math.floor(Math.random()*colors.length);
}

function copyPaste(){
    const copyText = document.getElementById("clip").textContent;
    //copyText.select();
    // copyText.setSelectionRange(0, 99999);
    var clip = navigator.clipboard.writeText(copyText);
    //console.log(clip);
    window.alert("Value Copied : " + copyText);
}