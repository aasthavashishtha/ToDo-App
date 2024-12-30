let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if(inp.value.length > 0){
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delbtn = document.createElement("button");
        delbtn.innerText = "delete";
        delbtn.classList.add("delete");


        ul.appendChild(item);
        item.appendChild(delbtn);
        inp.value = "";
    }
})

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();

//     })
// }

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
 