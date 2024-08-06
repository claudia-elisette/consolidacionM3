function showNavbar(){
    document.getElementById("navBar-colapsable").style.display = "flex";
    document.getElementById("navBar-colapsable").style.flexDirection= "column";
}

function hideNavbar(){
    document.getElementById("navBar-colapsable").style.display = "none";
}


function showSection(){
    document.getElementById("section-colapsable").style.display = "block"
}
function hideSection(){
    document.getElementById("section-colapsable").style.display = "none"
}

//encontrar cards existentes
document.querySelectorAll(".clickCard").forEach(card=>{
    card.addEventListener('click', function(){
        //recorrer DOM hasta llegar a card__name y cambiar fontWeight
        card.childNodes[3].children[0].style.fontWeight = '400'
    })
})

function showFiles(){
    document.getElementById("files").style.display = "flex"
    document.getElementById("files").style.flexDirection = "column"
}

function hideFiles(){
    document.getElementById("files").style.display = "none"
}