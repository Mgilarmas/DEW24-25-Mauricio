document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let name = document.getElementById("validationDefault01").value;
        let lastName = document.getElementById("validationDefault02").value;
        let username = document.getElementById("validationDefaultUsername").value;
        let city = document.getElementById("validationDefault03").value;
        let state = document.getElementById("validationDefault04").value;
        let zip = document.getElementById("validationDefault05").value;
        let account = document.getElementById("validationDefault06").value;
        let idType = document.getElementById("validationDefault07").value;
        let idNumber = document.getElementById("validationDefault08").value;

        let validate = true;
        let error = "";
        
        if (!/^[A-Z]/.test(name)) {
            validate = false;
            error += "El nombre debe comenzar con mayúscula.\n";
            }
        if (!/^[A-Z]/.test(name)) {
            validate = false;
            error += "El apellido debe comenzar con mayúscula.\n";
            }
        if (!/^\d{5}$/.test(zip)) {
            validate = false;
            error += "El código postal debe contener exactamente 5 números.\n";
            }
        if (idNumber.trim() === "") {
            validate = false;
            error += "El número de identificación no puede estar vacío";
            }
    })
});