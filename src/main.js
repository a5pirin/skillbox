import Vue from "vue";
import App from "./App.vue";

import data from "./data";
import { hIStr, helloStr } from "./hello";
import sayHi from "./hellofunc";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

//sayHi(hIStr);
//sayHi(helloStr);
