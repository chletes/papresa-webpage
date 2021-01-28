var $$ = Dom7;

$$(document).on("click", "#revestHormigon", function(evt) { //SOBRE HORMIGÓN
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestHormigonEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestHormigonINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#revestHormigonEXT", function(evt) { //SOBRE HORMIGÓN /EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_revest_hormigon_ext_mecanica/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MECÁNICA</p></div></a>');
        $('#myHR').after('<a href="/formulario_revest_hormigon_ext_manual/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MANUAL</p></div></a>');

    });
    $$(document).on("click", "#revestHormigonINT", function(evt) { //SOBRE HORMIGÓN /INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_revest_hormigon_int_mecanica/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MECÁNICA</p></div></a>');
        $('#myHR').after('<a href="/formulario_revest_hormigon_int_manual/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MANUAL</p></div></a>');

    });


$$(document).on("click", "#revestLadrillo", function(evt) { //SOBRE LADRILLO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestLadrilloEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="revestLadrilloINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#revestLadrilloEXT", function(evt) { //SOBRE LADRILLO /EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_revest_ladrillo_ext_mecanica/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MECÁNICA</p></div></a>');
        $('#myHR').after('<a href="/formulario_revest_ladrillo_ext_manual/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MANUAL</p></div></a>');

    });
    $$(document).on("click", "#revestLadrilloINT", function(evt) { //SOBRE LADRILLO /INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<a href="/formulario_revest_ladrillo_int_mecanica/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MECÁNICA</p></div></a>');
        $('#myHR').after('<a href="/formulario_revest_ladrillo_int_manual/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MANUAL</p></div></a>');

    });


$$(document).on("click", "#revestMortero", function(evt) { //SOBRE MORTERO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_revest_mortero_ext/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">EXTERIOR</p></div></a>');
    $('#myHR').after('<a href="/formulario_revest_mortero_int/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">INTERIOR > APLICACIÓN MANUAL</p></div></a>');

});


$$(document).on("click", "#revestYeso", function(evt) { //SOBRE YESO / ESCAYOLA / PYL 
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<a href="/formulario_revest_yeso_mecanica/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MECÁNICA</p></div></a>');
    $('#myHR').after('<a href="/formulario_revest_yeso_manual/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">APLICACIÓN MANUAL</p></div></a>');

});