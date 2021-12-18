/* let cont = document.getElementsByClassName("cont") */
let cont = 0;
document.getElementById("cont").innerHTML = cont;
function increment(){
    cont++
    document.getElementById("cont").innerHTML = cont;
}

function decrement(){
    if (cont<=0){
        return cont
    }
    cont--
    document.getElementById("cont").innerHTML = cont;
}
