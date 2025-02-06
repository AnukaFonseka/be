const { Order } = require("../models");
//add order.
async function addOrder(order) {

    try {
        
        const newOrder = await Order.create(order);

        

        return {
            error: false,
            status: 200,
            payload: "order Successfully added"
        }
        
        
    } catch (error) {
        console.error('Error Creating product Service : ',error);
        throw error;
        
    }
}

//All order list.
async function getAllOrder(){
    try {
        const listOfOrder = await Order.findAll({});

        if(!listOfOrder) {
            return {
                error: true,
                status: 404,
                payload: "No order data found."
            }
        }

        const allOrderObj = listOfOrder.map((order, index) => {
            
           
            return {
                id: order.id,
                productId: order.productId,
                userId: order.userId,
                productQuantity: order.productQuantity,
                paymentId:order.paymentId
                }
        })
        return {
            error: false,
            status: 200,
            payload: allOrderObj
        };
    } catch (error) {
        console.log(error)
        throw error;
    }
}

//Get order By ID
async function getOrderById(id) {
    try {
        const order = await Order.findByPk(id);

        

        const response = {
                id: order.id,
                productId: order.productId,
                userId: order.userId,
                productQuantity: order.productQuantity,
                paymentId:order.paymentId
            
        }

        return {
            error: false,
            status: 200,
            payload: response
        };

    } catch (error) {
        throw error;
    }
}




module.exports = {
    addOrder,
    getAllOrder,
    getOrderById,


    
}