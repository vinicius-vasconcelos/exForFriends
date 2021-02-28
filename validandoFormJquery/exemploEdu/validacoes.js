$(document).ready(() => {
    $('#cpf').mask('000.000.000-00');
    $('#celular').mask('(00)00000-0000');

    $('#nome').addClass('error');
    $('#cpf').addClass('error');
});

$('#nome').blur(function () {

    if (this.value.trim() == '') {
        $('#nome').removeClass('success');
        $('#nome').addClass('error');
    }
    else {
        $('#nome').removeClass('error');
        $('#nome').addClass('success');
    }
});

$('#cpf').blur(function () {

    if (this.value.trim() == '' || this.value.length != 14) {
        $('#cpf').removeClass('success');
        $('#cpf').addClass('error');
    }
    else {
        $('#cpf').removeClass('error');
        $('#cpf').addClass('success');
    }
});

$('#celular').blur(function () {

    if (this.value.trim() != '') {
        if (this.value.length != 14) {
            $('#celular').removeClass('success');
            $('#celular').addClass('error');
        } else {
            $('#celular').removeClass('error');
            $('#celular').addClass('success');
        }
    } else {
        $('#celular').removeClass('success');
        $('#celular').removeClass('error');
    }
});

$('#email').blur(function () {

    if (this.value.trim() != '') {
        if (this.value.includes('@') && this.value.includes('.com')) {
            $('#email').removeClass('error');
            $('#email').addClass('success');
        } else {
            $('#email').removeClass('success');
            $('#email').addClass('error');
        }
    } else {
        $('#email').removeClass('success');
        $('#email').removeClass('error');
    }
});