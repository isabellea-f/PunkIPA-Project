<template>
  <!-- Login form -->
  <div>
    <input id="login" :type="type" v-model="userName" placeholder="User name" />
    <button id="loginBtn" @click="onSubmit">Log in</button>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    greeting: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.userName !== "") {
        alert("Hello " + this.userName + "!");
      } else {
        alert("Please enter your username.");
      }
    },
  },
};
</script>
