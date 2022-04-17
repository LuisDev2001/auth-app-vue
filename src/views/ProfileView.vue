<template>
  <div class="profile-view">
    <header-profile />
    <information-profile />
  </div>
</template>

<script>
import HeaderProfile from "@/components/profile/HeaderProfile.vue";
import InformationProfile from "@/components/profile/InformationProfile.vue";

export default {
  name: "ProfileView",
  components: {
    "header-profile": HeaderProfile,
    "information-profile": InformationProfile,
  },
};
</script>

<style lang="scss" scoped>
.profile-view {
  padding: 1rem 0;
}
</style>
