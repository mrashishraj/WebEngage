var popUp_Close = document.getElementById("model")
function handleClose(){
    document.getElementsByClassName("popup")
    [0].classList.add("close")
}

var handleCopy = document.getElementById("handleCopy")
handleCopy.addEventListener("click",function(){
    var code1 = document.getElementById("code2").innerText
    copyToClipBoard(code1)
})

function copyToClipBoard(text){
    const textarea = document.createElement("textarea")
    textarea.setAttribute('readonly','');
    textarea.value = text
    textarea.style.position = "absolute"
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
}