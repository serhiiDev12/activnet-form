import axios from "axios";


const orderToHtml = (orderArray) => {
    let email = "New Order Received # On: " + new Date()
    orderArray.forEach(order => {
        email +=  "<br/>" + "<h2>" + order.title + "</h2>" + "<br/>" + "<br/>"
        order.fields.forEach(item => {
            email += "<b>" + item.title + "</b>" + ": " + "<br/>" + item.value + "<br/>";
        })
    })
    return email;

}

export const sendOrder = async (order) => {
    console.log()
    await fetch('https://ykvqioxa6d.execute-api.us-east-2.amazonaws.com/default/orderReceived', {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer",
        body: orderToHtml(order)
    })
}