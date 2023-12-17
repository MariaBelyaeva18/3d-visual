import { defineStore } from "pinia"
import axios from "axios";

export const useStore = defineStore("uStore", {
    state: () => ({
        client: [],
        viewModal: false,
        form: {
            name: "",
            surname: "",
            workType: "",
            telephone: "",
            email: "",
        },
    }),
    actions: {
        async getOrder() {
            return axios.get(`http://localhost:8080/mail`)
        }
    }
})