function muestra_oculta(id){
    let nav = document.getElementById(id)
    if (nav.style.display == "flex"){
        nav.style.display = "none";
    }
    else {
        nav.style.display = "flex";
    }
}