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
      <button type="submit" class="green add-button mt-1">Обновить</button>
    </form>
    <p v-if="isOk">Данные обновлены</p>
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
      isOk: false
    };
  },
  mounted() {
    const id = this.$route.params.id;

    axios.get(`${API}/find?id=${id}`, {}).then(res => {
      this.updateState(res.data)
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
      axios.put(`${API}/update`, {
        id: this.$route.params.id,
        name: this.name,
        number: this.number,
        email: this.email,
        address: this.address
      }).then(res => res.status === 200 ? this.isOk = true : console.log('ничиво нипраизашло'))
    }
  }
};
</script>