<template>
  <div id="form-container">
    <form id="form" class="flex flex-center" @submit.prevent="onSubmit">
      <label class="mt-5px">Имя:</label>
      <input type="text" v-model="name" />
      <label class="ml-1 mt-5px">Номер:</label>
      <input v-model="number" />
      <button type="submit" href="#" id="add-button" class="ml-1 add-button green br-5">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateContact",
  data() {
    return {
      name: "",
      number: ""
    };
  },
  
  methods: {
    onSubmit() {
      this.$emit('add-contact', this.name, this.number)
      this.name=''
      this.number=''
    }
  }
};
</script>

<style>
.add-button {
  padding: 5px 5px;
}

.mt-5px {
  margin-top: 5px;
}

.w-input {
  width: 100px;
}

@media (max-width: 620px) {
  #form {
    flex-direction: column;
    text-align: center;
  }

  #add-button {
    padding: 5px 5px;
    margin: 15px auto;
  }
}
</style>