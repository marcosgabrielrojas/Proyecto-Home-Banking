class programa {
    //                          Base de Datos EN JS.
    static baseDeDatos() {
        //base de dato que simula venir del SERVER
        let cuenta = {
            nombre : "Marcos Rojas",
            user : "marcos",
            pass : "123",
            saldo : 5000,
            limite : 2000,
        };
        
        //usamops el localStorage como base de dato 
        localStorage.setItem("baseDeDatos",JSON.stringify(cuenta));
        return cuenta;
    }
    //            <-------------Fase de estado de cuenta, extraccion, deposito y pago de Cuentas---------> 
    static consultarCuenta(){
        console.log("funciona consultarCuentas()");
        // con este metodo se busca y se meten los datos de la cuenta
        
        let misDatos =JSON.parse(localStorage.getItem("baseDeDatos"));
        document.querySelector()("#bombreUser").innerHTML=misDatos.nombre;
    }
    //                          compraracion de usuario
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
            programa.consultarCuenta();
        } else {
            console.log("no eres usuario del banco");
            document.querySelector("#SMSpass").innerHTML="Contraceña o Usuario INCORRECTO";
        }
    }
    //                          metodo Salir Cuenta
    static salir(){
        programa.borrar();
        programa.mostrar();
//         document.querySelector("#loginPNL").style.display = "block";
    }
    //                          funcionamiento de los botones 
    static button() {
        console.log("funciona el button");
        document.querySelector("#loginBTN").setAttribute("onclick", "programa.login();"); 
        //document.querySelector("#buttonBRR").setAttribute("onclick","programa.borrar();");
        document.querySelector("#salir").setAttribute("onclick", "programa.salir();");
    }
    // para ocultar o mostrar la cuenta Banco
    static borrar() {
        document.querySelector("#cuentaPNL").style.display = "none";
    }
    static mostrar(){
        document.querySelector("#LoginPNL").style.display = "block";
    }
}
programa.button();
programa.borrar();
