<template>
    <header>
      <div class="navbar-fixed">
        <nav class = "grey darken-4">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">
              <i class="material-icons fontsize1_25em">shopping_cart</i>
              Kupi.me
            </a>

              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="/"> <span class ="fontsize1_25em">Početna strana</span></a></li>
                <li><a href="/login"><span class ="fontsize1_25em">Uloguj se</span></a></li>
                <li><a href="/register"><span class ="fontsize1_25em">Registruj se</span></a></li>
                <li><a href="mobile.html"><span class ="fontsize1_25em">Mobile</span></a></li>
              </ul>
          </div>
        </nav>
      </div>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="/">Početna strana</a></li>
        <li><a href="/login">Uloguj se</a></li>
        <li><a href="/register">Registruj se</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </header>

</template>

<script>
import M from 'materialize-css'
export default {
    name:'HeaderComp',
     mounted(){
    M.AutoInit()
  },
}
</script>

<style scoped>
nav{
    background-color: transparent;
    box-shadow: none;
}

li{
  font-weight: bold;
  padding: 0 20px;
}

header{
  text-align: justify;
}
</style>