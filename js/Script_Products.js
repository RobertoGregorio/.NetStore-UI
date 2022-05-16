const products = []

const products_list = document.getElementById('lista_de_produtos')


async function RenderProducts(pageNumber = 1, pageSize = 3 ) {

    try {

        let apiProductsUrl = `https://localhost:5001/api/Products/GetProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

        var response = await fetch(apiProductsUrl).then(data => data.json());

        if (response.length == 0) {
            products_list.innerHTML = '<h1 style="text-align: center; margin-top: 50px;">Nenhum produto disponivel</h1>'
        }
        else {

            products_list.innerHTML += `<div class="container" style="padding-top: 50px;"> 
            <div id="itens" class="row"> </div> 
            </div>`
            
            let itens = document.getElementById('itens')

            var index = 0;

            while (index < response.length) { 
                
                itens.innerHTML += `<div class="col-sm" style="max-width: 380px; margin-bottom:10px" >
                
                <img src="${response[index].imageUrl}" alt="#" width="300px" height="300px">
               
                <p style="word-break: normal;">${response[index].name} <br> <strong>R$ ${response[index].price}</strong></p><input class="btn btn-primary" type="submit" value="Comprar agora">
                </div>`

                index++
            }
        }

    }
    catch (error) {
        console.log(error);
        products_list.innerHTML = '<h1  style="text-align: center; margin-top: 50px;">Nenhum produto disponivel</h1>'
    }
}


async function RenderProductsPaginated(pageNumber = 1, pageSize = 3 ) {

    try {

        let apiProductsUrl = `https://localhost:5001/api/Products/GetProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

        var response = await fetch(apiProductsUrl).then(data => data.json());

        if (response.length != 0) {

            let itens = document.getElementById('itens')

            itens.innerHTML = ``

            var index = 0;

            while (index < response.length) { 
                
                itens.innerHTML += `<div class="col-sm" style="max-width: 380px; margin-bottom:10px" >
                
                <img src="${response[index].imageUrl}" alt="#" width="300px" height="300px">
               
                <p style="word-break: normal;">${response[index].name} <br> <strong>R$ ${response[index].price}</strong></p><input class="btn btn-primary" type="submit" value="Comprar agora">
                </div>`

                index++
            }

        }

    }
    catch (error) {
        console.log(error);
    }
}



RenderProducts()
