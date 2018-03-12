$.get('./data/london.json')
    .then(fotosCargadas)
    .catch(exeption)

    function fotosCargadas(fotos) {
        var trocear = fotos.slice(0,25);        
        trocear.forEach(datos => {  
            console.log(datos);
            /* console.log(datos["Address Block"].text);   */        
            
            $('#album').append(`
            <div class="card subgrid--col2">
            <div class="image--card">
            <img class="card-img-top" href="${datos["Hotel Image"].href}" src="${datos["Hotel Image"].src}" alt="${datos["Hotel Image"].alt}">
            </div>
                
                <div class="card-body">
                    <h2 class="card-title">${datos["Hotel Image"].alt}</h2>
                    <p class="card-text">${datos["Hotel Description"].text}</p>
                    <p class="card-text">
                        <small class="text-muted"> Bonita y acojedora </small>
                    </p>
                </div>
            </div>           
            `);                        
        });           
    }

    function exeption(error) {
        console.log("Error");        
    }

    function limpiarDatos(){
        

    }