var employees = [
    {"id":1,"name":"MIRIAM CASTIÑEIRA BREA","department":"IT"},
    {"id":2,"name":"GONZALO MULET FIGUERAS","department":"IT"},
    {"id":3,"name":"FRANCISCO JOSE GRAÑA BARBERA","department":"IT"},
    {"id":4,"name":"IRENE POMBO JORDA","department":"HR"}
];

function generateAlert(employees){
    for (let i = 0; i < employees.length; i++)
        {
            alert(`${employees[i].id}, ${employees[i].name}, ${employees[i].department}`);
        }
}

function generateTable(employees)
{
    let div = document.getElementById("table-container");

    let table = document.createElement("table");
    div.appendChild(table);

    for (let i = 0; i < employees.length; i++)
        {
            let row = document.createElement("tr")
            table.appendChild(row)

             row.innerHTML=`<td>${employees[i].id}</td><td>${employees[i].name}</td><td>${employees[i].department}</td>`;
        }
}