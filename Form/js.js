
function validadorForm(){
    let name = document.forms["formulario"]["fname"].value;
    let lastname = document.forms["formulario"]["flname"].value;
    let salary = document.forms["formulario"]["fsalary"].value
    if(name == "" ||  lastname == "" || salary == ""){
        alert("Debe llenar todos los campos")
        return false
    }
}

function imprimirForm(){
    let myform = document.forms["formulario"]
    let texto = '';
    for(let elemento of myform){
        texto += elemento.value + '<br/>'

    }
    document.getElementById("ver").innerHTML = texto;
}

function calcularNomina(){
    let salary = document.forms["formulario"]["fsalary"].value;
    let eps = salary * 0.04;
    let pension = salary * 0.04;
    let sNeto = salary - eps - pension;
    let smlv = 1300000;
    let saux = 162000;
    if(salary < (2*smlv)){
        sNeto += saux
    }
    if(salary > (2*smlv)){
        sNeto
    }
    document.getElementById("ver2").innerHTML = sNeto;
}