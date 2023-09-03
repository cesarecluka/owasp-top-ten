<template>
  <div class="vulnerabilities flex-column">


    <h1>OWASP Top Ten</h1>


    <h3>Globally recognized by developers as the first step towards more secure coding.</h3>


    <p class="lead">The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.</p>
    <p class="lead">Companies should adopt this document and start the process of ensuring that their web applications minimize these risks. Using the OWASP Top 10 is perhaps the most effective first step towards changing the software development culture within your organization into one that produces more secure code.</p>


    <nuxt-link tag="a" to="/new" class="add-new-btn btn btn-green"> <fa class="icon-small" :icon="['fas', 'plus']" /> Add new </nuxt-link>


    <div class="vulnerabilities-items flex-column">

      <VulnerabilityListItemComponent v-for="vulnerability in vulnerabilities" :key="vulnerability.slug" :vulnerability="vulnerability" />

    </div>


  </div>
</template>

<script>
import VulnerabilityListItemComponent from '../components/vulnerabilities/VulnerabilityListItemComponent.vue'

export default {

  components:{
    VulnerabilityListItemComponent
  },

  computed: {
    vulnerabilities(){
      return this.$store.state.vulnerabilities.list
    }
  }

}
</script>

<style lang="scss" scoped>
  .vulnerabilities{
    background-color: $light-2;
    width: 100%;
    padding: 3rem;
    box-sizing: border-box;

    .add-new-btn{
      margin-top: 3rem;
    }

    h1{
      text-align: center;
    }

    h3{
      text-align: center;
    }

    .vulnerabilities-items{
      width: 100%;
      margin-top: 1rem;
    }
  }



  //********RESPONSIVE*********/
  .laptopL{

    .add-new-btn{
      margin-top: 2rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;
    }
  }

  .laptop{
    padding: 2rem;

    .add-new-btn{
      margin-top: 1.5rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;
    }
  }

  .tablet{
    padding: 1.5rem;

    .add-new-btn{
      margin-top: 1rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;
    }
  }

  .phone{
    padding: 1rem;

    .lead{
      text-align: center;
    }

    .add-new-btn{
      margin-top: 1rem;
    }

    .vulnerabilities-items{
      margin-top: 0;
    }
  }

  .phoneS{
    padding: 1rem;

    .lead{
      text-align: center;
    }

    .add-new-btn{
      margin-top: 1rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;
    }
  }
</style>
