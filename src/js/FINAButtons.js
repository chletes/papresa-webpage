var $$ = Dom7;

añadirTask = function(element) {
    /*$(element).attr('style', "background-color: #363534; width:auto; height:100px; overflow-x:auto; overflow-y:-webkit-paged-x;color: white;");
    $(element).after('<hr class="myHR">'); //style="border-radius: 20px;height: 5px;background-color: #363534;"
    $(element).attr('class', "elevation-demo elevation-13 task-fijada");
    $(element).attr('id', 'returnToFormIndex')*/
    $("#returnToFormIndex").html( $("#returnToFormIndex").html() + "<br>" + " > " + element );
    $('.elevation-12').remove();
};

$$(document).on("click", "#finaPiedra", function(evt) { //PIEDRA NATURAL / ARTIFICIAL

    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#finaPiedraEXT", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraEXTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_piedra_exterior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO > PARED</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraEXTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

    $$(document).on("click", "#finaPiedraINT", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraINTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_piedra_interior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO > PARED</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPiedraINTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

        $$(document).on("click", "#finaPiedraEXTMortero", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / EXTERIOR / Mortero
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_piedra_exterior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_piedra_exterior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

         });

        $$(document).on("click", "#finaPiedraEXTHormigon", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / EXTERIOR / HORMIGON
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_piedra_exterior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_piedra_exterior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

         });

        $$(document).on("click", "#finaPiedraINTMortero", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / INTERIOR / Mortero
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_piedra_interior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_piedra_interior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

         });

        $$(document).on("click", "#finaPiedraINTHormigon", function(evt) { //PIEDRA NATURAL - ARTIFICIAL / INTERIOR / HORMIGON
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_piedra_interior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_piedra_interior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

         });


$$(document).on("click", "#finaMarmol", function(evt) { //MÁRMOL
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#finaMarmolINT", function(evt) { //MÁRMOL / INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolINTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_marmol_interior_yeso/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE YESO / PYL</p></div></a>');
        $('#myHR').after('<a href="/formulario_capafina_marmol_interior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolINTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

    $$(document).on("click", "#finaMarmolEXT", function(evt) { //MÁRMOL / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolEXTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_marmol_exterior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaMarmolEXTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

        $$(document).on("click", "#finaMarmolINTMortero", function(evt) { //MÁRMOL / INTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_marmol_interior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_marmol_interior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaMarmolINTHormigon", function(evt) { //MÁRMOL / INTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_marmol_interior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_marmol_interior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });


        $$(document).on("click", "#finaMarmolEXTMortero", function(evt) { //MÁRMOL / EXTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_marmol_exterior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_marmol_exterior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaMarmolEXTHormigon", function(evt) { //MÁRMOL / EXTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_marmol_exterior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_marmol_exterior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });


$$(document).on("click", "#finaPorcelanico", function(evt) { //PORCELÁNICO
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});



    $$(document).on("click", "#finaPorcelanicoINT", function(evt) { //PORCELÁNICO / INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoINTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_yeso/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE YESO / PYL</p></div></a>');
        $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoINTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

    $$(document).on("click", "#finaPorcelanicoEXT", function(evt) { //PORCELÁNICO / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoEXTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_porcelanico_exterior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaPorcelanicoEXTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

        $$(document).on("click", "#finaPorcelanicoINTMortero", function(evt) { //PORCELÁNICO / INTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaPorcelanicoINTHormigon", function(evt) { //PORCELÁNICO / INTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_porcelanico_interior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });


        $$(document).on("click", "#finaPorcelanicoEXTMortero", function(evt) { //PORCELÁNICO / EXTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_porcelanico_exterior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_porcelanico_exterior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaPorcelanicoEXTHormigon", function(evt) { //PORCELÁNICO / EXTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_porcelanico_exterior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_porcelanico_exterior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });


$$(document).on("click", "#finaAzulejo", function(evt) { //AZULEJO / GRES
    añadirTask(evt.target.innerHTML);

    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoEXT" style ="margin:0;padding:4%">EXTERIOR</p></div>');
    $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoINT" style ="margin:0;padding:4%">INTERIOR</p></div>');

});

    $$(document).on("click", "#finaAzulejoINT", function(evt) { //AZULEJO / INTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoINTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_yeso/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE YESO / PYL</p></div></a>');
        $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoINTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN</p></div>');

    });

    $$(document).on("click", "#finaAzulejoEXT", function(evt) { //AZULEJO / EXTERIOR
        añadirTask(evt.target.innerHTML);

        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoEXTMortero" style ="margin:0;padding:4%">SOBRE MORTERO</p></div>');
        $('#myHR').after('<a href="/formulario_capafina_azulejo_exterior_ladrillo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SOBRE LADRILLO</p></div></a>');
        $('#myHR').after('<div class="elevation-demo elevation-12"><p id="finaAzulejoEXTHormigon" style ="margin:0;padding:4%">SOBRE HORMIGÓN<p></div>');

    });

        $$(document).on("click", "#finaAzulejoINTMortero", function(evt) { //AZULEJO / INTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaAzulejoINTHormigon", function(evt) { //AZULEJO / INTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_azulejo_interior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });


        $$(document).on("click", "#finaAzulejoEXTMortero", function(evt) { //AZULEJO / EXTERIOR / MORTERO
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_azulejo_exterior_mortero_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_azulejo_exterior_mortero_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');

        });

        $$(document).on("click", "#finaAzulejoEXTHormigon", function(evt) { //AZULEJO / EXTERIOR / HORMIGÓN
            añadirTask(evt.target.innerHTML);

            $('#myHR').after('<a href="/formulario_capafina_azulejo_exterior_hormigon_pared/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">PARED</p></div></a>');
            $('#myHR').after('<a href="/formulario_capafina_azulejo_exterior_hormigon_suelo/" class="item-link" style="color: #212121;"><div class="elevation-demo elevation-12"><p style ="margin:0;padding:4%">SUELO</p></div></a>');
        
        });