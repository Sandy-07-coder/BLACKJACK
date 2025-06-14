// Grabbing the elements
const infoEl=document.getElementById("info-el");
const blackjackEl=document.getElementById("blackjack-el");
let scoreEl=document.getElementById("score-el");
let startBtn=document.getElementById("start-btn");
const drawBtn=document.getElementById("draw-btn")
let cardsEl=document.getElementById("cards-el");
let moneyEl=document.getElementById("money-el");
let collectEl=document.getElementById("collect-el");

//creating an array to store the cards
let cards=[];
let sum;
let blackjack;
let winning=50;
let flag;
let money=150;

startBtn.innerText+=" - 25$"

// assigning the random blackjack score when started
startBtn.addEventListener("click",function(){
    if(money<25){
        infoEl.innerText="You don't have enough money to start this game";
        infoEl.style.color="orange";
        return;
    }
    let random=Math.floor(Math.random()*30)+1;
    blackjack=random;
    blackjackEl.innerText="BlackJack Score: "+random;
    sum=0;
    scoreEl.innerText="Your Score :"+sum;
    render();
    money-=25;
    moneyEl.innerText="Your Money: "+money+"$";
    
    
})

drawBtn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*14)+1;
    if(random>10){
        random=10;
    }
    if(random===1){
        random=11;
    }
    sum+=random;
    cards.push(random);
    cardsEl.innerText+=random+"-";
    scoreEl.innerHTML="Your Score : "+sum;

    if(sum<blackjack){
        infoEl.innerText="You need to draw a new card !";
    }
    else if(sum===blackjack){
        infoEl.innerText="You have got BlackJack !";
        infoEl.style.color="skyblue";
        collectEl.innerText="Collect: "+winning+"$"
        money+=winning;

    }
    else{
        infoEl.innerHTML="You are out of the game !";
        infoEl.style.color="red";
        this.disabled=true;
    }



})

function render(){
    cardsEl.innerText="Your Cards :"
    infoEl.innerText="You need to draw a new card !"
    infoEl.style.color="white";
    drawBtn.disabled=false;
}

moneyEl.innerText+=money+"$";

collectEl.addEventListener("click",function(){
    moneyEl.innerText="Your Money:"+money+"$";
    collectEl.innerText="Collect: 0$";
})


