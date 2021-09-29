
let button=document.querySelector(".btn");
let container=document.querySelector(".container");
let input=document.querySelector(".input");
let form=document.querySelector("form");
const colorTsk=document.querySelector(".task");
const doneTask=document.querySelector(".doneTask");
let btnDelete=document.querySelector(".btnDelete");
const NumberTaskRemoved=document.querySelectorAll(".task");
const allTask=document.querySelectorAll(".container .task");
let fav=document.querySelector(".fav");
// let x=document.querySelectorAll(".fav .task");






let countRemove=0; 

container.addEventListener('click',(e)=>{

  
if(e.target.className=="icon-bin icon"){
    
    let removeT=e.target.parentElement.parentElement
    removeT.remove();
    doneTask.append(removeT)
    countRemove =countRemove+NumberTaskRemoved.length;
    

    
    removeT.style.backgroundColor="red";

    document.querySelector(".removeTask").innerHTML=countRemove;
   
    
    countAdd=countAdd-allTask.length;
    document.querySelector(".addTask").innerHTML=countAdd;
    



    


}

else if(e.target.className=="icon-sad icon"){

e.target.classList.add("dn")
const heart=`<span class="icon-heart icon"> </span> `


e.target.parentElement.parentElement.getElementsByClassName('txtTask')[0].classList.add('finish')
e.target.parentElement.innerHTML+=heart;

}

else if (e.target.className=="icon-heart icon"){

    e.target.parentElement.parentElement.getElementsByClassName('txtTask')[0].classList.remove('finish')
    e.target.classList.add("dn")
const removeHeart=`<span class="icon-sad icon"> </span> `
e.target.parentElement.innerHTML+=removeHeart;

}

else if(e.target.className=="icon-star-full icon"){

    e.target.classList.add("orange")
    container.prepend(e.target.parentElement)

fav.append(e.target.parentElement)
favCount.innerHTML=document.querySelectorAll(".fav .task").length;


    
}


else if(e.target.className=="icon-star-full icon orange"){

    e.target.classList.remove("orange")
    container.append(e.target.parentElement)
   


}



});










let countAdd=1;
button.addEventListener("click",(e)=>{

    e.preventDefault()

    if(input.value.length == 0 ) { 
    alert('Enter Task Name Please!')
    return
}

    var color=["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

    let hex="#"
    for(let i=0; i<6; i++){
    
    var rand = Math.floor( Math.random()*color.length)
    hex+=color[rand]
    
    };



    const myTask= `<div class="task" style="background-color: ${hex};">
    <span class="icon-star-full icon"> </span>
    <p class="txtTask">${input.value}</p>
    <div>
     <span class="icon-bin icon"> </span>
     <span class="icon-sad icon"> </span> 
    </div>
    
</div>`
  
    container.innerHTML+=myTask;
    countAdd=countAdd+allTask.length;
    document.querySelector(".addTask").innerHTML=countAdd;
    
    input.value="";

       if(e.target.className=="btnDelete"){

  
        // e.target.parentElement.parentElement.parentElement.remove() 
        
       
        allTask.forEach(e => e.remove());
    
      
       
        
        }






});