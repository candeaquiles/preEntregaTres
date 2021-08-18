//CONSUMO DE API

const GETURL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
$("#divi").prepend('<button id="cotizacion">GET</button>')

$("#cotizacion").click(() =>{

    $.get(GETURL, function(resultado, estado) {
        if ( estado === "success"){
            //console.log(resultado);
            resultado.forEach(element => {
                sessionStorage.setItem("dolar", element.casa.compra)
                $("#here").append(
                    `
                    <div class="col-12 bg-lightpink text-center">
                    <h2>${element.casa.nombre}</h2>
                    <p>${element.casa.compra}</p>
                    <p>${element.casa.venta}</p>
                </div>
                    `
                )
                console.log(element.casa.nombre);
                console.log(element.casa.compra);
                console.log(element.casa.venta);
                
            });
        }
    })


})






//DARK MODE

const theme = () =>{
    if(localStorage.getItem("modo") == "oscuro"){
        aclarar()
    }else{
        oscurecer()
    }

}

const oscurecer = () =>{
    $("body").css("background-color", "black")
    $("p").css("color", "grey")
    $("h2").css("color", "white")
    $("input").css("color", "grey")
    $("header").css("background-color", "white")
    $("h2").css("color", "violet")
    
    localStorage.setItem("modo", "oscuro")
}

const aclarar = () =>{
    $("body").css("background-color", "#cfc6ca")
    $("p").css("color", "black")
    $("h2").css("color", "white")
    $("input").css("color", "white")
    $("header").css("background-color", "#cfc6ca")
    $("h2").css("color", "pink")

    localStorage.setItem("modo", "light")
}




$("#switch").click(theme);



//VIDEO