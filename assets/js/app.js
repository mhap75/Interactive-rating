$(document).ready(function () {

    $('.survey li').on('click', function () {
        $('.survey').hide();
        let i = $(this).text();
        $('.submitted').removeClass('d-none');
        $('.submitted .rate p span').text(i)
    });

});