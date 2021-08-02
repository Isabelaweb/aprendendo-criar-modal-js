window.addEventListener("DOMContentLoaded", () => {
    const sobreMin$ = document.querySelector(".sobreMim");
    const sobreMinFechar$ = document.querySelector(".fecharSobreMim");
    const containerModal$ = document.querySelector(".container-modal-sobre-mim");
    const experiencias$ = document.querySelector(".experiencias");
    const containerModalExperiencias$ = document.querySelector(".container-modal-experiencias");
    const experienciasFechar = document.querySelector(".fecharExperiencias");


    // abrir modal com o sobre min
    sobreMin$.addEventListener("click", () => {
        containerModal$.style.display = "grid";
    });
    sobreMinFechar$.addEventListener("click", () => {
        containerModal$.style.display = "none";
    });

    experiencias$.addEventListener("click", () => {
        containerModalExperiencias$.style.display = "grid";
    });

    experienciasFechar.addEventListener("click", () => {
        containerModalExperiencias$.style.display = "none";
    })
})