// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.




fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        // console.log(carts)
        carts.forEach((cart) => {
            // console.log(cart)
            let cartDvi = document.createElement('div')
                document.body.appendChild(cartDvi)
                let ul = document.createElement('ul')
                cartDvi.appendChild(ul)
                for (const key in cart) {
                    let li = document.createElement('li')
                    if (typeof cart[key] === 'object') {
                        cart.products.forEach((product) => {
                            for (const productKey in product) {
                                cart[key] = productKey
                                // console.log(cart[key])
                            }
                        })
                    }
                        li.innerText = `${key}: ${cart[key]}`
                        ul.appendChild(li)
                }
        })
    });



//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

//  не зміг вивести інгрідієнти в списку, будь ласка підкажіть як це зробити
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        // console.log(recipes)
        for (const recipe of recipes) {
            // console.log(recipe)
            let divRes = document.createElement('div')
            document.body.appendChild(divRes)
            divRes.style.margin = '20px'
            let ol = document.createElement('ol')
            divRes.appendChild(ol)
            console.log(recipe.ingredients)
            for (const key in recipe) {
                let li = document.createElement('li')
                li.innerText = `${key}: ${recipe[key]}`
                ol.appendChild(li)
            }
        }
    });


