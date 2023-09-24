import {useSelector} from "react-redux";

export const useModal = () => useSelector(state => state.modal.modal)
