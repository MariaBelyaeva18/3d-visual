import { defineStore } from "pinia"
import axios from "axios";
import form from "../modules/portfolio/components/Form.vue";

export const useStore = defineStore("uStore", {
    state: () => ({
        client: [],
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
            return axios.get(`http://localhost:8080/mail`, {
                params: this.form
            })
        }
    }
})