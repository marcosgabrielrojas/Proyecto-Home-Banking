class programa {
    //            <-------------Fase de estado de cuenta, extraccion, deposito y pago de Cuentas---------> 

    //                          compraracion de usuario
    static login() {
        // Se busca los datos del usuario y se lo guarda en una variable
        console.log("Funciona el login");
        let usuario = document.querySelector("#usuario").value;
        let clave = document.querySelector("#clave").value;
        // usuario Registrado Trucho
        /*
        let usuarioValido = "marcos";
        let claveValida = "123";
        */
       let datosCuenta= baseDeDatos.datos();
        // Comparacion y validacion de los usuario
        if (datosCuenta.user === usuario && datosCuenta.pass === clave) {
            console.log("el usuario entro");
            document.querySelector("#LoginPNL").style.display = "none";
            document.querySelector("#cuentaPNL").style.display = "block";
            document.querySelector("#SMSpass").innerHTML = "";

        } else {
            console.log("no eres usuario del banco");
            document.querySelector("#SMSpass").innerHTML = "Contraceña o Usuario INCORRECTO";
        }
    }
    //                          metodo Salir Cuenta
    static salir() {
        programa.borrar();
        programa.mostrar();
//         document.querySelector("#loginPNL").style.display = "block";
    }
    //                          funcionamiento de los botones 
    static button() {

        document.querySelector("#loginBTN").setAttribute("onclick", "programa.login();");
        //document.querySelector("#buttonBRR").setAttribute("onclick","programa.borrar();");
        document.querySelector("#salir").setAttribute("onclick", "programa.salir();");
        document.querySelector("#consultarCuenta").setAttribute("onclick", "Cuenta.consultarTpl();");
        document.querySelector("#prueba").setAttribute("onclick","baseDeDatos,datos();");
    }
    // para ocultar o mostrar la cuenta Banco
    static borrar() {
        document.querySelector("#cuentaPNL").style.display = "none";
    }
    static mostrar() {
        document.querySelector("#LoginPNL").style.display = "block";
    }
}
class baseDeDatos {
    //                          Base de Datos EN JS.
    static datos() {
        //base de dato que simula venir del SERVER
        let cuentas = {
            nombre: "MarcosRojas",
            user: "marcos",
            pass: "123",
            saldo: 5000,
            limite: 2000
        };

        //usamops el localStorage como base de dato 
        localStorage.setItem("miBaseDeDatos", JSON.stringify(cuentas));
        return cuentas;
        console.log();
    }
}
class Cuenta {
    static consultarTpl() {
        console.log("funcionaCuenta y consultarTpl()");
        document.querySelector("#masterTpl").innerHTML = document.querySelector("#consultarTpl").innerHTML;
        // document.querySelector("#consultarTpl").style.display = "block";
        let  misDatos = JSON.parse(localStorage.getItem("miBaseDeDatos")); // que hace en Realidad Duda Profe
        document.querySelector("#nombreUser").innerHtml = misDatos.nombre;
        document.querySelector("#saldo").innerHtml = "$" + misDatos.saldo;
    }
}

programa.button();
programa.borrar();
