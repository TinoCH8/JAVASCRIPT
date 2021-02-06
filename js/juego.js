// me aseguro de que se ha cargado toda la pagina

$(document).ready(function(){
    $("#login").animate({
        'top':"10%"
    },300);

    $("#txtNombre").on('keyup', function(){

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