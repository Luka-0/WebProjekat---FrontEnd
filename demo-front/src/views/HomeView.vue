<template>
    <header-comp :enableLogin="false"></header-comp>


    <div class="row">
        <div class="homepage_header relativePosition noRepeatBackground"></div>
    </div>

    <div class="row">
      <div class="col s12">
        <h1>Welcome</h1>
        <a type="button" href="/employees" class="btn">Show employee</a>
      </div>
    </div>

    <div class="container">
      <div class="row">
      <div class="col m6 s12 l6">
        Tekst 
      </div>

      <div class="col m6 s12 l6">
        Tekst
      </div>
    </div>
    </div>

    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>

    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>

    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>

    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>

    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>
    <p>fksdjfsdfsd</p><br>

  <footer-comp :enableLogin="false"></footer-comp>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
export default {
  name: "HomeView",
  components:{
    HeaderComp,
    FooterComp
  },


};
</script>

<style>
.homepage_header {
   background-image: url("../assets/header_back.jpg"); 
   height: 770px; 
   max-width: 100%;
   background-size: 100% 100%;
}

.noRepeatBackground{
     background-repeat: no-repeat;
}

.relativePosition{
  position: relative;
}

.nomargin{
  margin: none;
}

 @media screen and (max-width:600px) {
    .homepage_header{
      background-size: 100% 50%;
    }
}

</style>