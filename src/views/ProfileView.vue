<template>
  <div>
    <header-profile />
  </div>
</template>

<script>
import HeaderProfile from "@/components/profile/HeaderProfile.vue";
export default {
  name: "ProfileView",
  components: {
    "header-profile": HeaderProfile,
  },
};
</script>

<style></style>
