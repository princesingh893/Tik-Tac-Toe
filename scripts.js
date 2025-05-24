let cellbtn=document.querySelectorAll(".cell");
let reset=document.getElementById("reset");
let newGame=document.getElementById("newGame");
let winner=document.querySelector(".hide");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
cellbtn.forEach((cell)=>{ 
    cell.addEventListener("click",()=>{
        cell.textContent = turn0 ? "X" : "O";
        turn0 = !turn0;
        cell.disabled = true;
        checkWinner();
    }); 
});
const checkWinner = () =>{
    for(let pattern of winPattern){
        let val1 = cellbtn[pattern[0]].textContent;
        let val2 = cellbtn[pattern[1]].textContent;
        let val3 = cellbtn[pattern[2]].textContent;
        if(val1==="X" && val2==="X" && val3==="X" || val1==="O" && val2==="O" && val3==="O"){
            winner.style.display="block";
            winner.textContent=val1+" is winner";
        }
    }
}
reset.addEventListener("click",()=>{
    cellbtn.forEach((cell)=>{
        cell.textContent="";
        cell.disabled=false;
    })
    winner.style.display="none";
})
newGame.addEventListener("click",()=>{
    cellbtn.forEach((cell)=>{
        cell.textContent="";
        cell.disabled=false;
    })
    winner.style.display="none";
})