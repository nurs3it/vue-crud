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
                required: true
            },
            {
                text: 'Name',
                value: 'name',
                required: true
            },
            {
                text: 'Brand',
                value: 'brand',
                required: true
            },
            {
                text: 'Weight',
                value: 'weight',
                required: true
            },
            {
                text: 'Quantity',
                value: 'quantity',
                required: true
            },
            {
                text: 'Price',
                value: 'price',
                required: true
            },
            {
                text: 'Stock',
                value: 'stock',
                required: true
            },
            {
                text: 'Actions', value: 'actions',
                sortable: false
            }
        ],
        actions: products
    }
}