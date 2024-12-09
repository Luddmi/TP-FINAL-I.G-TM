let form = document.querySelector('.needs-validation');
            
                // Evitar el envío del formulario si no es válido
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault(); // Evitar el envío
                        event.stopPropagation();
                    }
            
                    form.classList.add('was-validated'); // Mostrar los mensajes de error si el formulario no es válido
                });