import store from "~/store";
import {_setCurrentAccount} from "~/store/auth/index";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))
