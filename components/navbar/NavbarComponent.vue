<template>
  <nav class="navbar flex-row" :class="$mq">

    <div class="logo">
      <nuxt-link tag="a" to="/">OWASP Top Ten List</nuxt-link>
    </div>

    <div class="menu flex-row">
      <nuxt-link tag="a" to="/">Vulnerabilities List</nuxt-link>
    </div>

  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .navbar{
    justify-content: space-between;
    background-color: $green;
    color: $dark-1;
    height: 6rem;
    width: 100%;
    padding: 0 3rem;
    box-sizing: border-box;

    .logo{

      a{
        font-size: 1.7rem;
      }
    }

    .menu{

      a{
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }



  //********RESPONSIVE*********/
  .laptopL{

    .logo{

      a{
        font-size: 1.6rem;
      }
    }

    .menu{

      a{
        font-size: 1.05rem;
      }
    }
  }

  .laptop{
    height: 5rem;
    padding: 0 2rem;

    .logo{

      a{
        font-size: 1.4rem;
      }
    }

    .menu{

      a{
        font-size: 1rem;
      }
    }
  }

  .tablet{
    height: 5rem;
    padding: 0 1.5rem;

    .logo{

      a{
        font-size: 1.3rem;
      }
    }

    .menu{

      a{
        font-size: 0.9rem;
      }
    }
  }

  .phone{
    height: 4rem;
    padding: 0 1rem;

    .logo{

      a{
        font-size: 1.1rem;
      }
    }

    .menu{

      a{
        font-size: 0.8rem;
      }
    }
  }

  .phoneS{
    height: 4rem;
    padding: 0 1rem;

    .logo{

      a{
        font-size: 0.9rem;
      }
    }

    .menu{

      a{
        font-size: 0.7rem;
      }
    }
  }
</style>
