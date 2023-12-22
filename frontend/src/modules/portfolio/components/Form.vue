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
            @click="this.reset(); store.viewModal = false; "
        >mdi-close</v-icon></v-list-item>

      <v-list nav>
        <v-form
            @submit.prevent
            ref="form"
        >
          <v-text-field
              label="Имя"
              density="comfortable"
              :value="store.form.name"
              :rules="rules"
              @update:modelValue="store.form.name = $event"
          ></v-text-field>

          <v-text-field
              label="Фамилия"
              density="comfortable"
              :value="store.form.surname"
              :rules="rules"
              @update:modelValue="store.form.surname = $event"
          ></v-text-field>

          <v-select
              label="Вид работы"
              :value="store.form.jobType"
              :items="['Интерьер', 'Экстерьер/интеграция', 'Моделинг', 'Работа с чертежами']"
              density="comfortable"
              :rules="rules"
              @update:modelValue="store.form.jobType = $event"
          ></v-select>

          <v-text-field
              label="Телефон (без +7)"
              density="comfortable"
              :value="store.form.phoneNumber"
              :rules="trule"
              @update:modelValue="store.form.phoneNumber = $event"
          ></v-text-field>

          <v-text-field
              label="Электронная почта"
              density="comfortable"
              :value="store.form.email"
              :rules="erule"
              @update:modelValue="store.form.email = $event"
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
      erule: [
        (value) => {
          if (value && value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) return true
          return "Invalid email format."
        }
      ],
      trule: [
        (value) => {
          if (value && value.match(/^\d{10}$/)) return true
          return "Invalid phone number format."
        }
      ]
    }
  },

  methods: {
    async submitItem() {
      try {
        await this.store.getOrder()
        this.store.viewModal = false
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
        jobType: "",
        phoneNumber: "",
        email: "",
      }
    },
  }
}

</script>
