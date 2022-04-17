<template>
  <div class="information-profile">
    <div class="information-profile__titles">
      <h2>Personal info</h2>
      <p>Basic info, like your name and photo</p>
    </div>

    <div class="information-profile__edit">
      <div class="information-profile__edit--text">
        <h2>Profile</h2>
        <span>Some info may be visible to other people </span>
      </div>
      <div class="information-profile__edit--button">
        <button>Edit</button>
      </div>
    </div>

    <div class="information-profile__data">
      <div class="information-profile__data--user photo">
        <h3>PHOTO</h3>
        <img
          src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1650844800&Signature=gr-OeIzJ5X-pRpobm0qaKFfKmVsIO5LyH12A~92B~0xGg7-2Yh5594GZ81IOitFieW-kP6ZwXGyy9aMOJ2kUGPqOyQLwFDYQ6PIXnyoZrhaCOYNc4MBTrsmTXqd-Or1LyjoenxnRlKb6uBupDeKmEZJXVjCq3FO9o5kdbIaZYrNPm5UPD-mfudSnEXiMnm5qN6nSDDTISlrrPT4u-oFe-EYoryFGt6xhPFMOE7VKU5mb0k5iChuISzf4ENpbnx34McGYDoMLXiiK-H2ObWWn9u4VEEZcVg0kryeaP7G0zr113whNSj40gyqYXGcff99YXfp66IDOTIx8dnWE985pDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Nombre de usuario"
        />
      </div>
      <div class="information-profile__data--user user-na,e">
        <h3>NAME</h3>
        <div>Xanthe Neal</div>
      </div>
      <div class="information-profile__data--user bio">
        <h3>BIO</h3>
        <div>I am a software developer and a big fan of devchallenges...</div>
      </div>
      <div class="information-profile__data--user phone">
        <h3>PHONE</h3>
        <div>908249274292</div>
      </div>
      <div class="information-profile__data--user email">
        <h3>EMAIL</h3>
        <div>xanthe.neal@gmail.com</div>
      </div>
      <div class="information-profile__data--user password">
        <h3>PASSWORD</h3>
        <div>************</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationProfile",
};
</script>

<style lang="scss" scoped>
@import "~@/scss/components/_informationProfile.scss";
</style>
