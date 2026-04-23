$(document).ready(function () {

    const mobileBtn = $('#mobile_btn');
    const mobileMenu = $('#mobile_menu');
    const icon = mobileBtn.find('i');

    mobileBtn.on('click', function () {
        mobileMenu.toggleClass('active');

        // troca o ícone
        icon.toggleClass('fa-bars');
        icon.toggleClass('fa-xmark');

        // opcional: adiciona estado no botão
        mobileBtn.toggleClass('active');
    });

    // 👇 fecha o menu ao clicar em um item
    $('#mobile_nav_list a').on('click', function () {
        mobileMenu.removeClass('active');

        icon.removeClass('fa-xmark');
        icon.addClass('fa-bars');

        mobileBtn.removeClass('active');
    });

});