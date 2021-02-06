// me aseguro de que se ha cargado toda la pagina
var indiceRandom = 0;
var op = [];
var nivel = 1;
var puntaje = 0;
var elementos = []; 

$(document).ready(function(){
    /*
    $("#login").animate({
        'top':"10%"
    },300);*/

    if(localStorage.getItem('puntaje') != null){
        puntaje = parseInt(localStorage.getItem('puntaje'));
        console.log(localStorage.getItem('puntaje'));
    }
    $("#puntaje").text(puntaje);
     
    
    $("#elemento").droppable({ 
     drop: function(event, ui){
     $(this).addClass("ui-state-highlight").find("h2").html("dropped!");            
     //$(this).css('background-color','green');
     var i = $(ui.helper[0]).data('numero'); 
          
     recargar(elementos);
         if(i == indiceRandom){
             puntaje++;
         }else{
             puntaje--;
         }
         
        $("#puntaje").text(puntaje);
        localStorage.setItem('puntaje', puntaje);
        
        recargar(elementos);
        
 },
    over:function(event , ui){
    $(this).css('background-color','gray');
    },

    out:function(event , ui){
    $(this).css('background-color','purple');
    }

});

    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json', function(data){
                // console.log(data.elements[0]);
                elementos = data;
                recargar(elementos);
 
        });

        function recargar(data){

 
            $("#opciones").find('li').remove();
            var cuantos = data.elements.length;
            var random = Math.floor(Math.random() * cuantos);
            //console.log(cuantos);
            $("#elemento").find('h2').text(data.elements[random].name);

            for(var i=0;i<(nivel * 3);i++){ 
                var num = Math.floor(Math.random() * cuantos);
                op.push(num);
                // $("#opciones").find('ul').append('<li><h2>'+data.elements[num].symbol+'</h2></li>');
        } 
        //$("#opciones").find('ul').append('<li><h2>'+data.elements[indiceRandom].symbol+'</h2></li>');
        op.push(indiceRandom);
        op.sort( ()=> Math.random() - 0.5);
        op.forEach(element => {
  
            $("#opciones").find('ul').append('<li class="drag" data-numero="'+element+'"><h2>'+
             data.elements[element].symbol+'</h2></li>');
});

        $(".drag ").draggable({
            revert:"invalid",
            refreshPosition:true,
            copy:true,
            drag:function(event, ui){
                $(this).css('opacity','0.5');
            },
            stop: function(event , ui){
                $(this).css('opacity','1');        
            }
        }); 
        }

    $("#txtNombre").on('keyup', function(){
        $("#txtNombre").css('border','1px solid white'); 
        $(".alerta").fadeOut(400);

});

    $("#btnIniciar").click(function(){
        if($("#txtNombre").val() == ""){
            $("#txtNombre").css('border','1px solid red'); 
            $(".alerta").fadeIn(400);
        }else{


        $("#login").animate({
            'left':"-500px"
        },300,function(){
            $("#login").fadeOut(1000);
        });
    }
    });
});