<template>
  <li id="li">
    <div id="card" class="w-95 h-100 mt-1 shadow flex space-between">
      <div class="flex">
        <img
          id="img"
          src="../img/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884-removebg-preview.png"
          width="120px"
          class="mt-1 mb-1"
        />
        <div>
          <h3 class>{{item.name}}</h3>
          <p class="text-gray">Номер: {{item.number}}</p>
        </div>
      </div>
      <div>
        <button id="info" class="mt-2 mr-1 button green br-5">
          <router-link id="info" :to="link">Подробности</router-link>
        </button>
        <button id="delete" v-on:click="openDelete = true" class="mr-1 button red br-5">Удалить</button>
      </div>
    </div>
    <div v-if="openDelete" class="h-50 w-100">
      <p>Вы уверены что хотите удалить этот контакт??</p>
      <button href="#" class="button red br-5" v-on:click="remove(item._id)">Да, удалить</button>
      <button href="#" class="ml-1 button green br-5" v-on:click="openDelete = false">Нет</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  data() {
    return {
      openDelete: false
    };
  },
  methods: {
    remove(id) {
      this.$emit("delete-item", id);
      this.openDelete = false;
    }
  },
  computed: {
    link() {
      return `/contact/${this.item._id}`;
    }
  }
};
</script>

<style>
.h-100 {
  height: 100px;
}

.h-70 {
  height: 70px;
}

.text-gray {
  color: gray;
}

.p-20px {
  padding: 7px 7px;
}

@media (max-width: 620px) {
  #card {
    width: 100%;
    flex-direction: column;
    height: auto;
  }

  #img {
    height: 70px;
  }

  #delete {
    border-radius: 0%;
    margin-right: 0;
    margin-top: 0;
    width: 50%;
  }

  #info {
    border-radius: 0%;
    margin-right: 0;
    margin-top: 0;
    width: 50%;
  }
}
</style>