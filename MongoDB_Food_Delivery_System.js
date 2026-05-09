use foodDB

db.orders.insertMany([
{
    order_id: 101,
    customer_name: "Rahul",
    restaurant: "Pizza Hut",
    food_item: "Pizza",
    quantity: 2,
    price: 500,
    city: "Bangalore",
    status: "Delivered"
},
{
    order_id: 102,
    customer_name: "Priya",
    restaurant: "Dominos",
    food_item: "Burger",
    quantity: 1,
    price: 250,
    city: "Chennai",
    status: "Pending"
},
{
    order_id: 103,
    customer_name: "Arun",
    restaurant: "KFC",
    food_item: "Chicken Bucket",
    quantity: 1,
    price: 700,
    city: "Hyderabad",
    status: "Delivered"
},
{
    order_id: 104,
    customer_name: "Sneha",
    restaurant: "Pizza Hut",
    food_item: "Pasta",
    quantity: 3,
    price: 450,
    city: "Bangalore",
    status: "Pending"
},
{
    order_id: 105,
    customer_name: "Kiran",
    restaurant: "Burger King",
    food_item: "Burger",
    quantity: 2,
    price: 350,
    city: "Mumbai",
    status: "Delivered"
}
])

db.orders.find()

db.orders.find({ city: "Bangalore" })

db.orders.find({ status: "Delivered" })

db.orders.aggregate([
{
    $group: {
        _id: "$city",
        total_revenue: { $sum: "$price" }
    }
}
])

db.orders.aggregate([
{
    $group: {
        _id: "$food_item",
        total_orders: { $sum: "$quantity" }
    }
},
{
    $sort: { total_orders: -1 }
},
{
    $limit: 1
}
])

db.orders.aggregate([
{
    $group: {
        _id: "$restaurant",
        average_order_value: { $avg: "$price" }
    }
}
])

db.orders.aggregate([
{
    $group: {
        _id: "$status",
        total_orders: { $sum: 1 }
    }
}
])

db.orders.createIndex({ customer_name: 1 })

db.orders.createIndex({ city: 1 })

db.orders.find({
    price: { $gt: 300 }
}).sort({
    price: -1
})
