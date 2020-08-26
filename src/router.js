import Vue from "vue";
import VueRouter from "vue-router";

import MainComponent from "./components/MainComponent.vue";
import ContactSetting from "./components/ContactSetting.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainComponent,
    },

    {
      path: "/contact/:id",
      component: ContactSetting,
    },
  ],
});
