async function cargando(){
    await new Promise(res=>{
        let cont = 0
        const interval = setInterval(()=>{
            console.clear()
            cont = cont + 5;
            console.log(`Descargando contenido necesario ${cont}%`)
            console.log("|".repeat(cont))
        },500)
        setTimeout(()=>{
            clearInterval(interval)
            res(true)
        },10500)
    })
    console.clear();
    console.log("Bienvenido al juego")
}

cargando()