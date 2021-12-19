let cont = 0;
document.getElementById("cont").innerHTML = cont;
function increment(){
    cont++
    if (cont>=0){
        document.getElementById("cont").style.color = "black"
   }
    document.getElementById("cont").innerHTML = cont;
}

function decrement(){
    cont-- 
    if (cont<0){
         document.getElementById("cont").style.color = "red"
    }
    document.getElementById("cont").innerHTML = cont;
}
