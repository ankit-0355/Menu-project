btnall = document.querySelector("#btnAll")
btnbreakfast = document.querySelector("#btnbreakfast")
btnlunch = document.querySelector("#btnlunch")
btnshakes = document.querySelector("#btnshakes")
btndinner = document.querySelector("#btndinner")

items = document.querySelectorAll(".items")

console.log(btnall,btnbreakfast,items);

// All btn
btnall.addEventListener("click",allfun);

function allfun() {
    items.forEach((item)=> {
            item.classList.remove("hide-item");
    });
}

// Breakfast Btn
btnbreakfast.addEventListener("click",bffun);

function bffun() {
    items.forEach((item)=> {
        item.classList.remove("hide-item");
        if (item.classList.contains("breakfastitem")) {
            // item.classList.add("show-item")
        }
        else {
            item.classList.add("hide-item");
        }
    });
}

// Lunch Btn
btnlunch.addEventListener("click",lunchfun);

function lunchfun() {
    items.forEach((item)=> {
        item.classList.remove("hide-item");
        if (item.classList.contains("lunchitem")) {
            // item.classList.add("show-item")
        }
        else {
            item.classList.add("hide-item");
        }
    });
}

// Shakes Btn
btnshakes.addEventListener("click",shakesfun);

function shakesfun() {
    items.forEach((item)=> {
        item.classList.remove("hide-item");
        if (item.classList.contains("shakesitem")) {
            // item.classList.add("show-item")
        }
        else {
            item.classList.add("hide-item");
        }
    });
}

// Dinner Btn
btndinner.addEventListener("click",dinnerfun);

function dinnerfun() {
    items.forEach((item)=> {
        item.classList.remove("hide-item");
        if (item.classList.contains("dinneritem")) {
            // item.classList.add("show-item")
        }
        else {
            item.classList.add("hide-item");
        }
    });
}