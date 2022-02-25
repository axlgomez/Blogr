const navBar = document.querySelector("#navBar");
const navBarTwo = document.querySelector("#navBarTwo");
const navBarThree = document.querySelector("#navBarThree");

const burger = document.querySelector("#hamburguesa");
const navInfo = document.querySelector(".header__infomations");

burger.addEventListener("click", ()=> {
    burger.classList.toggle("fa-xmark");
    navInfo.classList.toggle("expand");

});

document.querySelector("#button").addEventListener("click", toggleDisplay);
document.querySelector("#buttonTwo").addEventListener("click", toggleDisplay2);
document.querySelector("#buttonThree").addEventListener("click", toggleDisplay3);

function toggleDisplay () {
    if (navBar.classList.toggle("active")){
        navBarTwo.classList.remove("active");
        navBarThree.classList.remove("active");
        
    }
    if (document.querySelector("#icon").classList.toggle("rotate")){
        document.querySelector("#icon2").classList.remove("rotate");
         document.querySelector("#icon3").classList.remove("rotate");
    } 
}

function toggleDisplay2 () {
    if (navBarTwo.classList.toggle("active")){
        navBar.classList.remove("active")
        navBarThree.classList.remove("active");
    } 
    if (document.querySelector("#icon2").classList.toggle("rotate")){
        document.querySelector("#icon").classList.remove("rotate");
        document.querySelector("#icon3").classList.remove("rotate");
    }   
}

function toggleDisplay3 () {
    if (navBarThree.classList.toggle("active")){
        navBar.classList.remove("active")
        navBarTwo.classList.remove("active");
    }
    if(document.querySelector("#icon3").classList.toggle("rotate")){
        document.querySelector("#icon").classList.remove("rotate");
        document.querySelector("#icon2").classList.remove("rotate");
    }
}






