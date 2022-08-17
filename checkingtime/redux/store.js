import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  messageReducer,
  companyReducer,
  passwordReducer,
  timesheetReducer,
  allReducer,
  taskReducer,
  loadTaskManager,
  loadTaskContributor

} from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    message: messageReducer,
    password: passwordReducer,
    timesheet: timesheetReducer ,   
    allUser: allReducer,
    task: taskReducer,
   
  },
});

export default store;