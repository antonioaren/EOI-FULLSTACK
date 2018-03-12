
$.get('https://jsonplaceholder.typicode.com/photos')
    .then(fotosCargadas)
    .catch(exeption)

function fotosCargadas(fotos) {
    var trocear = fotos.slice(0,9);
    var resultados = 0;
    trocear.forEach(photo => {
        resultados++;       
        
        $('#album').append(`
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${photo.url}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text"> ${photo.title}</p>
                </div>
            </div>
        </div> 
        
        `);                        
    });
    console.log(resultados);    
}

function exeption(error) {
    console.log(error);
}

