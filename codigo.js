var x=1;
        var hola='Hola'
        document.getElementById("btnCalcular").addEventListener('click',function(){
            var xxx=document.getElementById("txtNombre");
            if(xxx.value == ""){
                xxx.style.backgroundColor="red";
                xxx.style.color="white";
            }else{
                xxx.style.backgroundColor="green";
                xxx.style.color="black";
                document.getElementById("miText").innerHTML = "Bienvenido"+xxx.value;
                xxx.value="";
            }
        });
        document.getElementById("txtNombre").addEventListener('keyup',function(){
            var xxx=document.getElementById("txtNombre");
            document.getElementById("miText").innerHTML = "Bienvenido"+xxx.value;
        });
        function miFuncion(){
            var todo="";
            for(var y=0;y<x;y++){
                todo=todo+"<button>Hola soy el boton"+x+"<button>";
            }
            document.getElementById("miText").innerHTML=todo;
            x++;
        }