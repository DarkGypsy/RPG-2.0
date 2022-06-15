import inicio from "./pantallaini.js";
import menu from "./menu.js";
var color = "#ffffff";
function jugar(){
    const menuInicio  = new menu(
        "Alpha del juego",
        ["Iniciar juego","Configuracion"]
    )
    menuInicio.mostrarOpciones()
    const userInput  = menuInicio.getUserInput()
    if(userInput===1){
        const configMenu = new menu("Configuracion",["Color de texto", "Volver"])
        configMenu.mostrarOpciones();
        if (configMenu.getUserInput()=== 0) {
            let color = prompt("¿Que color deseas agregar? puedes usar hexadecimales tambien");
            jugar();
            return color;
            
        }
        if(configMenu.getUserInput()===1){
            jugar();
        }
    }
}


inicio();