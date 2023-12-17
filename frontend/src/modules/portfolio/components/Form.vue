<template>
  <v-layout>
    <v-navigation-drawer
        :model-value="store.viewModal"
        style="width: 25%"
        location="right"
        @update:model-value="store.viewModal = $event"
        @update:modelValue="this.reset()"
    >
      <v-list-item>
        Оформить заказ
        <v-icon
            style="justify-content: right"
            @click="store.viewModal = false; this.reset()"
        >mdi-close</v-icon></v-list-item>

      <v-list nav>
        <v-form
            @submit.prevent
            ref="form"
        >
          <v-text-field
              label="Имя"
              density="comfortable"
              :model-value="store.form.name"
              :rules="rules"
              @input="store.form.name = $event.target.value"
          ></v-text-field>

          <v-text-field
              label="Фамилия"
              density="comfortable"
              :model-value="store.form.surname"
              :rules="rules"
              @input="store.form.surname = $event.target.value"
          ></v-text-field>

          <v-select
              label="Вид работы"
              v-model="store.form.workType"
              :items="['Интерьер', 'Экстерьер/интеграция', 'Моделинг', 'Работа с чертежами']"
              density="comfortable"
              :rules="rules"
          ></v-select>

          <v-text-field
              label="Телефон"
              density="comfortable"
              :model-value="store.form.telephone"
              :rules="rules"
              @input="store.form.telephone = $event.target.value"
          ></v-text-field>

          <v-text-field
              label="Электронная почта"
              density="comfortable"
              :model-value="store.form.email"
              :rules="rules"
              @input="store.form.email = $event.target.value"
          ></v-text-field>



          <v-btn
              type="submit"
              class="mt-2"
              @click.stop="this.submitItem()"
          >Отправить</v-btn>
          <v-btn
              type="submit"
              style="margin-left: 10px"
              class="mt-2"
              @click.stop="this.reset()"
          >Сбросить</v-btn>
        </v-form>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>

import {useStore} from "../../../store/actions.js";

export default {
  data () {
    return {
      store: useStore(),
      rules: [
        (value) => {
          if (value) return true
          return "Incorrect data."
        }
      ],
    }
  },

  methods: {
    async submitItem() {
      try {
        this.store.viewModal = false
        await this.store.getOrder()
        this.reset()
      } catch (e) {
        this.store.viewModal = true
      }
    },

    reset() {
      this.$refs.form.reset()
      this.store.form = {
        name: "",
        surname: "",
        workType: "",
        telephone: "",
        email: "",
      }
    },
  }
}

</script>
