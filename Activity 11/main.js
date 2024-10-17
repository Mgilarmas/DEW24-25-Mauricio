function sendForm(e){
    e.preventDefault();
    let form = document.querySelector("form");
    let place = document.querySelector("input").value;
    let url = document.querySelector("a").href;

    fetch(url).then(response => {
        if (!response.ok){
            throw new Error('Error en la red');
        }
        return response.json();
    }).then(data =>{
        console.log(data);
    });
}