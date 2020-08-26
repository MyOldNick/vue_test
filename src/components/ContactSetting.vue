<template>
  <div>
    <form class="flex flex-column" @submit.prevent="onSubmit">
      <label class="mt-5px">Имя:</label>
      <input v-model="name" />
      <label class="mt-1">Номер:</label>
      <input v-model="number" />
      <label class="mt-1">E-mail:</label>
      <input v-model="email" />
      <label class="mt-1">Адрес:</label>
      <input v-model="address" />
      <div class="mt-1">
        <button type="submit" class="gray button br-5">Обновить</button>
        <router-link class="gray button br-5 ml-1" to="/">Назад</router-link>
      </div>
    </form>
    <p v-if="isOk">Данные обновлены</p>
    <div v-if="confirm" class="h-50 w-100">
      <p>Нажмите "Подтвердить" для обновления</p>
      <button class="button red br-5" v-on:click="update">Подтвердить</button>
      <button class="ml-1 button green br-5" v-on:click="confirm = false">Отмена</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { API } from "../API";

export default {
  name: "ContactSetting",
  data() {
    return {
      name: "",
      number: "",
      email: "",
      address: "",
      isOk: false,
      confirm: false
    };
  },

  mounted() {
    const id = this.$route.params.id;

    axios.get(`${API}/find?id=${id}`, {}).then(res => {
      this.updateState(res.data);
    });
  },

  methods: {
    updateState(props) {
      const { name, number, email, address } = props;
      this.name = name;
      this.number = number;
      this.email = email;
      this.address = address;
    },

    onSubmit() {
      this.confirm = true;
    },

    update() {
      this.confirm = false;
      axios
        .put(`${API}/update`, {
          id: this.$route.params.id,
          name: this.name,
          number: this.number,
          email: this.email,
          address: this.address
        })
        .then(res =>
          res.status === 200 ? (this.isOk = true) : console.log("ошибка")
        );
    }
  }
};
</script>

<style>

.gray {
  background-color: rgb(165, 161, 161);
  color: white
}
</style>