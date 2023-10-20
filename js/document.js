// Función para mostrar la interfaz de subida de documentos
function mostrarInterfazSubida() {
    // Ocultar la lista de documentos
    document.querySelector('.lista-documentos').style.display = 'none';

    // Mostrar la interfaz de subida de documentos
    document.querySelector('.upload-interface').style.display = 'block';
}

// Función para volver a la lista de documentos
function volverAListaDocumentos() {
    // Ocultar la interfaz de subida de documentos
    document.querySelector('.upload-interface').style.display = 'none';

    // Mostrar la lista de documentos
    document.querySelector('.lista-documentos').style.display = 'table-row-group';
}

document.addEventListener("DOMContentLoaded", function() {
    const motivoSelect = document.getElementById("motivo");
    const formSueldo = document.getElementById("form_sueldo");
    const formPromocion = document.getElementById("form_promocion");
    const formOtros = document.getElementById("form_otros");

    motivoSelect.addEventListener("change", function() {
        // Ocultar todos los formularios antes de mostrar el seleccionado
        formSueldo.classList.add('hide');
        formPromocion.classList.add('hide');
        formOtros.classList.add('hide');

        // Obtener el valor seleccionado
        const motivoSeleccionado = motivoSelect.value;

        // Mostrar el formulario correspondiente al motivo seleccionado
        if (motivoSeleccionado === "aumento_sueldo") {
            formSueldo.classList.remove('hide');
        } else if (motivoSeleccionado === "promocion_laboral") {
            formPromocion.classList.remove('hide');
        } else if (motivoSeleccionado === "otros") {
            formOtros.classList.remove('hide');
        }
    });
});