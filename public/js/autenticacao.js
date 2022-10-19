
function autenticar(){

        
    if (sessionStorage.EMAIL_USUARIO){

        console.log("user está logado")

        console.log(sessionStorage.EMAIL_USUARIO)

    } else {

        console.log("user não está logado")
        window.location = "index.html"

    }

    // PARA FAZER:
    // SE O USER NÃO ESTIVER LOGADO E TENTAR ACESSAR ALGO PELA BARRA DO NAVEGADOR NÃO TERÁ ACESSO
    // COLOCAR ESSA FUNÇÃO NO BODY DE TODAS AS PAGINAS*
    //LINKADA COM O SCRIPT 'AUTENTICAR.JS'

    function ConfirmarLogin(){

        if (sessionStorage.EMAIL_USUARIO){

            console.log("user está logado")
    
            console.log(sessionStorage.EMAIL_USUARIO)
    
        } else {
    
            console.log("user não está logado")
            
    
        }

    }
}