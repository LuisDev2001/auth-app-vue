<template>
  <div class="register">
    <auth-form
      text-button="Start coding now"
      bottomTextForm="Adready a member?"
      linkToGoText="login"
      :isRegisterForm="true"
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
