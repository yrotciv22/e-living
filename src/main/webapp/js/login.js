$(document).ready(function() {
    const validId = "admin";
    const validPassword = "1234";

    $('#login-form').on('submit', function(event) {
        event.preventDefault();

        $('#error-message').hide();

        const enteredId = $('input[name="id"]').val();
        const enteredPassword = $('input[name="password"]').val();

        if (enteredId === validId && enteredPassword === validPassword) {

            window.location.href = 'productMap.html';
        } else {

            $('#error-message').text('잘못된 아이디 혹은 비밀번호입니다.').show();
        }
    });
});