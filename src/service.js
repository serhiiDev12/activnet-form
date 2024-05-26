import axios from "axios";


const orderToHtml = (orderArray, template, color) => {
    let email = "New Order Received # On: " + new Date()
    orderArray.forEach(order => {
        email +=  "<br/>" + "<h2>" + order.title + "</h2>" + "<br/>" + "<br/>"
        order.fields.forEach(item => {
            email += "<b>" + item.title + "</b>" + ": " + "<br/>" + item.value + "<br/>";
        })
    })
    console.log(template.title, color.title, color.value)
    email += `\n Template: ${template.title}, HEX: #${color.value}`
    return email;
}

export const sendOrder = async (order, template, color) => {
    return await fetch('https://ykvqioxa6d.execute-api.us-east-2.amazonaws.com/default/orderReceived', {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer",
        body: orderToHtml(order, template, color)
    }).then(res => res.data)
}

export const sendContactForm = async (form) => {
    return await fetch('https://ykvqioxa6d.execute-api.us-east-2.amazonaws.com/default/orderReceived', {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer",
        body: `${form.email}, ${form.body}`
    }).then(res => res.data)
}