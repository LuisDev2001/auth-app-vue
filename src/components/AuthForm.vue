<template>
  <div class="wrapper-form">
    <img src="@/assets/icons/devchallenges.svg" alt="LOGO DEV CHALLENGE IO" />

    <h2 v-if="isRegisterForm">
      Join thousands of learners from around the world
    </h2>
    <p v-if="isRegisterForm">
      Master web development by making real-life projects. There are multiple
      paths for you to choose
    </p>

    <h2 v-if="!isRegisterForm">Login</h2>

    <form class="form">
      <div class="form-input">
        <input type="email" placeholder="Email" />
      </div>
      <div class="form-input">
        <input type="email" placeholder="Password" />
      </div>
      <div class="form-input">
        <button>{{ textButton }}</button>
      </div>

      <p>or continue with these social profile</p>
      <div class="wrapper-form__other--options-login">
        <button>Google</button>
        <button>Facebook</button>
        <button>Twitter</button>
        <button>GitHub</button>
      </div>
    </form>

    <span>
      {{ bottomTextForm }}
      <router-link :to="`/${linkToGoText}`">Login</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    textButton: {
      type: String,
      default: "",
    },
    bottomTextForm: {
      type: String,
      default: "",
    },
    linkToGoText: {
      type: String,
      default: "",
    },
    isRegisterForm: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/components/_authForm.scss";
</style>
