var popUp_Close = document.getElementById("model")
function handleClose(){
    document.getElementsByClassName("popup")
    [0].classList.add("close")
}

function handleCopy(code,id){
    var copiedCode = document.getElementById(code).innerText
    copyToClipBoard(copiedCode)
    handleBtnDisable(id)
}

function copyToClipBoard(copiedCode){
    const textarea = document.createElement("textarea")
    textarea.setAttribute('readonly','');
    textarea.value = copiedCode
    textarea.style.position = "absolute"
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
}

function handleBtnDisable(id){
    var allBtn = document.getElementsByClassName('copy_btn')
    for(var i=0;i<allBtn.length;i++){
        if(allBtn[i].id===id){
            allBtn[i].classList.add("disable")
            allBtn[i].innerText="CODE COPIED"
        }else if(allBtn[i].id !== id){
            allBtn[i].classList.remove("disable")
            allBtn[i].innerText="COPY CODE"

        }
        console.log(allBtn[i].id,id)    

    }
}