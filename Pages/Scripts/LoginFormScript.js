$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

        if (username === 'admin' && password === 'admin') {
            window.location.href = 'Main_page.html'; // Перенаправление при успешном входе
        } else {
            $('#errorMessage').show(); // Показ сообщения об ошибке
        }
    });
});
