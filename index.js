let count = 0
let countEl = document.getElementById("count-el")
function incrementBtn(){
    count+=1
    countEl.innerText=count
}
function clearBtn(){
    count=0
    countEl.textContent=count
}
function saveBtn(){
    document.getElementById("saveEntry").textContent+=" - "+count
}
