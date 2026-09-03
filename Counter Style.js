let counterElement = document.getElementById("counterValue") ;
function increase(){
    let previousCounterValue = counterElement.textContent ;
    let updatedCounterValue = parseInt(previousCounterValue)+1;
    console.log(updatedCounterValue);
    counterElement.textContent=updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }
    // if (updatedCounterValue > 0) {
    //     counterElement.style.color = "green";
    // }
}

function decrease(){
    let previousCounterValue = counterElement.textContent ;
    let updatedCounterValue = parseInt(previousCounterValue)-1;
    counterElement.textContent=updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }
    // if (updatedCounterValue < 0) {
    //     counterElement.style.color = "red";
    // }
}

function reset(){
    let updatedCounterValue = parseInt(0);
    counterElement.textContent=updatedCounterValue;
    counterElement.style.color = "black";
}
