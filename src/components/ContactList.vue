<template>
  <div>
    <ul id="contactList">
      <div v-if="contactArray.length <=0" class="text-center">Контактов нет</div>
      <listItem
        v-else
        v-for="el of contactArray"
        v-bind:key="el._id"
        v-bind:item="el"
        @delete-item="deleteItem"
      />
    </ul>
  </div>
</template>

<script>
import listItem from "./Item";

export default {
  name: "ContactList",
  props: ["contactArray"],
  components: {
    listItem
  },

  methods: {
    deleteItem(id) {
      this.$emit("delete-item", id);
    }
  }
};
</script>

<style>
li {
  list-style-type: none;
}

@media (max-width: 620px) {
  ul {
    margin-block-start: 0em;
    padding-inline-start: 0px;
  }
}
</style>