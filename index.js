const input = document.getElementById("input")
const addlist =document.getElementById("list")
document.getElementById("basic-addon2").addEventListener("click", function(){
    if(input.value===""){
        alert("home")
    }
    else{
        const list = document.createElement("li")
        list.textContent = input.value;
        list.classList.add("list-group-item","category-tag")
        addlist.appendChild(list)
    
    }
    input.value =""
    save()


})
addlist.addEventListener("click",function(e){
    e.target.remove()
})
input.addEventListener("keydown", function(e){
    if(e.key ==="Enter"&& input.value!==""){
        const list = document.createElement("li")
        list.textContent = input.value;
        list.classList.add("list-group-item","category-tag")
        addlist.appendChild(list)
        input.value =""
        
        
        
        
    }
    save()
})

function save(){
    localStorage.setItem("data", addlist.innerHTML)

}
function read(){
    addlist.innerHTML =localStorage.getItem("data")
}
read()


     










