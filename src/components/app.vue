<template lang="html">
  <div>
    <img :src="logo">
    {{msg}}
  </div>
</template>

<script>
import Logo from '../images/logo.png'

export default {
  data: function () {
    return {
      msg: 'Hey, vue getting start',
      logo: Logo
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
div {
  color: #42B681;
}
</style>
