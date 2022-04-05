<template>
  <div class="login">
    <auth-form
      text-button="Login"
      bottomTextForm="Don’t have an account yet?"
      linkToGoText="register"
      :isRegisterForm="false"
    />
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";
export default {
  name: "Register",
  components: {
    "auth-form": AuthForm,
  },
};
</script>
