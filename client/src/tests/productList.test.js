import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Products from "../components/ProductsList"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'
const initialState = { output: 10 };
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const items = [
    {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
    },
];
let store;
test('product card is present',async()=>{
    store = mockStore(initialState);
    render(
        <Router>
            <Provider store={store}>
                <Products />
            </Provider>
        </Router>
    )
})