import { defineStore } from "pinia"

export const useStore = defineStore("uStore", {
    state: () => ({
        users: [],
        viewModal: false,
        form: {
            name: "",
            surname: "",
            workType: "",
            telephone: "",
            email: "",
        },
    }),
})