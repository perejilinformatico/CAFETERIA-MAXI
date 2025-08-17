      function enviarMensaje() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un cafe normal porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
      function enviarMensaje1() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un sutil equilibrado porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
      function enviarMensaje2() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un cortado expreso porfavor  a nombre de: "  + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
      function enviarMensaje3() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un capuchino porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
      function enviarMensaje4() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        var numero = "5491153194250"; 
        var mensaje = "Hola, quiero un capuchino con nutella porfavor a nombre de: " + nombre1; 
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, "_blank");
      }
      function ayuda() {
        var nombre = document.getElementById("nombre").value;
        var nombre1 = nombre;
        console.log("listo rey");
        console.log(nombre1);
        Nombretrue();
      }
       function Nombretrue() {
        document.getElementById("truenombre").innerHTML = "Ya pusiste tu nombre";
        document.getElementById("jaja").innerHTML = "No lo cambies";
       }
