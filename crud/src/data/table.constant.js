import products from "./products.functions"
export default {
    products: {
        name: "products",
        title: "Products",
        headers: [
            {
                text: 'Art number',
                align: 'start',
                sortable: true,
                value: 'artnumber',
            },
            {text: 'Name', value: 'name'},
            {text: 'Brand', value: 'brand'},
            {text: 'Weight', value: 'weight'},
            {text: 'Quantity', value: 'quantity'},
            {text: 'Price', value: 'price'},
            {text: 'Stock', value: 'stock'},
            {text: 'Actions', value: 'actions', sortable: false}
        ],
        actions: products
    }
}