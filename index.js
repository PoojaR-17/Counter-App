//Access DOM Elements

const showCount = document.getElementById("counter");
const incrementBtn = document.getElementById("inc-btn");
const decrementBtn = document.getElementById("dec-btn");
const resetBtn = document.getElementById("res-btn");
// const imgContainer = document.createElementById("image-container")
const typeNumberElement = document.getElementById("num-type")
let counter = 0;

const updateCounter =()=>{
    showCount.innerHTML=counter;
    if(counter === 0){
        decrementBtn.disabled=true ;
    }else{
        decrementBtn.disabled=false; 
    }
    if(counter===0){
        typeNumberElement.innerHTML ="0 is neither a even nor odd";
        typeNumberElement.classList.add("number-type");
    }
    else if(counter%2===0){
        typeNumberElement.innerHTML ="Even-Number";
        typeNumberElement.classList.add("even-num-type");
        typeNumberElement.classList.remove("Odd-num-type");
    }else{
        typeNumberElement.innerHTML ="Odd-Number";
        typeNumberElement.classList.add("Odd-num-type");
        typeNumberElement.classList.remove("even-num-type");
    }
}

incrementBtn.addEventListener("click",()=>{
    counter++
    updateCounter();
});

decrementBtn.addEventListener("click",()=>{
   if(counter>0) {
    counter--;
    updateCounter();
   }
    
});

resetBtn.addEventListener('click',()=>{
    counter=0;
    updateCounter();
})

// const imageElement = document.createElement('img');
// imageElement.src="https://tse3.mm.bing.net/th?id=OIP.L-oJ5Sv4YcOEn1p0US6z5gHaEo&pid=Api&P=0&h=220";
// imageElement.alt='image';
// imgContainer.appendChild(imageElement);