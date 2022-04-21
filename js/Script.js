const products = []

const products_list = document.getElementById('lista_de_produtos')


async function RenderProducts() {

    try {
        let url = 'https://localhost:5001/api/Products/GetProducts';



        var response = await fetch(url).then(data => data.json());


        if (response.length == 0) {
            alert('lista vazia')
            products_list.innerHTML = '<h1  style="text-align: center; margin-top: 50px;">Nenhum produto disponivel</h1>'
        } else {
            products_list.innerHTML += ' <div class="container" style="padding-top: 50px;"> <div id="itens" class="row"> </div> </div>'
            let itens = document.getElementById('itens')
            var index = 0;

            while (index < response.length) {
                console.log(response[0].id);
                console.log();
                itens.innerHTML += `<div class="col-sm"> <img src="${response[index].imageUrl}" alt="#" width="300px" height="300px"><p style="word-break: normal;">${response[index].name}</p><strong><p>R$ ${response[index].price}</p></strong></div>`
                index++
            }
        }

    }
    catch (error) {
        products_list.innerHTML = '<h1  style="text-align: center; margin-top: 50px;">Nenhum produto disponivel</h1>'
    }
}


RenderProducts()