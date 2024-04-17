function decodificar() {
    let textoCodificado = document.getElementById("texto").value;
    let textoDecodificado = "";

    let i = 0;
    while (i < textoCodificado.length) {
        if (textoCodificado[i] === "(") { // Si encontramos un paréntesis de apertura
            let j = i + 1;
            let textoADecodificar = "";
            while (j < textoCodificado.length && textoCodificado[j] !== ")") {
                textoADecodificar += textoCodificado[j];
                j++;
            }
           
            textoDecodificado += textoADecodificar.split("").reverse().join("");
           
            i = j + 1;
        } else {
            textoDecodificado += textoCodificado[i];
            i++;
        }
    }
    alert(textoDecodificado);
}