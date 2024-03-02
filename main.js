document.getElementById("hamburger").addEventListener("click", function(){
    document.getElementById("mobilmenu").style.display = "inline"
    document.getElementById("hamburger").style.display = "none"
    document.getElementById("close").style.display = "inline"
})


document.getElementById("close").addEventListener("click", function(){
    document.getElementById("mobilmenu").style.display = "none"
    document.getElementById("hamburger").style.display = "inline"
    document.getElementById("close").style.display = "none"
})
