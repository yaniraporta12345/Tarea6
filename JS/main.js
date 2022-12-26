function enviarFormulario() {
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Enviar los datos a través de una petición HTTP
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://mi-servidor.com/enviar-formulario");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ nombre, apellido, correo, celular, mensaje }));
  
    // Mostrar una alerta al usuario
    alert("Enviado exitosamente");
  }