let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
    formulario.style.left = "45vw"
    mascara.style.visibility = "visible"

}

function sumirFormulario() {
    formulario.style.left = "-12vw"
    mascara.style.visibility = "hidden"

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        sumirFormulario();
    }

})

