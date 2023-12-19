<template>
  <div class="home">
    <h3 v-html="title">
      Welcome To Artist-ERJ.com
    </h3>
    <!-- <h3><span class="highlighted-letter">C</span>hicago
    <span class="highlighted-letter">B</span>ased <span class="highlighted-letter">A</span>rtists</h3> -->
    <br />
    <p>
      <strong
        >Eric Johnson, is a Chicago native. Pushing the limits of what's
        possible on Canvas with Acrlic paint.</strong
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    title() {
      const myTitle = "Eric R Johnson";
      // E|r|i|c|J|o|h|n|s|o|n|
      // 0|1|2|3|4|5|6|7|8|9|
      let response = "";
      for (let i = 0; i < myTitle.length; i++) {
        const letter = myTitle[i];
        if (i % 2 == 0) {
          response += `<span class="highlighted-letter">${letter}</span>`;
        } else {
          response += letter;
        }
      }
      return response;
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

p {
  font-size: 25px;
}
h1 {
  font-size: 50px;
}
h3 {
  font-size: 50px;
  margin: 50px 0 0;
  margin-bottom: 20px;
}
.home {
  margin-top: 20px;
}
.home ::v-deep .highlighted-letter {
  background-color: lightcoral;
}
</style>

