document.addEventListener("DOMContentLoaded", function() {
    // Agrega un manejador de eventos a los enlaces con la clase "ver-detalles"
    const verDetallesLinks = document.querySelectorAll('.ver-detalles');
    let edicionHabilitada = true; // Variable de control para habilitar la edición
    

    verDetallesLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            Swal.fire({
                title: 'Confirmación',
                text: '¿Está seguro de que desea editar la información? Solo se permite una edición.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, editar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Deshabilitar futuras ediciones
                    edicionHabilitada = false;

                    // Definir la estructura del formulario
                    const formHTML = `
                        <form id="promocionForm">
                        <div class="form-group">
                            <label for="nombre">Nombre del Empleado:</label>
                            <input type="text" class="form-control" id="nombre" value="Nombre completo" disabled>
                            <button id="cambiarNombre" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <div class="form-group">
                            <label for="departamento">Departamento:</label>
                            <input type="text" class="form-control" id="departamento" value="Departamento o área de trabajo" disabled>
                            <button id="cambiarDepartamento" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <div class="form-group">
                            <label for="puesto">Puesto de Trabajo Actual:</label>
                            <input type="text" class="form-control" id="puesto" value="Puesto actual" disabled>
                            <button id="cambiarPuesto" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <div class="form-group">
                            <label for="motivo">Motivo de la Solicitud:</label>
                            <textarea class="form-control" id="motivo" rows="4" disabled>Explica detalladamente por qué solicitas una promoción laboral</textarea>
                            <button id="cambiarMotivo" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <div class="form-group">
                            <label for="logros">Logros y Contribuciones:</label>
                            <textarea class="form-control" id="logros" rows="4" value="Enumera tus logros, responsabilidades y contribuciones en la empresa" disabled></textarea>
                            <button id="cambiarLogros" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <div class="form-group">
                            <label for="observaciones">Observaciones Adicionales:</label>
                            <textarea class="form-control" id="observaciones" rows="4" placeholder="Cualquier observación o información adicional que desees agregar" disabled></textarea>
                            <button id="cambiarObservaciones" class="btn btn-link" type="button">Cambiar</button>
                        </div>
                        <button id="guardarCambios" class="btn btn-primary" disabled>Editar Solicitud de Promoción Laboral</button>
                    </form>
                    `;

                    // Muestra la alerta de SweetAlert con el formulario
                    Swal.fire({
                        title: 'Solicitud de Promoción Laboral',
                        html: formHTML,
                        showConfirmButton: false, // No mostrar el botón "OK"
                    });

                    // Habilitar la edición como se muestra en el código anterior
		 const cambiarNombreBtn = document.getElementById('cambiarNombre');
                const cambiarDepartamentoBtn = document.getElementById('cambiarDepartamento');
                const cambiarPuestoBtn = document.getElementById('cambiarPuesto');
                const cambiarMotivoBtn = document.getElementById('cambiarMotivo');
                const cambiarLogrosBtn = document.getElementById('cambiarLogros');
                const cambiarObservacionesBtn = document.getElementById('cambiarObservaciones');
                const guardarCambiosBtn = document.getElementById('guardarCambios');
    
                cambiarNombreBtn.addEventListener('click', function() {
                    document.getElementById('nombre').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                cambiarDepartamentoBtn.addEventListener('click', function() {
                    document.getElementById('departamento').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                cambiarPuestoBtn.addEventListener('click', function() {
                    document.getElementById('puesto').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                cambiarMotivoBtn.addEventListener('click', function() {
                    document.getElementById('motivo').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                cambiarLogrosBtn.addEventListener('click', function() {
                    document.getElementById('logros').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                cambiarObservacionesBtn.addEventListener('click', function() {
                    document.getElementById('observaciones').disabled = false;
                    guardarCambiosBtn.disabled = false;
                });
    
                // Guardar los cambios en el formulario
                guardarCambiosBtn.addEventListener('click', function() {
                    Swal.fire(
                            'Cambios Guardados!',
                            'El area RRHH se contactara contigo pronto!',
                            'success'
                    )
                }
            )}
        });
    });
});
});


//funcion aprobada
document.addEventListener("DOMContentLoaded", function() {
    const aprobadoButton = document.getElementById('aprobado');
  
    aprobadoButton.addEventListener('click', function() {
      Swal.fire({
        icon: 'success',
        title: 'Solicitud Aprobada',
        text: 'Tu solicitud fue aprobada.',
      });
    });
  });