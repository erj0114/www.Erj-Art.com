<template>
  <div class="page">
    <h1>Contact</h1>
    <div class="locations-white locations-generic contact centered-box">
      <section>
        <!-- <div class="locations-title">Contact</div>  -->
      </section>
      <a href="mailto:erj0114@att.net">
        <i class="fas fa-envelope-open-square">
          Email me
        </i> </a
      ><br />
      <call-button tel-number="‪(872) 216-8806‬" />Eric Johnson<br />
    </div>
  </div>
</template>

<script>
import CallButton from "./CallButton";
export default {
  name: "Contact",
  components: {
    CallButton,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h1 {
  color: white !important;
}
.page {
  background-image: url("/assets/HomePainting.png");
  flex-direction: column;
  color: white !important;
}
section {
  margin-bottom: 10px;
  color: white;
}
a:hover {
  color: coral;
}
a {
  margin-bottom: 14px;
  display: inline-block;
  color: white;
}
@media screen and (max-width: 768px) {
  .contact {
    width: 90%;
  }
}
.call-button {
  margin-right: 20px;
  color: white;
}
.fa-envelope {
  font-size: 50px;
  margin-right: 40px;
  color: white;
}
</style>
