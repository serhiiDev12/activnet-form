import {createSlice, configureStore, combineReducers} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderForm: [
            {
                id: 1,
                title: "Contact Info",
                subtitle: "",
                fields: [
                    {id: 1, title: "Name", value: "", fieldType: 1, required: true},
                    {id: 2, title: "Personal Email", fieldType: 5, required: true, value: "" },
                    {id: 3, title: "Personal Phone", fieldType: 6, required: true, value: "" }
                ]
            },
            {
                id: 2,
                title: "Business Details",
                subtitle: "",
                fields: [
                    {id: 1, title: "Business Name and/or Website name", fieldType: 1, value: "", required: true},
                    {id: 2, title: "Business Description", value: "", fieldType: 2, required: true},
                ]
            },
            {
                id: 3,
                title: "Business achievements",
                subtitle: "You can list them by years, quarters, projects or any how you want",
                fields: [
                    {id: 1, title: "Provide recent metrics that out stand your company", fieldType: 2, value: "", required: true},
                    {id: 2, title: "Achievements you most proud of", value: "", fieldType: 2, required: true},
                ]
            },
            {
                id: 4,
                title: "Company Values",
                subtitle: "",
                fields: [
                    {id: 1, title: "Company Values", fieldType: 2, value: "", required: true},
                    {id: 2, title: "Company goals", fieldType: 2, value: "", required: true},
                ]
            },
            {
                id: 5,
                title: "Business Contact data",
                subtitle: "",
                fields: [
                    {id: 1, title: "Company Phone", fieldType: 2, value: "", required: true},
                    {id: 2, title: "Company Email", fieldType: 2, value: "", required: true},
                    {id: 3, title: "Company location (optional)", fieldType: 2, value: "", required: true},
                    {id: 4, title: "Company social media (list separated with comma (,))", fieldType: 2, value: "", required: true}
                ]
            },
            {
                id: 6,
                title: "Features",
                subtitle: "",
                fields: [
                    {id: 11, title: "I want to receive inquiries from my website to my SMS/Email", fieldType: 3, value: false},
                    {id: 2, title: "Where to receive inquiry", fieldType: 4, value: "Email", selections: ["Email", "SMS"], controlledBy: 11},
                    {id: 13, title: "I want to provide my own images and text", fieldType: 3, value: false},
                    {id: 4, title: "Additional preferences or changes you want to make?", fieldType: 1, value: "", controlledBy: 13},
                ]
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
        }
    }
})

export const { changeValue } = orderSlice.actions;

const rootReducer = combineReducers({
    order: orderSlice
});
export const store = configureStore({
    reducer: orderSlice.reducer
})