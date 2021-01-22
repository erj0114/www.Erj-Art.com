<template>
  <div id="header"></div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  height: 100px;
  width: 100%;

  background-image: url("/assets/HomePainting.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -150px;
}
</style>
