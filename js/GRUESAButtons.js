var $$ = Dom7;

$$(document).on("click", "#gruesaPiedra", function(evt) { //PIEDRA NATURAL / ARTIFICIAL
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_capagruesa_piedra_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
    $('#myHR').after('<a href="/formulario_capagruesa_piedra_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

});


$$(document).on("click", "#gruesaMarmol", function(evt) { //MÁRMOL
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_capagruesa_marmol_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
    $('#myHR').after('<a href="/formulario_capagruesa_marmol_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

});


$$(document).on("click", "#gruesaPorcelanico", function(evt) { //PORCELÁNICO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_capagruesa_porcelanico_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
    $('#myHR').after('<a href="/formulario_capagruesa_porcelanico_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

});


$$(document).on("click", "#gruesaAzulejo", function(evt) { //AZULEJO / GRES
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_capagruesa_azulejo_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
    $('#myHR').after('<a href="/formulario_capagruesa_azulejo_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

});