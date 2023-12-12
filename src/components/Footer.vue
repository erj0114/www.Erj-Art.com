<template>
  <div id="footer">
    <div class="text-container">
      <strong>Artist-ERJ.com</strong><br />© 2018 All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.social-icons {
  cursor: pointer;
}
#footer {
  font-weight: bold;
  font-size: 20px;
  // height: 100px;
  // width: 100%;
  background-image: url("/assets/Painting8.png");
  background-size: cover;
  background-repeat: no-repeat;
  // background-position-y: -150px;
  color: black;
  // padding-top: 0px;
}
.text-container {
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
}
</style>
