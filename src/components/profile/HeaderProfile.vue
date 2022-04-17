<template>
  <header class="header-profile">
    <div class="header-profile__logo">
      <img src="@/assets/icons/devchallenges.svg" alt="LOGO DEV CHALLENGE IO" />
    </div>
    <div class="header-profile__options">
      <div class="header-profile__options--info">
        <img
          src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1650844800&Signature=gr-OeIzJ5X-pRpobm0qaKFfKmVsIO5LyH12A~92B~0xGg7-2Yh5594GZ81IOitFieW-kP6ZwXGyy9aMOJ2kUGPqOyQLwFDYQ6PIXnyoZrhaCOYNc4MBTrsmTXqd-Or1LyjoenxnRlKb6uBupDeKmEZJXVjCq3FO9o5kdbIaZYrNPm5UPD-mfudSnEXiMnm5qN6nSDDTISlrrPT4u-oFe-EYoryFGt6xhPFMOE7VKU5mb0k5iChuISzf4ENpbnx34McGYDoMLXiiK-H2ObWWn9u4VEEZcVg0kryeaP7G0zr113whNSj40gyqYXGcff99YXfp66IDOTIx8dnWE985pDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Nombre de usuario"
        />
        <span class="header-profile__options--info-name">Xanthe Neal</span>
      </div>
      <div class="header-profile__more-options" @click="handleShowMenuProfile">
        <mdicon name="menu-down" size="24" />
      </div>

      <!-- more options -->
      <div
        :class="[
          'header-profile__widget--list',
          isActiveMenuProfile ? 'is-active' : '',
        ]"
      >
        <div class="header-profile__widget--item my-profile">
          <mdicon name="account-circle" size="24" />
          My profile
        </div>
        <div class="header-profile__widget--item group-chat">
          <mdicon name="account-multiple" size="24" />
          Group chat
        </div>
        <hr class="header-profile__widget--divider" />
        <div class="header-profile__widget--item logout">
          <mdicon name="logout-variant" size="24" />
          Logout
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderProfile",
  data() {
    return {
      isActiveMenuProfile: false,
    };
  },
  methods: {
    handleShowMenuProfile() {
      this.isActiveMenuProfile = !this.isActiveMenuProfile;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/components/_headerProfile.scss";
</style>
