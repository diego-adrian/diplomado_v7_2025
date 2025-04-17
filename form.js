const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    await response.json();

    const person = {
        name: 'Adrian',
        email: 'test@test.cl',
        lastName: 'López',
        age: 30,
        address: {
            street: 'Calle Falsa',
            number: 123
        },
        hobbies: ['programar', 'leer', 'jugar'],
        isActive: true
      };

    const { name, ...restoDeAtributos } = person;
      

    if (person && person.lastName && person.lastName.length > 0) {
        console.log(person.lastName.toLowerCase());
    }


    clearForm();
    console.log('Limpiando formulario...');
}

const clearForm = () => {
    const form = document.getElementById('formulario');
    form.reset();
    const errores = document.getElementById('errores');
    errores.innerHTML = '';
}


window.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/';
    const form = document.getElementById('formulario');
    const errores = document.getElementById('errores');
    // console.log(form);
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const password = document.getElementById('password').value;

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('apellido', apellido);
        formData.append('email', email);
        formData.append('telefono', telefono);
        formData.append('fecha', fecha);
        formData.append('hora', hora);
        formData.append('password', password);
        
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        // console.log('Form Data:', formData);


        if (nombre === '' || nombre.length < 4) {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de nombre.</p>';
            return;
        }
        if (apellido === '') {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de apellido.</p>';
            return;
        }
        if (email === '') {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de email.</p>';
            return;
        }
        if (telefono === '' || isNaN(telefono)) {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de telefono.</p>';
            return;
        }
        if (fecha === '') {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de fecha.</p>';
            return;
        }
        if (hora === '') {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de hora.</p>';
            return;
        }
        if (password === '') {
            errores.innerHTML += '<p style="color: red">Por favor, completa el campo de contraseña.</p>';
            return;
        }

        await sendData(`${BASE_URL}posts`, {
            nombre,
            apellido,
            email,
            telefono,
            fecha,
            hora,
            password
        });

        console.log('Enviado...');
    });


});