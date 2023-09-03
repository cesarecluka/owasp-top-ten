<template>
  <div class="vulnerabilities flex-column">


    <h1>OWASP Top Ten</h1>


    <h3>Globally recognized by developers as the first step towards more secure coding.</h3>


    <p class="lead">The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.</p>
    <p class="lead">Companies should adopt this document and start the process of ensuring that their web applications minimize these risks. Using the OWASP Top 10 is perhaps the most effective first step towards changing the software development culture within your organization into one that produces more secure code.</p>


    <nuxt-link tag="a" to="/new" class="add-new-btn btn btn-green"> <fa class="icon-small" :icon="['fas', 'plus']" /> Add new </nuxt-link>


    <div class="vulnerabilities-items flex-column">

      <div class="vulnerabilities-item flex-column" v-for="vulnerability in vulnerabilities" :key="vulnerability.position">

        <nuxt-link tag="a" :to="`/edit/${vulnerability.slug}`" class="edit-btn btn btn-blue"> <fa class="icon-small" :icon="['fas', 'pen-to-square']" /> Edit </nuxt-link>

        <h2>{{vulnerability.title}}</h2>

        <p class="lead-small">{{vulnerability.description_short}}</p>

        <nuxt-link tag="a" :to="`/vulnerability/${vulnerability.slug}`" class="more-btn btn btn-yellow">Learn more</nuxt-link>

        <img :src="vulnerability.img_url" alt="Vulnerability thumbnail">

      </div>

    </div>


  </div>
</template>

<script>

export default {

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

      .vulnerabilities-item{
        position: relative;
        overflow: hidden;
        background-color: $light-3;
        color: $dark-1;
        width: 85%;
        margin: 2rem 0;
        padding: 5rem 2rem 3rem 2rem;
        box-sizing: border-box;
        border-radius: 3px;

        .edit-btn{
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
        }

        h2{
          z-index: 2;
        }

        .lead-small{
          z-index: 2;
          text-align: center;
        }

        img{
          position: absolute;
          top: 50%;
          z-index: 1;
          margin: 0 auto;
          transform: translateY(-50%);
          opacity: 0.15;
        }

        .more-btn{
          z-index: 2;
          margin-top: 1.5rem;
        }
      }
    }
  }



  //********RESPONSIVE*********/
  .laptopL{

    .add-new-btn{
      margin-top: 2rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;

      .vulnerabilities-item{
        width: 100%;
        margin: 1.5rem 0;
        padding: 4rem 2rem 2.5rem 2rem;
      }
    }
  }

  .laptop{
    padding: 2rem;

    .add-new-btn{
      margin-top: 1.5rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;

      .vulnerabilities-item{
        width: 100%;
        margin: 1.2rem 0;
        padding: 3rem 2rem 2rem 2rem;
      }
    }
  }

  .tablet{
    padding: 1.5rem;

    .add-new-btn{
      margin-top: 1rem;
    }

    .vulnerabilities-items{
      margin-top: 0.5rem;

      .vulnerabilities-item{
        width: 100%;
        margin: 1rem 0;
        padding: 3rem 2rem 2rem 2rem;

        .more-btn{
          margin-top: 1rem;
        }
      }
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

      .vulnerabilities-item{
        width: 100%;
        margin: 1rem 0;
        padding: 3rem 2rem 2rem 2rem;

        .more-btn{
          margin-top: 1rem;
        }
      }
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

      .vulnerabilities-item{
        width: 100%;
        margin: 0.7rem 0;
        padding: 2.5rem 1rem 1.5rem 1rem;

        .more-btn{
          margin-top: 1rem;
        }
      }
    }
  }
</style>
