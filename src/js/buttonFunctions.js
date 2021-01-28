 var $$ = Dom7;

 //formulario/primer/formulario_cubrir.html
 $$(document).on("click", ".cubrirButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 0.25;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }

     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 //formulario/segun/formulario_fijacion1_pisci.html
 $$(document).on("click", ".extTermoPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 5.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }

     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 //formulario/segun/formulario_fijacion1_rodapie.html
 $$(document).on("click", ".secIntTermoPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3.5;
         var resultado2 = altura * ancho * 5.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }

         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado2 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


 $$(document).on("click", ".RefractarioPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 10;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }

     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".vidrioPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 10;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


 $$(document).on("click", ".hormigonPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 15;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }

     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });
 $$(document).on("click", ".escayolaPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 3.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }

     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });




 $$(document).on("click", ".humExtLadrilloPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 10;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".mecaExtLadriRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".mecaIntLadriRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 6.5;
         var resultado2 = altura * ancho * 3.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }

         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente " + resultado2 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


 $$(document).on("click", ".extMortRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".aguaExtLadrilloPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 10;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";

         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado + " kilos de...";

         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".secaIntLadrilloPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 10;
         var resultado2 = altura * ancho * 7;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente " + resultado1 + " kilos de...";
         }
         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también te pueden servir aproximadamente " + resultado2 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".humExtLadrilloPareButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = altura * ancho * 5.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";

         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".hastaNivelButton", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     var capa = document.getElementById('capa').value;
     if (largo != "" && ancho != "" && capa != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         capa = parseFloat(capa).toFixed(2)
         var resultado = largo * ancho * capa * 8;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";

         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


 $$(document).on("click", ".aPartirDeNivelButton", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     var capa = document.getElementById('capa').value;
     if (largo != "" && ancho != "" && capa != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         capa = parseFloat(capa).toFixed(2);
         var resultado = largo * ancho * capa * 3;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".suelosPareImper", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     var capa = document.getElementById('grosor').value;
     if (largo != "" && ancho != "" && capa != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         capa = parseFloat(capa).toFixed(2);
         var resultado = largo * ancho * capa * 8;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Recomendamos dar una imprimación con brocha de Adesilatex y a continuación añadir un kilo del siguiente produzclo mezclado con Adesilatex";
         } else {
             document.getElementById('resultado').innerHTML = "Recomendamos dar una imprimación con brocha de Adesilatex y a continuación añadir " + resultado + " kilos de Mortero Seco mezclado con Adesilatex";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

/*
 $$(document).on("click", ".suelosPareImper", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     var grosor = document.getElementById('grosor').value;
     if (largo != "" && ancho != "" && grosor != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         grosor = parseFloat(grosor).toFixed(2);
         var resultado = largo * ancho * grosor * 8;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado').innerHTML = "Recomendamos dar una imprimación con brocha de Adesilatex y a continuación añadir un kilo de Mortero Seco mezclado con Adesilatex";
         } else {
             document.getElementById('resultado').innerHTML = "Recomendamos dar una imprimación con brocha de Adesilatex y a continuación añadir " + resultado " kilos de Mortero Seco mezclado con Adesilatex";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });*/


 $$(document).on("click", ".manuExtHormiRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = largo * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".mecaExtHormiRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado = largo * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".manuIntHormiRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = largo * ancho * 6.5;
         var resultado2 = largo * ancho * 3;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado4').innerHTML = "O, por último, aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado4').innerHTML = "O, por último, aproximadamente " + resultado1 + "  kilos de...";
         }
         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente "+ resultado2 +" kilos de...";
             document.getElementById('resultado3').innerHTML = "O aproximadamente "+ resultado2 +" kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

 $$(document).on("click", ".mecaIntHormiRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = largo * ancho * 3.5;
         var resultado2 = largo * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir " + resultado2 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".extMortRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = largo * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".intMortRevest", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     if (largo != "" && ancho != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = largo * ancho * 6.5;
         var resultado2 = largo * ancho * 3;
         var resultadop = largo * ancho * 3.5;
         document.getElementById('result').style = "";
         document.getElementById('result2').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
         if (resultado2 == 1) {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente " + resultado2 + " kilos de...";
         }
         if (resultadop == 1) {
             document.getElementById('resultadop').innerHTML = "Otra opción es utilizar aproximadamente un kilo de...";
         } else {
             document.getElementById('resultadop').innerHTML = "Otra opción es utilizar aproximadamente " + resultadop + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".mecaYesoRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".manuYesoRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 1.2;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".pinturasRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 1.2;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".enlucidoRevestButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 1.1;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".paredPorcelGruesaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 5.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


  $$(document).on("click", ".manuExtLadrRevest", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 6.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente un kilo de estos dos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también le puede servir aproximadamente " + resultado1 + " kilos de estos dos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".sueloPorcelGruesaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 8;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".rodapieFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".piscinasFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 7.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".sueloHorExtPiedraFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 7.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".sueloHorExtMarmolFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 7.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


  $$(document).on("click", ".paredHorExtMarmolFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3.75;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilos de...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".ladrilloIntPorcelaFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3.75;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".sueloMortIntPorcelaFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 7.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


  $$(document).on("click", ".sueloMorteroIntAzuleFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 7.5;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".paredMorteroIntAzuleFinaButton", function(evt) {
     var altura = document.getElementById('altura').value;
     var ancho = document.getElementById('ancho').value;
     if (altura != "" && ancho != "") {
         altura = parseFloat(altura).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         var resultado1 = altura * ancho * 3.75;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });

  $$(document).on("click", ".pylJuntas", function(evt) {
     var largo = document.getElementById('largo').value;
     var ancho = document.getElementById('ancho').value;
     var grosor = document.getElementById('grosor').value;
     if (largo != "" && ancho != "" && grosor != "") {
         largo = parseFloat(largo).toFixed(2);
         ancho = parseFloat(ancho).toFixed(2);
         grosor = parseFloat(ancho).toFixed(2);
         var resultado1 = largo * ancho * grosor *0.25;
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             //document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             //document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los dos campos para poder hacer el cálculo.');
     }
 });


  


  $$(document).on("click", ".azulejoJuntas", function(evt) {
     var alturaPared = document.getElementById('alturaPared').value;
     var anchoPared = document.getElementById('anchoPared').value;
     var largoAzulejo = document.getElementById('largoAzulejo').value;
     var anchoAzulejo = document.getElementById('anchoAzulejo').value;
     var profundidadJunta = document.getElementById('profundidadJunta').value;
     var anchoJunta = document.getElementById('anchoJunta').value;
     if (alturaPared != "" && anchoPared != "" && largoAzulejo != "" && anchoAzulejo != "" && profundidadJunta != "" && anchoJunta != "") {
         alturaPared = parseFloat(alturaPared).toFixed(2);
         anchoPared = parseFloat(anchoPared).toFixed(2);
         largoAzulejo = parseFloat(largoAzulejo).toFixed(2);
         anchoAzulejo = parseFloat(anchoAzulejo).toFixed(2);
         profundidadJunta = parseFloat(profundidadJunta).toFixed(2);
         anchoJunta = parseFloat(anchoJunta).toFixed(2);
         //console.log(alturaPared + " " + anchoPared + " " + largoAzulejo + " " + anchoAzulejo + " " + profundidadJunta + " " + anchoJunta);
         var resultado1 = (alturaPared * anchoPared) * (profundidadJunta * anchoJunta * 0.17) * ((parseFloat(largoAzulejo) + parseFloat(anchoAzulejo))/(largoAzulejo * anchoAzulejo));
         document.getElementById('result').style = "";
         if (resultado1 == 1) {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente un kilo de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente un kilo de alguno de estos productos...";
         } else {
             document.getElementById('resultado1').innerHTML = "Le recomendamos aproximadamente " + resultado1 + " kilos de...";
             document.getElementById('resultado2').innerHTML = "Aunque también te puede servir aproximadamente " + resultado1 + " kilo de alguno de estos productos...";
         }
     } else {
         alert('Completa los seis campos para poder hacer el cálculo.');
     }
 });
