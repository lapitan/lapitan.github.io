window.onload =function(){
    if(window.location.toString().includes("index")){
        document.getElementById("aboutUs").className+="left-box curr"
    }else if(window.location.toString().includes("allOrders")){
        document.getElementById("allOrders").className+="left-box curr"
        document.getElementById("mainOrders").className+="orders curr"
    } else if(window.location.toString().includes("contacts")){
        document.getElementById("contacts").className+="left-box curr"
    }else if(window.location.toString().includes("pendingOrders")){
        document.getElementById("allOrders").className+="left-box curr"
        document.getElementById("pendingOrders").className+="orders curr"
    }else if(window.location.toString().includes("InProcessOrders")){
        document.getElementById("allOrders").className+="left-box curr"
        document.getElementById("inProcessOrders").className+="orders curr"
    }else if(window.location.toString().includes("FinishedOrders")){
        document.getElementById("allOrders").className+="left-box curr"
        document.getElementById("finishedOrders").className+="orders curr"
    }else if(window.location.toString().includes("reviews")){
        document.getElementById("reviewss").className+="left-box curr"
    }
};