let Numero = document.querySelector('#Valor');

Numero.addEventListener("blur", function(e) {
   let Numero = this.value.replace( /\D/g , "");

   Numeros = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
   Algarismos_Romanos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

   Algarismo = "";
     
   for(i = Numeros.length; i >= 0; i--){    
      
      for(j = 0; Numero >= Numeros[i]; j++){
         Numero -= Numeros[i];
      }
      
      for(x = j; x > 0; x--){
         Algarismo += Algarismos_Romanos[i];
      }
   }

   document.getElementById("Resposta").innerHTML = Algarismo;
});