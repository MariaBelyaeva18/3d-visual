<template>
  <v-btn
      color="#FF8DD871"
      style="margin-bottom: 60px"
      @click.stop="openNew()"
  >Оформить заказ</v-btn>

</template>

<script>

import {useStore} from "../store/actions.js";

export default {
  data () {
    return {
      store: useStore()
    }
  },

  methods: {
    async openNew() {
      this.store.viewModal = true
    }
  }
}


</script>

<style>

</style>