import {createSlice, configureStore, combineReducers} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";
import tmp1 from "./components/Template1.png";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        template: {
            id: 111,
            title: "Template 1",
            subtext: "",
            route: "/order-website/templateOne",
            src: tmp1
        },
        color: {
            name: "Green",
            value: "00796B"
        },
        orderForm: [
            {
                id: 1,
                title: "Contact Info",
                subtitle: "Please provide your contact info so we can contact you once job is done",
                fields: [
                    {id: 11, title: "Name", value: "", fieldType: 1, required: true},
                    {id: 12, title: "Personal Email", fieldType: 5, required: true, value: "" },
                    {id: 13, title: "Personal Phone", fieldType: 6, required: true, value: "" },
                    {id: 14, title: "Company Phone", fieldType: 6, value: "", required: true},
                    {id: 15, title: "Company Email", fieldType: 5, value: "", required: true},
                    {id: 16, title: "Company location (optional)", fieldType: 2, value: "", required: true},
                ]
            },
            {
                id: 2,
                title: "Business Details",
                subtitle: "We'll use this info to fill up the website best way possible",
                fields: [
                    {id: 111, title: "Business Name and/or Website name", fieldType: 1, value: "", required: true},
                    {id: 222, title: "Business Description", value: "", fieldType: 2, required: true},
                    {id: 333, title: "Company social media (list separated with comma (,))", fieldType: 2, value: "", required: true}
                ]
            },
            {
                id: 3,
                title: "Company Values",
                subtitle: "Your company values are important to stand out your business",
                fields: [
                    {id: 1111, title: "Provide recent metrics that out stand your company", fieldType: 2, value: "", required: true},
                    {id: 2222, title: "Achievements you most proud of", value: "", fieldType: 2, required: true},
                    {id: 3333, title: "Company Values", fieldType: 2, value: "", required: true},
                    {id: 4444, title: "Company goals", fieldType: 2, value: "", required: true},
                ]
            },
            {
                id: 4,
                title: "Features",
                subtitle: "Please select integrations that will define your website functionality",
                fields: [
                    {id: 11111, title: "I want to receive inquiries from my website to my SMS/Email", fieldType: 3, value: false},
                    {id: 22222, title: "Where to receive inquiry", fieldType: 4, value: "Email", selections: ["Email", "SMS"], controlledBy: 11},
                    {id: 33333, title: "I want to provide my own images and text", fieldType: 3, value: false},
                    {id: 44444, title: "Additional preferences or changes you want to make?", fieldType: 1, value: "", controlledBy: 13},
                ]
            },
            {
                id: 5,
                title: "Done",
                subtitle: "Verify your order info",
                fields: []
            }
        ]
    },
    reducers: {
        changeValue: (state, action) => {
            let {groupId, fieldId, value} = action.payload;

            const groupToChange = state.orderForm.find(item => item.id === groupId)

            const fieldToChange = groupToChange.fields.find(item => item.id === fieldId);
            const groupIndex = state.orderForm.indexOf(groupToChange);
            const fieldIndex = groupToChange.fields.indexOf(fieldToChange);

            state.orderForm[groupIndex].fields[fieldIndex] = {
                ...state.orderForm[groupIndex].fields[fieldIndex],
                value: value
            }
        },
        setTemplate: (state, action) => {
            state.template = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        }
    }
})

export const {
    changeValue,
    setTemplate,
    setColor
} = orderSlice.actions;

const rootReducer = combineReducers({
    order: orderSlice
});
export const store = configureStore({
    reducer: orderSlice.reducer
})