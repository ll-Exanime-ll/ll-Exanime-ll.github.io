$(function() {

    /* btn mobile responsive */
    let $btnMobile = $('.btn-mobile');

    $btnMobile.on('click', function () {
        $('.rowOptions').toggle();
        $('.rowContentOne').css('z-index', '5');

    });

    /**Cambio de tema bg on button */
    let $body = $('body'),
        $button = $('#butt');
     $('button').on('click', function () {
         if ($body.attr('id') == 'dark') {
             $body.attr('id', 'white');
             $button.text('negro');
         } else {
             $body.attr('id', 'dark');
             $button.text('blanco');
         }

     });
    
    /*DateTime*/
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth() + 1,
        anio = fecha.getFullYear();

    if(dia < 10){
        dia = '0'+dia
    }

    if (mes < 10) {
        mes = '0'+ mes;
    }
    /* Arranque General*/
    let $areaTextHeader = $('#areatextTitle');
    $('#FechaNickName').text(`${dia}/${mes}/${anio}`);

    
    /************/
    /*** Portal **/
    $('.img-adaptable').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                
            })
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                
            });
        },
        click: function () {
            let URLimagen = $(this).attr('src');
            $('.rowModalImage').fadeOut(300, function () {
                $('.body-modal img').attr('src', URLimagen);

            }).fadeIn(300)
        }
    });
    
    $(".rowModalImage").click(function () {
        $('.rowModalImage').fadeOut(300);

    });

    let $optinfo = $('.info'),
        $optinfo2 = $('.info2');

    let $idinfo = $('#information'),
        $idinfo2 = $('#informacion');

    /*Arranque*/ 
    $optinfo
        .addClass('active')
        .siblings()
        .removeClass('active');

    $idinfo
        .show()
        .siblings()
        .hide()
    $areaTextHeader.html(`# information
                <label for="" id="areatextLabel"> |  Bot information`);
    

    /*Canales opt*/
    $($optinfo).on('click', function(){
        $optinfo
            .addClass('active')
            .siblings()
            .removeClass('active');
      
        $optinfo2
            .removeClass('active')
            .siblings()
            .removeClass('active');

        $idinfo
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# information <label for="" id="areatextLabel"> |  Bot information`);

    });

    $($optinfo2).on('click', function(){
        $optinfo
            .removeClass('active')
            .siblings()
            .removeClass('active');
        
        $optinfo2
            .addClass('active')
            .siblings()
            .removeClass('active');
      
        $idinfo2
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# información <label for="" id="areatextLabel"> | Información del bot`);
    });
  
});
