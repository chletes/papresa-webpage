// Dom7
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Papresa',
    // Theme applied for ios and android
    theme:'md',
    // App id
    id: 'com.papresa.androidapp',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: './index.html',
            name: 'home',
            on: {
                pageInit: function() {
                    document.getElementById("cambio1").innerHTML = "Inicio";
                    document.getElementById("cambio1").setAttribute("href", "/index/");
                    document.getElementById("cambio2").innerHTML = "Compañía";
                    document.getElementById("cambio2").setAttribute("href", "/compania/");
                    document.getElementById("cambio3").innerHTML = "Productos";
                    document.getElementById("cambio4").innerHTML = "· Escayola-cola";
                    document.getElementById("cambio4").setAttribute("href", "/pescayola/");
                    document.getElementById("cambio5").innerHTML = "· Cemento-cola";
                    document.getElementById("cambio5").setAttribute("href", "/pcemento/");
                    document.getElementById("cambio6").innerHTML = "· Tapajuntas sellantes";
                    document.getElementById("cambio6").setAttribute("href", "/ptapajuntas/");
                    document.getElementById("cambio7").innerHTML = "· Morteros";
                    document.getElementById("cambio7").setAttribute("href", "/pmorteros/");
                    document.getElementById("cambio8").innerHTML = "· Pasta niveladora";
                    document.getElementById("cambio8").setAttribute("href", "/ppastaniv/");
                    document.getElementById("cambio9").innerHTML = "· Impermeabilizantes";
                    document.getElementById("cambio9").setAttribute("href", "/pimper/");
                    document.getElementById("cambio10").innerHTML = "· Otros Productos";
                    document.getElementById("cambio10").setAttribute("href", "/potros/");
                    document.getElementById("cambio11").innerHTML = "Localización";
                    document.getElementById("cambio11").setAttribute("href", "/localizacion/");
                    document.getElementById("cambio12").innerHTML = "Contacto";
                    document.getElementById("cambio12").setAttribute("href", "/contacto/");
                    document.getElementById("cambio14").innerHTML = "Formulario";
                    document.getElementById("cambio14").setAttribute("href", "/formulario_index/");
                    document.getElementById("cambio14").setAttribute("style", "");
                    document.getElementById("cambio13").innerHTML = " Cerrar panel lateral ";
                }

            }
        },
        {
            path: '/formulario_index2/',
            url: './formulario_index.html',
            name: 'formulario_index2',
        },
        {
            path: '/compania/',
            url: './espanol/compania.html',
            name: 'compania',
        },
        {
            path: '/contacto/',
            url: './espanol/contacto.html',
            name: 'contacto',
        },
        {
            path: '/pcemento/',
            url: './espanol/html_pegamentos/pegamentos_cemento.html',
            name: 'pcemento',
        },
        {
            path: '/pescayola/',
            url: './espanol/html_pegamentos/pegamentos_escayola.html',
            name: 'pescayola',
        },
        {
            path: '/pimper/',
            url: './espanol/html_pegamentos/pegamentos_impermeavilizantes.html',
            name: 'pimper',
        },
        {
            path: '/pmorteros/',
            url: './espanol/html_pegamentos/pegamentos_morteros.html',
            name: 'pmorteros',
        },
        {
            path: '/potros/',
            url: './espanol/html_pegamentos/pegamentos_otros.html',
            name: 'potros',
        },
        {
            path: '/ppastaniv/',
            url: './espanol/html_pegamentos/pegamentos_pastaniv.html',
            name: 'ppastaniv',
        },
        {
            path: '/ptapajuntas/',
            url: './espanol/html_pegamentos/pegamentos_tapajuntas.html',
            name: 'ptapajuntas',
        },
        {
            path: '/localizacion',
            url: './espanol/localizacion.html',
            name: 'localizacion',
        },
        {
            path: '/contacto',
            url: './espanol/contacto.html',
            name: 'contacto',
        },
        //empieza el formulario
        {
            path: '/formulario_index/',
            url: './espanol/formulario/formulario_index.html',
            name: 'formulario',
        },
        {
            path: '/formulario_cubrir/',
            url: './espanol/formulario/formulario_cubrir.html',
        },
        //CAPA FINA
        //CAPA FINA / AZULEJOS
        {
            path: '/formulario_capafina_azulejo_interior_mortero_pared/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_azulejo_interior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_azulejo_interior_yeso/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_yeso.html',
        },
        {
            path: '/formulario_capafina_azulejo_interior_ladrillo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_azulejo_interior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_azulejo_interior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_interior_hormigon_suelo.html',
        },
        {
            path: '/formulario_capafina_azulejo_exterior_mortero_pared/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_exterior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_azulejo_exterior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_exterior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_azulejo_exterior_ladrillo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_exterior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_azulejo_exterior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_exterior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_azulejo_exterior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Azulejo/formulario_capafina_azulejo_exterior_hormigon_suelo.html',
        },
        // CAPA FINA / PORCELANICO
        {
            path: '/formulario_capafina_porcelanico_interior_mortero_pared/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_porcelanico_interior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_porcelanico_interior_yeso/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_yeso.html',
        },
        {
            path: '/formulario_capafina_porcelanico_interior_ladrillo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_porcelanico_interior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_porcelanico_interior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_interior_hormigon_suelo.html',
        },
        {
            path: '/formulario_capafina_porcelanico_exterior_mortero_pared/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_exterior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_porcelanico_exterior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_exterior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_porcelanico_exterior_ladrillo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_exterior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_porcelanico_exterior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_exterior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_porcelanico_exterior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Porcelanico/formulario_capafina_porcelanico_exterior_hormigon_suelo.html',
        },
        // CAPA FINA / MARMOL
        {
            path: '/formulario_capafina_marmol_interior_mortero_pared/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_marmol_interior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_marmol_interior_yeso/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_yeso.html',
        },
        {
            path: '/formulario_capafina_marmol_interior_ladrillo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_marmol_interior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_marmol_interior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_interior_hormigon_suelo.html',
        },
        {
            path: '/formulario_capafina_marmol_exterior_mortero_pared/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_exterior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_marmol_exterior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_exterior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_marmol_exterior_ladrillo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_exterior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_marmol_exterior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_exterior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_marmol_exterior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Marmol/formulario_capafina_marmol_exterior_hormigon_suelo.html',
        },
        // CAPA FINA / PIEDRA
        {
            path: '/formulario_capafina_piedra_interior_mortero_pared/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_interior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_piedra_interior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_interior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_piedra_interior_ladrillo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_interior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_piedra_interior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_interior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_piedra_interior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_interior_hormigon_suelo.html',
        },
        {
            path: '/formulario_capafina_piedra_exterior_mortero_pared/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_exterior_mortero_pared.html',
        },
        {
            path: '/formulario_capafina_piedra_exterior_mortero_suelo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_exterior_mortero_suelo.html',
        },
        {
            path: '/formulario_capafina_piedra_exterior_ladrillo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_exterior_ladrillo.html',
        },
        {
            path: '/formulario_capafina_piedra_exterior_hormigon_pared/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_exterior_hormigon_pared.html',
        },
        {
            path: '/formulario_capafina_piedra_exterior_hormigon_suelo/',
            url: './espanol/formulario/capaFina/Piedra/formulario_capafina_piedra_exterior_hormigon_suelo.html',
        },
        // CAPA FINA / PISCINAS
        {
            path: '/formulario_capafina_piscinas/',
            url: './espanol/formulario/capaFina/formulario_capafina_piscinas.html',
        },
        {
            path: '/formulario_capafina_rodapie/',
            url: './espanol/formulario/capaFina/formulario_capafina_rodapie.html',
        },
        // CAPA GRUESA
        // CAPA GRUESA / AZULEJO
        {
            path: '/formulario_capagruesa_azulejo_pared/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_azulejo_pared.html',
        },
        {
            path: '/formulario_capagruesa_azulejo_suelo/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_azulejo_suelo.html',
        },
        // CAPA GRUESA / PORCELANICO
        {
            path: '/formulario_capagruesa_porcelanico_pared/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_porcelanico_pared.html',
        },
        {
            path: '/formulario_capagruesa_porcelanico_suelo/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_porcelanico_suelo.html',
        },
        // CAPA GRUESA / MARMOL
        {
            path: '/formulario_capagruesa_marmol_pared/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_porcelanico_pared.html',
        },
        {
            path: '/formulario_capagruesa_marmol_suelo/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_porcelanico_suelo.html',
        },
        // CAPA GRUESA / PIEDRA
        {
            path: '/formulario_capagruesa_piedra_pared/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_piedra_pared.html',
        },
        {
            path: '/formulario_capagruesa_piedra_suelo/',
            url: './espanol/formulario/capaGruesa/formulario_capagruesa_piedra_suelo.html',
        },
        // RELLENO DE JUNTAS
        //RELLENO DE JUNTAS / AZULEJO
        {
            path: '/formulario_juntas_azulejo/',
            url: './espanol/formulario/juntas/formulario_juntas_azulejo.html',
        },
        //RELLENO DE JUNTAS / PORCELANICO
        {
            path: '/formulario_juntas_porcelanico/',
            url: './espanol/formulario/juntas/formulario_juntas_porcelanico.html',
        },
        //RELLENO DE JUNTAS / MARMOL
        {
            path: '/formulario_juntas_marmol/',
            url: './espanol/formulario/juntas/formulario_juntas_marmol.html',
        },
        //RELLENO DE JUNTAS / PIEDRA
        {
            path: '/formulario_juntas_piedra/',
            url: './espanol/formulario/juntas/formulario_juntas_piedra.html',
        },
        //RELLENO DE JUNTAS / PISCINAS
        {
            path: '/formulario_juntas_piscinas/',
            url: './espanol/formulario/juntas/formulario_juntas_piscinas.html',
        },
        //RELLENO DE JUNTAS / PYL
        {
            path: '/formulario_juntas_pyl/',
            url: './espanol/formulario/juntas/formulario_juntas_pyl.html',
        },
        //IMPERMEABILIZAR
        //IMPERMEABILIZAR / PAREDES
        {
            path: '/formulario_imper_paredes_suelos/',
            url: './espanol/formulario/imper/formulario_imper_paredes_suelos.html',
        },
        //IMPERMEABILIZAR / FUGAS DE AGUA
        {
            path: '/formulario_imper_fugas/',
            url: './espanol/formulario/imper/formulario_imper_fugas.html',
        },
        //NIVELACION DE SUELOS
        {
            path: '/formulario_nivel_hasta/',
            url: './espanol/formulario/nivel/formulario_nivel_hasta.html',
        },
        {
            path: '/formulario_nivel_apartir/',
            url: './espanol/formulario/nivel/formulario_nivel_apartir.html',
        },
        // REVESTIMIENTO DE PAREDES
        // REVESTIMIENTO DE PAREDES / GOTELÉ
        {
            path: '/formulario_revest_pinturas/',
            url: './espanol/formulario/revest/formulario_revest_pinturas.html',
        },
        // REVESTIMIENTO DE PAREDES / ENLUCIDO
        {
            path: '/formulario_revest_enlucido/',
            url: './espanol/formulario/revest/formulario_revest_enlucido.html',
        },
        // REVESTIMIENTO DE PAREDES / YESO
        {
            path: '/formulario_revest_yeso_manual/',
            url: './espanol/formulario/revest/formulario_revest_yeso_manual.html',
        },
        {
            path: '/formulario_revest_yeso_mecanica/',
            url: './espanol/formulario/revest/formulario_revest_yeso_mecanica.html',
        },
        // REVESTIMIENTO DE PAREDES / MORTERO
        {
            path: '/formulario_revest_mortero_int/',
            url: './espanol/formulario/revest/formulario_revest_mortero_int.html',
        },
        {
            path: '/formulario_revest_mortero_ext/',
            url: './espanol/formulario/revest/formulario_revest_mortero_ext.html',
        },
        // REVESTIMIENTO DE PAREDES / LADRILLO
        {
            path: '/formulario_revest_ladrillo_int_manual/',
            url: './espanol/formulario/revest/formulario_revest_ladrillo_int_manual.html',
        },
        {
            path: '/formulario_revest_ladrillo_int_mecanica/',
            url: './espanol/formulario/revest/formulario_revest_ladrillo_int_mecanica.html',
        },
        {
            path: '/formulario_revest_ladrillo_ext_manual/',
            url: './espanol/formulario/revest/formulario_revest_ladrillo_ext_manual.html',
        },
        {
            path: '/formulario_revest_ladrillo_ext_mecanica/',
            url: './espanol/formulario/revest/formulario_revest_ladrillo_ext_mecanica.html',
        },
        // REVESTIMIENTO DE PAREDES / HORMIGÓN
        {
            path: '/formulario_revest_hormigon_int_manual/',
            url: './espanol/formulario/revest/formulario_revest_hormigon_int_manual.html',
        },
        {
            path: '/formulario_revest_hormigon_int_mecanica/',
            url: './espanol/formulario/revest/formulario_revest_hormigon_int_mecanica.html',
        },
        {
            path: '/formulario_revest_hormigon_ext_manual/',
            url: './espanol/formulario/revest/formulario_revest_hormigon_ext_manual.html',
        },
        {
            path: '/formulario_revest_hormigon_ext_mecanica/',
            url: './espanol/formulario/revest/formulario_revest_hormigon_ext_mecanica.html',
        },
        // CONSTRUIR PAREDES
        // CONSTRUIR PAREDES / LADRILLO
        {
            path: '/formulario_paredes_ladrillo_int_seca/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillo_int_seca.html',
        },
        {
            path: '/formulario_paredes_ladrillo_int_humeda/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillo_int_humeda.html',
        },
        {
            path: '/formulario_paredes_ladrillo_int_agua/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillo_int_agua.html',
        },
        {
            path: '/formulario_paredes_ladrillo_ext_humeda/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillo_ext_humeda.html',
        },
        {
            path: '/formulario_paredes_ladrillo_ext_agua/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillo_ext_agua.html',
        },
        // CONSTRUIR PAREDES / LADRILLO GRAN FORMATO
        {
            path: '/formulario_paredes_ladrillog_int_seca/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillog_int_seca.html',
        },
        {
            path: '/formulario_paredes_ladrillog_int_humeda/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillog_int_humeda.html',
        },
        {
            path: '/formulario_paredes_ladrillog_ext/',
            url: './espanol/formulario/paredes/formulario_paredes_ladrillog_ext.html',
        },
        // CONSTRUIR PAREDES / LADRILLO REVESTIDO DE YESO
        {
            path: '/formulario_paredes_yeso/',
            url: './espanol/formulario/paredes/formulario_paredes_yeso.html',
        },
        // CONSTRUIR PAREDES / TABIQUE
        {
            path: '/formulario_paredes_escayola/',
            url: './espanol/formulario/paredes/formulario_paredes_escayola.html',
        },
        // CONSTRUIR PAREDES / BLOQUE DE HORMIGÓN
        {
            path: '/formulario_paredes_hormigon/',
            url: './espanol/formulario/paredes/formulario_paredes_hormigon.html',
        },
        // CONSTRUIR PAREDES / BLOQUE DE VIDRIO
        {
            path: '/formulario_paredes_vidrio/',
            url: './espanol/formulario/paredes/formulario_paredes_vidrio.html',
        },
        // CONSTRUIR PAREDES / LADRILLO REFRACTARIO
        {
            path: '/formulario_paredes_refractario/',
            url: './espanol/formulario/paredes/formulario_paredes_refractario.html',
        },
        // CONSTRUIR PAREDES / BLOQUE DE LADRILLO (TERMOARCILLA)
        {
            path: '/formulario_paredes_termoarcilla_int_seca/',
            url: './espanol/formulario/paredes/formulario_paredes_termoarcilla_int_seca.html',
        },
        {
            path: '/formulario_paredes_termoarcilla_int_humeda/',
            url: './espanol/formulario/paredes/formulario_paredes_termoarcilla_int_humeda.html',
        },
        {
            path: '/formulario_paredes_termoarcilla_ext/',
            url: './espanol/formulario/paredes/formulario_paredes_termoarcilla_ext.html',
        },
        //
        {
            path: '/i_index/',
            url: './ingles/i_index.html',
            name: 'index',
            on: {
                pageInit: function() {
                    document.getElementById("cambio1").innerHTML = "Home";
                    document.getElementById("cambio1").setAttribute("href", "/i_index/");
                    document.getElementById("cambio2").innerHTML = "Company";
                    document.getElementById("cambio2").setAttribute("href", "/i_compania/");
                    document.getElementById("cambio3").innerHTML = "Adhesives";
                    document.getElementById("cambio4").innerHTML = "· Plaster-glue";
                    document.getElementById("cambio4").setAttribute("href", "/i_pescayola/");
                    document.getElementById("cambio5").innerHTML = "· Cement-glue";
                    document.getElementById("cambio5").setAttribute("href", "/i_pcemento/");
                    document.getElementById("cambio6").innerHTML = "· Grout Sealers";
                    document.getElementById("cambio6").setAttribute("href", "/i_ptapajuntas/");
                    document.getElementById("cambio7").innerHTML = "· Mortar";
                    document.getElementById("cambio7").setAttribute("href", "/i_pmorteros/");
                    document.getElementById("cambio8").innerHTML = "· Levelling paste";
                    document.getElementById("cambio8").setAttribute("href", "/i_ppastaniv/");
                    document.getElementById("cambio9").innerHTML = "· Waterproofing";
                    document.getElementById("cambio9").setAttribute("href", "/i_pimper/");
                    document.getElementById("cambio10").innerHTML = "· Other Products";
                    document.getElementById("cambio10").setAttribute("href", "/i_potros/");
                    document.getElementById("cambio11").innerHTML = "Location";
                    document.getElementById("cambio11").setAttribute("href", "/i_localizacion/");
                    document.getElementById("cambio12").innerHTML = "Contact";
                    document.getElementById("cambio12").setAttribute("href", "/i_contacto/");
                    document.getElementById("cambio14").innerHTML = "Form";
                    document.getElementById("cambio14").setAttribute("href", "/i_formulario_index/");
                    document.getElementById("cambio14").setAttribute("style", "display:none;");
                    document.getElementById("cambio13").innerHTML = " Close sidebar ";
                }
            }
        },
        {
            path: '/i_compania/',
            url: './ingles/i_compania.html',
            name: 'icompania',
        },
        {
            path: '/i_formulario_index/',
            url: './ingles/i_formulario/i_formulario_index.html',
            name: 'iformulario',
        },
        {
            path: '/i_contacto/',
            url: './ingles/i_contacto.html',
            name: 'icontacto',
        },
        {
            path: '/i_pcemento/',
            url: './ingles/i_html_pegamentos/i_pegamentos_cemento.html',
            name: 'ipcemento',
        },
        {
            path: '/i_pescayola/',
            url: './ingles/i_html_pegamentos/i_pegamentos_escayola.html',
            name: 'ipescayola',
        },
        {
            path: '/i_pimper/',
            url: './ingles/i_html_pegamentos/i_pegamentos_impermeavilizantes.html',
            name: 'ipimper',
        },
        {
            path: '/i_pmorteros/',
            url: './ingles/i_html_pegamentos/i_pegamentos_morteros.html',
            name: 'ipmorteros',
        },
        {
            path: '/i_potros/',
            url: './ingles/i_html_pegamentos/i_pegamentos_otros.html',
            name: 'ipotros',
        },
        {
            path: '/i_ppastaniv/',
            url: './ingles/i_html_pegamentos/i_pegamentos_pastaniv.html',
            name: 'ippastaniv',
        },
        {
            path: '/i_ptapajuntas/',
            url: './ingles/i_html_pegamentos/i_pegamentos_tapajuntas.html',
            name: 'iptapajuntas',
        },
        {
            path: '/i_localizacion',
            url: './ingles/i_localizacion.html',
            name: 'ilocalizacion',
        },
        {
            path: '/i_contacto',
            url: './ingles/i_contacto.html',
            name: 'icontacto',
        },
        {
            path: '/f_index/',
            url: './frances/f_index.html',
            name: 'index',
            on: {
                pageInit: function() {
                    document.getElementById("cambio1").innerHTML = "Home";
                    document.getElementById("cambio1").setAttribute("href", "/f_index/");
                    document.getElementById("cambio2").innerHTML = "Compagnie";
                    document.getElementById("cambio2").setAttribute("href", "/f_compania/");
                    document.getElementById("cambio3").innerHTML = "Produits";
                    document.getElementById("cambio4").innerHTML = "· Plâtre-colle";
                    document.getElementById("cambio4").setAttribute("href", "/f_pescayola/");
                    document.getElementById("cambio5").innerHTML = "· Ciment-colle";
                    document.getElementById("cambio5").setAttribute("href", "/f_pcemento/");
                    document.getElementById("cambio6").innerHTML = "· Enduits";
                    document.getElementById("cambio6").setAttribute("href", "/f_ptapajuntas/");
                    document.getElementById("cambio7").innerHTML = "· Mortiers";
                    document.getElementById("cambio7").setAttribute("href", "/f_pmorteros/");
                    document.getElementById("cambio8").innerHTML = "· Ragréage";
                    document.getElementById("cambio8").setAttribute("href", "/f_ppastaniv/");
                    document.getElementById("cambio9").innerHTML = "· Étanchéité";
                    document.getElementById("cambio9").setAttribute("href", "/f_pimper/");
                    document.getElementById("cambio10").innerHTML = "· Autres Produits";
                    document.getElementById("cambio10").setAttribute("href", "/f_potros/");
                    document.getElementById("cambio11").innerHTML = "Emplacement";
                    document.getElementById("cambio11").setAttribute("href", "/f_localizacion/");
                    document.getElementById("cambio12").innerHTML = "Contact";
                    document.getElementById("cambio12").setAttribute("href", "/f_contacto/");
                    document.getElementById("cambio14").innerHTML = "Formulaire";
                    document.getElementById("cambio14").setAttribute("href", "/f_formulario_index/");
                    document.getElementById("cambio13").innerHTML = " Fermer panneau ";
                }
            }
        },
        {
            path: '/f_compania/',
            url: './frances/f_compania.html',
            name: 'fcompania',
        },
        {
            path: '/f_formulario_index/',
            url: './frances/f_formulario/f_formulario_index.html',
            name: 'fformulario',
        },
        {
            path: '/f_contacto/',
            url: './frances/f_contacto.html',
            name: 'fcontacto',
        },
        {
            path: '/f_pcemento/',
            url: './frances/f_html_pegamentos/f_pegamentos_cemento.html',
            name: 'fpcemento',
        },
        {
            path: '/f_pescayola/',
            url: './frances/f_html_pegamentos/f_pegamentos_escayola.html',
            name: 'fpescayola',
        },
        {
            path: '/f_pimper/',
            url: './frances/f_html_pegamentos/f_pegamentos_impermeavilizantes.html',
            name: 'fpimper',
        },
        {
            path: '/f_pmorteros/',
            url: './frances/f_html_pegamentos/f_pegamentos_morteros.html',
            name: 'fpmorteros',
        },
        {
            path: '/f_potros/',
            url: './frances/f_html_pegamentos/f_pegamentos_otros.html',
            name: 'fpotros',
        },
        {
            path: '/f_ppastaniv/',
            url: './frances/f_html_pegamentos/f_pegamentos_pastaniv.html',
            name: 'fppastaniv',
        },
        {
            path: '/f_ptapajuntas/',
            url: './frances/f_html_pegamentos/f_pegamentos_tapajuntas.html',
            name: 'fptapajuntas',
        },
        {
            path: '/f_localizacion',
            url: './frances/f_localizacion.html',
            name: 'flocalizacion',
        },
        {
            path: '/f_contacto',
            url: './frances/f_contacto.html',
            name: 'fcontacto',
        },

    ],
    // ... other parameters
});

/*
var mainView = app.addView('.view-main', {
    url: '/',
    swipeBackPage: false,
});*/

var mainView = app.views.create('.view-main', {
    url: '/',
    swipeBackPage: false,
});