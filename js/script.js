window.onload = function() { //Cuando la página se termine de ler, comienza a ejecutar el script

    let contador = 5;

    let abecedario ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZF"; //cadena cuya posición comienza desde 0
    console.log(`${abecedario.length}`);

    let letraAleatoria = parseInt(Math.random()*abecedario.length);
    console.log(`${abecedario.charAt(letraAleatoria)}`);//charAt nos devuelve le caracter de la posición indicada
    let correcta = abecedario.charAt(letraAleatoria);



    document.querySelector("#contador").innerHTML=contador;
    document.querySelector("#boton").addEventListener("click",function(){
        
        let letraUser = document.querySelector("#letra").value;
        let salida = document.querySelector("#salida");
        
        salida.innerHTML="";
        
        if (letraUser.toUpperCase()==correcta) {
            
            salida.innerHTML="Acertaste payo"
            
        } else {
            
            salida.innerHTML="Fallaste payo";
            contador--;
            
        }

        if(contador == 0) {

            salida.innerHTML="No tienes poder";
            document.querySelector("#letra").setAttribute("disabled","true");
            this.style.opacity = ".5";
            this.style.pointerEvents = "none";
            
        }
        
        document.querySelector("#contador").innerHTML=contador;
    });
    
    console.log(abecedario.indexOf("F")); //Busca la primera posición de izq a der. (1 elemento)
    console.log(abecedario.lastIndexOf("F")); //Busca la primera posición de der a izq. (1 elemento)





    //termina con endsWith() -> true si el parámetro pasado es igual al último o último caracteres
    console.log(abecedario.endsWith("XYZ"));
    console.log(abecedario.endsWith("XYZF"));
    let telefonos = ["926457896","958574103","687545422","750898989","987456321",]

    for (let i = 0; i < telefonos.length; i++) {
        
        if (telefonos[i].startsWith("926")) {
            
            console.log(`El telefono es de ciudad real`);

        } else if (telefonos[i].startsWith("958")) {
            
            console.log(`El telefono es de la atlantida`);

        } else {
            console.log(`Ete ${telefonos[i]} no coinside con parametros`);
        }
        
    }




    //Reemplazar un texto por otro
    let apellido = "Esto es un Menéndez";
    apellido = apellido.replace("Menéndez","popurri")
    console.log(apellido);





    //Trim...... Solo elimina los caracteres que sean espacios [ejemplo = " "] del principio y del final
    let nombre= " María ";
    let nuevoNombre = nombre.trim();
    console.log(nombre);
    console.log(nuevoNombre);




    //Slice..... Extrae de una cadena desde la posición que le indique hasta la posición que le indiques más uno
    console.log(apellido.slice(11,19));




    //subStr -> devuelve los caracteres desde la posición de inicio
    apellido = apellido.toLowerCase();
    console.log(apellido);
    console.log(apellido.substring(0,1).toUpperCase() + apellido.substring(1));
    
    
    
    //split -> convierte una cadena de caracteres en un array a partir del delimitador indicado
    let paises = "España-Francia-Italia-Portugal-Alemania";
    let todosPaises= paises.split("-");
    console.log(todosPaises);
    console.log(apellido.split(" "));

}
