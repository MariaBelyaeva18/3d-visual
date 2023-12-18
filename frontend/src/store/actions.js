import { defineStore } from "pinia"
import axios from "axios";

export const useStore = defineStore("uStore", {
    state: () => ({
        viewModal: false,
        form: {
            name: "",
            surname: "",
            jobType: "",
            phoneNumber: "",
            email: "",
        },
    }),
    actions: {
        async getOrder() {
            return axios.get(`http://localhost:5000/mail`, {
                params: this.form
            })
        }
    }
})