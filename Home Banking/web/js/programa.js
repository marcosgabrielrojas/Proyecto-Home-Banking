class programa{
    static login(){
        console.log("Funciona el login");
        let usuario =document.querySelector("#usuario").value;
        let clave   =document.querySelector("#clave").value;
        
        let usuarioValido   ="Curtido12@gmai.com";
        let claveValida     =2019;
        
        if (usuarioValido==usuario && claveValida==clave) {
            console.log("el usuario entro");
        }else{
            console.log("no eres usuario del banco");
        }
    }
    static button(){
        console.log("funciona el button");
        document.querySelector("#loginBTN").setAttribute("onclick","programa.login();");
    }
}
programa.button();
