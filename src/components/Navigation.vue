<template>
  <div class="navigation">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link to="/">
          Chicago Native, E.R. Johnson
        </router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown id="ddown1" text="Paintings">
            <router-link to="/Paintings/SixteenByTwenty">
              16" x 20"
            </router-link>
            <br />
            <router-link to="/Paintings/TwentyByTwentyFour">
              20" x 24"
            </router-link>
            <br />
            <router-link to="/Paintings/ThirtyByThirty">
              30" x 30"
            </router-link>
            <br />
            <router-link to="/Paintings/ThreeByThree">
              3' x 3'
            </router-link>
            <br />
            <router-link to="/Paintings/FourByThree">
              4' x 3'
            </router-link>
          </b-nav-item-dropdown>
          <b-nav-item
            href="https://www.instagram.com/artworkofchicago/"
            class="instagram"
          >
            <i class="fab fa-instagram"></i>
            Instagram
          </b-nav-item>
          <b-nav-item v-b-modal.modal-1 href="#/Contact" class="Contact">
            <i class="fab fa-contact"></i>
            Contact
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/variables";

.navbar-brand {
  font-weight: bold;
}
.navigation ::v-deep a {
  color: black;
  text-decoration-color: $underline-color;
  text-align: center;
  margin: 0px 0px;
  font-size: 25px;
}
</style>
