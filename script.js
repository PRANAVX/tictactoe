
const board = document.querySelector("#board")
const winnerdiv = document.getElementById("winner")
const displaywin = document.getElementById("win")
const button =  document.getElementById("btn")




button.onclick =()=>{
    reset()
    displaywin.classList.add("active")
}

const winpattern =["123","147","456","789","258","357","369","456","789","159"]
let x = [];
let o = [];
let mode = "X"
let count = 0;
let champion =""
board.childNodes.forEach((div)=>{
    div.addEventListener("click", ()=>{
        if(mode=="X" && div.textContent==""){
            div.textContent="X";
            x.push(div.getAttribute("name"))
            
            count++
            mode="O"
            checkWinner()

        }
        else if(mode=="O" && div.textContent==""){
            div.textContent="O";
            o.push(div.getAttribute("name"))
            count++
            mode="X"
            checkWinner()
        }
    if(count==9 && champion==""){
        // gameOver()
        displaywinner("D")

        
        
    }
  

})
})


function checkWinner(){
    const playerx = x.sort().join("");
    const playero = o.sort().join("");
    console.log(playero,playerx)
    for(let x of winpattern){
        // console.log(x)
        if(playerx.includes(x)){
            displaywinner("X")
            
        }
        else if(playero.includes(x)){
            displaywinner("O")
        
        }
    }
    console.log(playerx,playero)
}

function reset(){
    board.childNodes.forEach((div)=>{
        div.textContent="";
        
        
    })
    winnerdiv.textContent="";
    x = [];
    o = [];
    count=0;
    champion=""
}


function displaywinner(winner){
    displaywin.classList.remove("active")
    if(winner=="X"){
        winnerdiv.textContent="X wins"
        champion="X"
    }
    else if(winner=="D"){
        winnerdiv.textContent="Its a Draw"
    }
    else{
        winnerdiv.textContent="O wins"
        champion="O"
    }
}
