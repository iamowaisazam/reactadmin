import { configureStore } from '@reduxjs/toolkit'

import customizationReducer from "./customizationReducer";
import userReducer from "./users/UserSlice";
import generalReducer from "./general/generalSlice";
import GetUserListSlice from "./users/GetUserListSlice";
import CreateUserSlice from "./users/CreateUserSlice";
import EditUserSlice from "./users/EditUserSlice";

const reducers = {
    customization:customizationReducer,
    userReducer:userReducer,
    generalReducer:generalReducer,
    GetUserListSlice:GetUserListSlice,
    CreateUserSlice,
    EditUserSlice
};

const store = configureStore({
    reducer:reducers
});

const persister = 'Free';

export { store, persister };
