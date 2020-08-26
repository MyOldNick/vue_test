<template>
  <div>
    <CreateContact @add-contact="addContact" />
    <ContactList v-bind:contactArray="peopleArray" @delete-item="removeContact" />
  </div>
</template>

<script>
import axios from "axios";

import ContactList from "./ContactList";
import CreateContact from "./CreateContact";
import {API} from '../API'

export default {
  name: "MainComponent",
  data() {
    return {
      peopleArray: []
    };
  },
  mounted() {
    axios.get(API, {}).then(res => (this.peopleArray = res.data));
  },
  components: {
    ContactList,
    CreateContact
  },
  methods: {
    removeContact(id) {
      //Для этого есть запрос DELETE, но он работает некорректно, поэтому будет PUT
      axios
        .put(`${API}/delete`, {
          id: id
        })
        .then(res => console.log(res.status));
      this.peopleArray = this.peopleArray.filter(el => el._id !== id);
    },
    addContact(name, number) {
      axios
        .post(`${API}/create`, {
          name: name,
          number: number
        })
        .then(res => this.peopleArray.push(res.data));
    }
  }
};
</script>

<style>
.w-100 {
  width: 100%;
}
.w-95 {
  width: 95%;
}

.w-70 {
  width: 70%;
}
.w-30 {
  width: 30%;
}

.shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.margin {
  margin: 0 auto;
}
.text-center {
  text-align: center;
}

.pt-1 {
  padding-top: 1rem;
}
.pl-1 {
  padding-left: 1rem;
}
.pr-1 {
  padding-right: 1rem;
}
.pb-1 {
  padding-bottom: 1rem;
}
.mt-1 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}

.mb-1 {
  margin-bottom: 1rem;
}
.ml-1 {
  margin-left: 1rem;
}
.ml-3 {
  margin-left: 3rem;
}

.mr-1 {
  margin-right: 1rem;
}
.mt-5 {
  margin-top: 5rem;
}

.br-5 {
  border-radius: 5%;
}

a {
  text-decoration: none;
  color: white;
}

button {
  border: none;
  outline: none;
}

.button {
  padding: 10px 10px;
  height: 40px;
}

.red {
  background-color: rgb(221, 60, 60);
  color: white;
}

.green {
  background-color: rgb(31, 168, 31);
  color: white;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.flex-start {
  justify-content: flex-start;
}

.flex-column {
  flex-direction: column;
}

.flex-center {
  justify-content: center;
}

@media (max-width: 620px) {
  #app {
    width: 95%;
    box-shadow: 0 0 0;
    padding: 0 0;
  }
}
</style>
