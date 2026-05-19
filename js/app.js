function result() {
    const INPUT1 = document.getElementById("num1");
    const NUM1 = parseInt(INPUT1.value);
    const INPUT2 = document.getElementById("num2");
    const NUM2 = parseInt(INPUT2.value);
    const BLOCK = document.getElementById("block").value; 
    const RESPONDA = document.getElementById("responda");
    
    let text = ""; 

    if (BLOCK === "sum") {
        text = `La suma de: ${NUM1} + ${NUM2} = <span style="color: blue;">${NUM1 + NUM2}</span>`;
    } else if (BLOCK === "diff") {
        text = `La resta de: ${NUM1} - ${NUM2} = <span style="color: blue;">${NUM1 - NUM2}</span>`;
    } else if (BLOCK === "prod") {
        text = `La multiplicacion: ${NUM1} * ${NUM2} = <span style="color: blue;">${NUM1 * NUM2}</span>`;
    } else if (BLOCK === "qout") {
        let res = (NUM2 !== 0) ? (NUM1 / NUM2).toFixed(2) : "Error (no se puede dividir por 0)";
        text = `La division de: ${NUM1} / ${NUM2} = <span style="color: blue;">${res}</span>`;
    }

    RESPONDA.innerHTML = text; 

    INPUT1.value = "";
    INPUT1.focus();
    
    INPUT2.value = "";
    INPUT2.focus();
}
