<template>
  <div id="app">

    <NavbarComponent />

    <nuxt :class="$mq" keep-alive/>

  </div>
</template>

<script>

export default {
  head () {
    return {
      bodyAttrs: {
        class: 'reset-body'
      }
    }
  },

  async fetch() {
    const vulnerabilities = await this.$content('vulnerabilities', {text: true}).sortBy('position', 'asc').fetch()

    if(this.$store.state.vulnerabilities.list.length == 0){
      this.$store.commit('vulnerabilities/init', vulnerabilities)
    }
  },

}
</script>

<style lang="scss" >
  .reset-body{
    margin: 0;
    padding: 0;
  }
</style>
