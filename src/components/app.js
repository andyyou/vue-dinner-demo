import Vue from 'vue'
import Logo from '../images/logo.png'

module.exports = Vue.extend({
  template: '<div><img :src="logo">{{msg}}</div>',
  data () {
    return {
      msg: 'Hey, vue getting start',
      logo: Logo
    }
  }
})
