// function newTable(){

//     $(document).ready(function() { //Esta función se ejecutará una vez el DOM esté completamete cargado
//         $.ajax({  //es un método
//             url: 'employees.json', 
//             method: 'GET',  //se usa para solicitar datos de un servidor
//             dataType: 'json', //especificar el tipo de dato
//             success: function(data) { //se ejecuta si la solicitud AJAX se realiza con éxito
//     //Inicializar una variable que contenga una cadena que represente la estructura de la tabla.
//     // UTILIZAR FUNCION $.each() de
//     let table = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Departament</th></tr></thead><tbody>';
//                 $.each(data, function(index, employees) {
//             //Agregar una fila para cada uno (MIRIam, gonzalo....
//                 table += `<tr><td>${employees.id}</td><td>${employees.name}</td><td>${employees.departament}</td></tr>`;
//                 }); //Finalizo el bucle que recorre los empleados
//                 table += '</tbody></table>';
//                 $('#table-container').html(table);
//     }, //cerrar success
//             error: function() {
//                 $('#table-container').html('<p>Error loading data.</p>');
//             }
//         });
//     });

// }

function newTable2(){
    fetch('employees.json')
    .then(request => request.json())
    .then(json =>
        {
            createTable(json);
            console.log('los datos',json)
        }
    )
    console.log('se sigue ejecuando el documento');


}

function createTable(data){

    let div = document.getElementById("table-container");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let trh = document.createElement("tr");

    div.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(trh);

    trh.innerHTML = "<th>ID</th><th>Name</th><th>Department</th>"

    for (let i = 0; i < data.length; i++){
        let row = document.createElement("tr");
        table.appendChild(row);
        let innerHTML = '';
        innerHTML += `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].department}</td>`
        row.innerHTML = innerHTML;

    }
}