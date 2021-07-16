console.log('Hola')

let products = [
    {
        "id": 1,
        "name": "Cannes Beige",
        "price": 110.00,
        "isVegan": false,
        "discount": false,
        "percentage": 0,
        "preOrder": false,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/files/cannes-beige-p2.jpg?v=1617807882",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/files/cannes-beige-4.jpg?v=1616711032"
    },
    {
        "id": 2,
        "name": "Double Strap Camel",
        "price": 95.00,
        "isVegan": false,
        "discount": true,
        "percentage": 15,
        "preOrder": true,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/files/double-strap-p3.jpg?v=1617808982",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/files/double-strap-p2.jpg?v=1617808832"
    },
    {
        "id": 3,
        "name": "Indian Brown",
        "price": 130.00,
        "isVegan": false,
        "discount": true,
        "percentage": 15,
        "preOrder": false,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/files/indiana-brown-p4-1.jpg?v=1617733759",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/files/indiana-brown-p4.jpg?v=1617733615"
    },
    {
        "id": 4,
        "name": "Grace Green",
        "price": 120.00,
        "isVegan": false,
        "discount": false,
        "percentage": 15,
        "preOrder": false,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/products/grace-green-sandal-alohas-114880_360x.jpg?v=1589381397",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/files/grace-green-5.jpg?v=1616712294"
    },
    {
        "id": 5,
        "name": "Marshmallow Cactus",
        "price": 140.00,
        "isVegan": true,
        "discount": true,
        "percentage": 15,
        "preOrder": true,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/files/marshmallow-black-3.jpg?v=1622801923",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/files/marshmallow-black-5.jpg?v=1622801923"
    },
    {
        "id": 6,
        "name": "East Off White",
        "price": 290.00,
        "isVegan": false,
        "discount": true,
        "percentage": 15,
        "preOrder": true,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/products/east-off-white-boots-alohas-921208_2700x.jpg",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/products/east-off-white-boots-alohas-116373_2700x.jpg?"
    },
    {
        "id": 7,
        "name": "Sway Black",
        "price": 130.00,
        "isVegan": false,
        "discount": true,
        "percentage": 15,
        "preOrder": true,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/products/sway-black-ballet-flats-alohas-839827_2260x.jpg",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/products/sway-black-ballet-flats-alohas-180214_1950x.jpg"
    },
    {
        "id": 8,
        "name": "Indiana Grey",
        "price": 130.00,
        "isVegan": false,
        "discount": true,
        "percentage": 15,
        "preOrder": false,
        "image": "https://cdn.shopify.com/s/files/1/0762/7039/products/indiana-grey-sandal-alohas-267251_2100x.jpg",
        "image2": "https://cdn.shopify.com/s/files/1/0762/7039/products/indiana-grey-sandal-alohas-918818_1950x.jpg"
    }
]

function getProducts() {
            return products
        }

function discountPrice(price, percentage){
    return price - (price*(percentage/100))
}