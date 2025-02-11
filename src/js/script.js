function hidePirateCard() {
    const cardOpened = document.querySelector(".open");
    cardOpened.classList.remove("open");
}

function showPirateCard(pirate) {
    const idPirateSelect = pirate.attributes.id.value;
    const idPirateToOpen = idPirateSelect +"-card";
    const cardPirateToOpen = document.getElementById(idPirateToOpen);
    cardPirateToOpen.classList.add("open");
    return idPirateSelect;
}

function removeActiveClass() {
    const activePirate = document.querySelector(".active");
    activePirate.classList.remove("active");
}

function addActiveClass(idPirateSelect) {
    const selectedPirate = document.getElementById(idPirateSelect);
    selectedPirate.classList.add("active");
}


document.querySelectorAll(".pirate").forEach(pirate =>{
    pirate.addEventListener("click", () => {
        hidePirateCard();
        const idPirateSelect = showPirateCard(pirate);
        removeActiveClass();
        addActiveClass(idPirateSelect);
    }) 
})
