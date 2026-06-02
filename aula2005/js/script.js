function calcular() {

    let litros = parseFloat(
        document.getElementById("litros").value
    );

    let sabor = document.querySelector(
        'input[name="suco"]:checked'
    );

   
    if (isNaN(litros) || litros <= 0) {
        alert("Digite uma quantidade válida!");
        return;
    }

    if (!sabor) {
        alert("Escolha um tipo de suco!");
        return;
    }

    let agua = 0;
    let suco = 0;


    switch (sabor.value) {

        case "maracuja":
            agua = litros * 0.6;
            suco = litros * 0.4;
            break;

        case "caju":
            agua = litros * 0.8;
            suco = litros * 0.2;
            break;

        case "goiaba":
            agua = litros * 0.5;
            suco = litros * 0.5;
            break;
    }


    if (document.getElementById("acucar").checked) {
        agua = agua - (agua * 0.02);
    }

   
    if (document.getElementById("gelo").checked) {
        agua = agua - (agua * 0.05);
    }

    
    document.getElementById("agua").innerHTML =
        agua.toFixed(2) + " L";

    document.getElementById("suco").innerHTML =
        suco.toFixed(2) + " L";
}

function novo() {

    document.getElementById("litros").value = "";

    let radios =
        document.getElementsByName("suco");

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    document.getElementById("acucar").checked = false;
    document.getElementById("gelo").checked = false;

    document.getElementById("agua").innerHTML = "";
    document.getElementById("suco").innerHTML = "";
}