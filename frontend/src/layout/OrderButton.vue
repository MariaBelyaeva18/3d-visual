<template>
  <v-btn
      color="#FF8DD871"
      style="margin-bottom: 60px"
      @click.stop="this.store.viewModal = true"
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
}


</script>

<style>

</style>