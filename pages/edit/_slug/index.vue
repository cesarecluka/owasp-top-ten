<template>
  <div class="edit flex-column">


    <nuxt-link tag="div" to="/" class="back-button"> <fa class="icon-small" :icon="['fas', 'chevron-left']" /> Back to list </nuxt-link>


    <h2>Edit vulnerability</h2>


    <VulnerabilityFormComponent :old_vulnerability="new_vulnerability" @entry-ready="saveVulnerability" />


  </div>
</template>

<script>
import VulnerabilityFormComponent from '../../../components/form/VulnerabilityFormComponent.vue'

export default {

  components: {
    VulnerabilityFormComponent
  },

  data(){
    return{
      old_vulnerability: {},
      new_vulnerability: {}
    }
  },

  mounted(){
    this.old_vulnerability = this.$store.getters['vulnerabilities/getBySlug'] (this.$route.params.slug)

    if(this.old_vulnerability){
      this.new_vulnerability = JSON.parse(JSON.stringify(this.old_vulnerability))
    }
  },

  methods:{
    saveVulnerability(new_vulnerability){

      new_vulnerability.slug = new_vulnerability.title.replaceAll(' ', '-').toLowerCase()
      new_vulnerability.updatedAt = new Date().toJSON();

      this.$store.commit('vulnerabilities/remove', this.old_vulnerability)
      this.$store.commit('vulnerabilities/add', new_vulnerability)

      this.old_vulnerability = {}
      this.new_vulnerability = {}
    }
  }

}
</script>

<style lang="scss" scoped>
  .edit{
    position: relative;
    background-color: $light-2;
    color: $dark-2;
    width: 100%;
    padding: 3rem;
    box-sizing: border-box;

    .back-button{
      position: absolute;
      top: 3rem;
      left: 3rem;
      color: $dark-4;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover{
        transform: translateX(1rem);
      }
    }
  }



  //********RESPONSIVE*********/

  .laptop{

    .back-button{
      top: 2rem;
      left: 2rem;
      font-size: 1rem;
    }
  }

  .tablet{
    padding: 1.5rem;

    .back-button{
      top: 1.5rem;
      left: 1.5rem;
      font-size: 0.9rem;

      &:hover{
        transform: translateX(0.5rem);
      }
    }

    h2{
      margin-top: 1.5rem;
    }
  }

  .phone{
    padding: 1rem;

    .back-button{
      top: 1rem;
      left: 1rem;
      font-size: 0.9rem;

      &:hover{
        transform: translateX(0.5rem);
      }
    }

    h2{
      margin-top: 1.7rem;
    }
  }

  .phoneS{
    padding: 1rem;

    .back-button{
      top: 1rem;
      left: 1rem;
      font-size: 0.8rem;

      &:hover{
        transform: translateX(0.3rem);
      }
    }

    h2{
      margin-top: 1.7rem;
    }
  }
</style>
