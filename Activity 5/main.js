function createTable(e){
    e.preventDefault();
    
    const inputRow = document.getElementById("inputRow").value;
    const inputColumn = document.getElementById("inputColumn").value;

    let div = document.getElementById("table-container");
    let table = document.createElement("table");

    div.appendChild(table);

    for (let i = 0; i < inputRow; i++){
        let row = document.createElement("tr");
        table.appendChild(row);
        let innerHTML = '';
        for (let j = 0 ; j < inputColumn ; j++)
        {
            innerHTML += "<td>Row:"+ i + ", Col:" + j + "</td>"
        }
        row.innerHTML = innerHTML;

    }
}