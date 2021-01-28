var $$ = Dom7;

$$(document).on("click", "#paredesTermoarcilla", function(evt) { //BLOQUE DE LADRILLO (TERMOARCILLA)
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_paredes_termoarcilla_ext/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">EXTERIOR</p></div></a>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesTermoarcillaINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#paredesTermoarcillaINT", function(evt) { //BLOQUE DE LADRILLO (TERMOARCILLA) / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_paredes_termoarcilla_int_humeda/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA HÚMEDA</p></div></a>');
        $('#myHR').after('<a href="/formulario_paredes_termoarcilla_int_seca/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA SECA</p></div></a>');
        

    });


$$(document).on("click", "#paredesLadrilloG", function(evt) { //LADRILLO GRAN FORMATO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_paredes_ladrillog_ext/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">EXTERIOR</p></div></a>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesLadrilloGINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#paredesLadrilloGINT", function(evt) { //LADRILLO GRAN FORMATO /interior
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_paredes_ladrillog_int_humeda/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA HÚMEDA</p></div></a>');
        $('#myHR').after('<a href="/formulario_paredes_ladrillog_int_seca/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA SECA</p></div></a>');
        

    });


$$(document).on("click", "#paredesLadrillo", function(evt) { //LADRILLO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesLAEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="paredesLAINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#paredesLAEXT", function(evt) { //LADRILLO / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_paredes_ladrillo_ext_agua/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA EN CONTACTO CON AGUA</p></div></a>');
        $('#myHR').after('<a href="/formulario_paredes_ladrillo_ext_humeda/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA HÚMEDA</p></div></a>');

    });

    $$(document).on("click", "#paredesLAINT", function(evt) { //LADRILLO / INTERIOR
        añadirTask(evt.target.innerHTML);
        $('#myHR').after('<a href="/formulario_paredes_ladrillo_int_agua/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA EN CONTACTO CON EL AGUA</p></div></a>');
        $('#myHR').after('<a href="/formulario_paredes_ladrillo_int_humeda/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA HÚMEDA</p></div></a>');
        $('#myHR').after('<a href="/formulario_paredes_ladrillo_int_seca/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">ZONA SECA</p></div></a>');
        
        

    });