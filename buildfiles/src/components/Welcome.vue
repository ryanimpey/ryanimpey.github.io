<template>
  <div class="main">
    <the-navbar></the-navbar>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Hi, I'm Ryan. <br> I design and build websites.
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <h6 class="subtitle is-5">Have a look at some of my work</h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  name: 'HelloWorld',
  components: {
    TheNavbar
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero{
    background: linear-gradient(rgba(23, 147, 209, 0.75), rgba(23, 147, 209, 0.1)), url('../assets/img/background.jpg');
    background-position: center right;
    background-size: cover;
    background-repeat: no-repeat;
  }

  h6{
    padding-bottom: 25px;
  }
</style>
