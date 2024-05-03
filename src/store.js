// import 수동으로 먼저 선언
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";

export default configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
