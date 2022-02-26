window.onload=function (){
    displayRandomReview();
    document.getElementById("reviewss").className+="left-box curr"
}

async function displayRandomReview(){
    showLoadingAnimation()
    let comments = await loadRandomComments()
    hideLoadingAnimation()
    let newInner = ""
    for(let i = 0; i < comments.length; i++)
        newInner += "<li class='order'><section><h5>"+comments[i].author.toString()+"</h5><h6>"+comments[i].text+"</h6></section></li>"
    document.getElementById('reviewsThemselves').innerHTML = newInner
}

async function loadRandomComments(n = 8) {
    let result = []
    let id = getRandomInt(300)
    for(let i = 0; i < n; i++) {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments/'+id)
        id++
        let json = await response.json()
        result.push({author: json.email, text: json.body})
    }
    return result
}

function showLoadingAnimation() {
    document.getElementById("body").className="waitPointer"
}

function hideLoadingAnimation() {
    document.getElementById("body").className="normalPointer"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}