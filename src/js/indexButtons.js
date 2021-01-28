var $$ = Dom7;

$$(document).on("click", "#returnToFormIndex", function(evt) {
    mainView.router.refreshPage();
});

fijarTask = function(element) {
    //$(element).attr('style', "background-color: #363534; width:auto; height:100px; overflow-x:auto; overflow-y:-webkit-paged-x;color: white;");
    $(element).parent().after('<hr id="myHR" class="myHR">'); //style="border-radius: 20px;height: 5px;background-color: #363534;"
    $(element).parent().attr('class', "elevation-demo elevation-13 task-fijada");
    $(element).attr('id', 'returnToFormIndex')
    $('.elevation-12').remove();
};

$$(document).on("click", "#indexButton1", function(evt) { //FIJACIÓN DE CERÁMICA EN CAPA FINA

    //console.log(evt.target.id);
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<a href="/formulario_capafina_rodapie/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">RODAPIE</p></div></a>');
    $('#myHR').after('<a href="/formulario_capafina_piscinas/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PISCINAS</p></div></a>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedra" style ="margin:0;padding:4%">PIEDRA NATURAL / ARTIFICIAL</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmol" style ="margin:0;padding:4%">MÁRMOL</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanico" style ="margin:0;padding:4%">PORCELÁNICO</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejo" style ="margin:0;padding:4%">AZULEJO / GRES</p></div>');

});

$$(document).on("click", "#indexButton2", function(evt) { //FIJACIÓN DE CERÁMICA EN CAPA GRUESA
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="gruesaPiedra" style ="margin:0;padding:4%">PIEDRA NATURAL / ARTIFICIAL</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="gruesaMarmol" style ="margin:0;padding:4%">MÁRMOL</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="gruesaPorcelanico" style ="margin:0;padding:4%">PORCELÁNICO</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="gruesaAzulejo" style ="margin:0;padding:4%">AZULEJO / GRES</p></div>');

});

$$(document).on("click", "#indexButton3", function(evt) { //RELLENO DE JUNTAS
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<a href="/formulario_juntas_pyl/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PYL</p></div></a>');
    $('#myHR').after('<a href="/formulario_juntas_piscinas/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PISCINAS</p></div></a>');
    $('#myHR').after('<a href="/formulario_juntas_piedra/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PIEDRA NATURAL / ARTIFICIAL</p></div></a>');
    $('#myHR').after('<a href="/formulario_juntas_marmol/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">MARMOL</p></div></a>');
    $('#myHR').after('<a href="/formulario_juntas_porcelanico/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PORCELANICO</p></div></a>');
    $('#myHR').after('<a href="/formulario_juntas_azulejo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">AZULEJO / GRES</p></div></a>');

});


$$(document).on("click", "#indexButton4", function(evt) { //IMPERMEABILIZAR
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<a href="/formulario_imper_fugas/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">FUGAS DE AGUA</p></div></a>');
    $('#myHR').after('<a href="/formulario_imper_paredes_suelos/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PAREDES / SUELOS</p></div></a>');

});


$$(document).on("click", "#indexButton5", function(evt) { //NIVELACIÓN DE SUELOS
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<a href="/formulario_nivel_apartir/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">CAPA A PARTIR DE 15 MM</p></div></a>');
    $('#myHR').after('<a href="/formulario_nivel_hasta/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">CAPA HASTA 15 MM</p></div></a>');

});


$$(document).on("click", "#indexButton6", function(evt) { //REVESTIMIENTO DE PAREDES
    fijarTask("#" + evt.target.id);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestLadrillo" style ="margin:0;padding:4%">SOBRE LADRILLO</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestYeso" style ="margin:0;padding:4%">SOBRE YESO / ESCAYOLA / PYL</p></div>');
    $('#myHR').after('<a href="/formulario_revest_enlucido/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE PAPRESA ENLUCIDO</p></div></a>');
    $('#myHR').after('<a href="/formulario_revest_pinturas/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE GOTELÉ / PINTURAS</p></div></a>');
    

});



$$(document).on("click", "#indexButton7", function(evt) { //CONSTRUIR PAREDES
    fijarTask("#" + evt.target.id);

    
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesTermoarcilla" style ="margin:0;padding:4%">BLOQUE DE LADRILLO (TERMOARCILLA)</p></div>');
    $('#myHR').after('<a href="/formulario_paredes_refractario/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">LADRILLO REFRACTARIO</p></div></a>');
    $('#myHR').after('<a href="/formulario_paredes_vidrio/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">BLOQUE DE VIDRIO</p></div></a>');
    $('#myHR').after('<a href="/formulario_paredes_hormigon/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">BLOQUE DE HORMIGÓN</p></div></a>');
    $('#myHR').after('<a href="/formulario_paredes_escayola/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">TABIQUE DE ESCAYOLA</p></div></a>');
    $('#myHR').after('<a href="/formulario_paredes_yeso/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">LADRILLO REVESTIDO DE YESO</p></div></a>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesLadrilloG" style ="margin:0;padding:4%">LADRILLO GRAN FORMATO</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesLadrillo" style ="margin:0;padding:4%">LADRILLO</p></div>');

});