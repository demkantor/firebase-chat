import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlpZJKzcyHQOlDncQZeSuhrlpbw9GIgQ8",
  authDomain: "fir-chat-384eb.firebaseapp.com",
  databaseURL: "https://fir-chat-384eb.firebaseio.com",
  projectId: "fir-chat-384eb",
  storageBucket: "fir-chat-384eb.appspot.com",
  messagingSenderId: "69730859161",
  appId: "1:69730859161:web:43d8e75ea0ebe30defe008",
  measurementId: "G-6M6JD706LY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
