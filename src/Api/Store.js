import { createStore, combineReducers } from "redux";
import { leftDrawerReducer } from "../Reducers/leftDrawerList";
import { triggerDrawerReducer } from "../Reducers/triggerleftDrawer";

const combined = combineReducers({
    open: triggerDrawerReducer,
    list:leftDrawerReducer
});
export const store = createStore(combined);
