export default async function inicio () {
    await new Promise(res=>{

        let mensajeini = [`Se ecucha una puerta abrirse` , `Escuhas pasos que se acercan a ti` , `Se escucha alguien acercandose` , `Cada vez está mas cerca...`];
        let cont = 0;
        const mensajes = setInterval(() => {
            console.clear();
            console.log(mensajeini[cont]);
            cont++
        }, 2000);
        setTimeout(()=>{
            clearInterval(mensajes);
            res(true);
         },10000);
    })
        console.clear();
        console.log("???: Bienvenido nuevamente a este mundo fantastico, esta es su version 2.0")
}

