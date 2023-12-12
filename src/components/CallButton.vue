<template>
  
  <a class="call-button" :href="'tel:'+telNumber">
    <Button>
      <i class="fas fa-phone fa-rotate-90"></i>
      Call
    </Button>
    {{telNumber}}
  </a>
</template>

<script>
export default {
  name: "CallButton",
  props: {
    telNumber: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
