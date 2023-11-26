//console.log('estoy viendo el archivo de js'); para corroborar que esta bien linkeado

const intentos=0;
const numero = Math.ceil(Math.random()*100);
console.log(numero);

document.getElementById('boton').addEventListener('click',function(){
    const entrada = document.getElementById('ingreseNumero').value;

    for(intentos;intentos<5;intentos++){
        console.log(intentos);
        if(entrada >= 1 && entrada <=100){
            if(entrada < numero){
                alert('El número que ingresó es menor al número mágico 🙁. Intentelo de nuevo.');
            }else if(entrada > numero){
                alert('El número que ingresó es mayor al número mágico 🙁. Intentelo de nuevo.');
                
            }else if(entrada == numero){
                break;
            }

        }else{
            alert('❌ Debe ingresar un número entre 1-100.');
        }   
    }

    if(entrada == numero){
        alert('¡Excelente! Has adivinado el número 👏.\nPulsa aceptar para jugar de nuevo 😉');
            
    }else{
        alert('Oops! Lo siento, no tienes más intentos.');
    }
})