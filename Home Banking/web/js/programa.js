class programa {
    // compraracion de uusuario
    static login() {
    // Se busca los datos del usuario y se lo guarda en una variable
        console.log("Funciona el login");
        let usuario = document.querySelector("#usuario").value;
        let clave = document.querySelector("#clave").value;
    // usuario Registrado Trucho
        let usuarioValido = "marcos";
        let claveValida = "123";
    // Comparacion y validacion de los usuario
        if (usuarioValido === usuario && claveValida === clave) {
            console.log("el usuario entro");
            document.querySelector("#LoginPNL").style.display="none";
            document.querySelector("#cuentaPNL").style.display="block";
            document.querySelector("#SMSpass").innerHTML="";
        } else {
            console.log("no eres usuario del banco");
            document.querySelector("#SMSpass").innerHTML="Contraceña o Usuario INCORRECTO";
        }
    }
    // funcionamiento de los botones 
    static button() {
        console.log("funciona el button");
        document.querySelector("#loginBTN").setAttribute("onclick", "programa.login();"); 
        //document.querySelector("#buttonBRR").setAttribute("onclick","programa.borrar();");
        document.querySelector("#salir").setAttribute("onclick", "programa.borrar();");
    }
    // para ocultar la cuenta Banck
    static borrar() {
        document.querySelector("#cuentaPNL").style.display = "none";
    }
}
programa.button();
programa.borrar();
