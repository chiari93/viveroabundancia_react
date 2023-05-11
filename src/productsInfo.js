const products =[
    {
        id: '1',
        name: 'Cala',
        price: 200,
        category: 'interior',
        img: 'https://images.hola.com/imagenes/decoracion/20210622191778/cultivo-cala-plantas-exterior-interior-mc/0-966-575/cuidados-cala-m.jpg?tx=w_680',
        stock: 20,

    },

    {
        id: '2',
        name: 'Helecho',
        price: 100,
        category: 'exterior',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/202/679/products/delray-plantas-de-helecho-de-boston-en-10-cesta-colgante_11-7c440035268006f27e16587026729526-640-0.jpeg',
        stock: 20,

    }
    

]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}