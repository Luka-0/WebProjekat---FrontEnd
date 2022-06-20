<template>
    <header>
      <div class="navbar-fixed">
        <nav class = "grey darken-4">
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              <i class="material-icons fontsize1_25em">shopping_cart</i>
              Kupi.me
            </a>

              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="/employees"> <span class ="fontsize1_25em">Sass</span></a></li>
                <li><a href="/login"><span class ="fontsize1_25em">Components</span></a></li>
                <li><a href="collapsible.html"><span class ="fontsize1_25em">Javascript</span></a></li>
                <li><a href="mobile.html"><span class ="fontsize1_25em">Mobile</span></a></li>
              </ul>
          </div>
        </nav>
      </div>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
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

.fontsize1_25em{
  font-size:1.25em;
}

li{
  font-weight: bold;
  padding: 0 20px;
}

header{
  text-align: justify;
}
</style>