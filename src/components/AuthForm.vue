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
        <mdicon name="email" size="24" />
        <input type="email" placeholder="Email" />
      </div>
      <div class="form-input">
        <mdicon name="lock" size="24" />
        <input type="password" placeholder="Password" />
      </div>
      <div class="form-button">
        <button>{{ textButton }}</button>
      </div>

      <p>or continue with these social profile</p>
      <div class="wrapper-form__other--options-login">
        <button><mdicon name="google" size="24" /></button>
        <button><mdicon name="facebook" size="24" /></button>
        <button><mdicon name="twitter" size="24" /></button>
        <button><mdicon name="github" size="24" /></button>
      </div>
    </form>

    <span class="wrapper-form__already-have-account">
      {{ bottomTextForm }}
      <router-link :to="`/${linkToGoText}`">
        {{ textGoToCapitalize }}
      </router-link>
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
  computed: {
    textGoToCapitalize() {
      const firstLetter = this.linkToGoText.charAt(0).toUpperCase();
      const restText = this.linkToGoText.slice(1, this.linkToGoText.length);
      return `${firstLetter}${restText}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/components/_authForm.scss";
</style>
