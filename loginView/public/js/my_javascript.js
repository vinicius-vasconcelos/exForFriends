$(document).ready(() => {
    $('.error-ico-lo').hide();
    $('.error-ico-pas').hide();
    

    $('#btn').click(() => {
        __clear();

        if($('#login').val().trim() =='') {
            $('.error-ico-lo').show(500);
            $('input#login').addClass('error animated shake');
            return;
        }

        if($('#password').val().trim() =='') {
            $('.error-ico-pas').show(500);
            $('input#password').addClass('error animated shake');
            return;
        }
    });

    function __clear() {
        $('.error-ico-lo').hide();
        $('input#login').removeClass('error animated shake');
        $('.error-ico-pas').hide(500);
        $('input#password').removeClass('error animated shake');
    }
});

