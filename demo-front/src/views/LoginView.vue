<template>
    
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6 offset-s3">
          <input  id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s6 offset-s3">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>

      <div class="row">
        <div class="cols12"> 
            <button v-on:click = "ulogujSe()" class="btn waves-effect waves-light" type="submit" name="action" >Uloguj se
                <i class="material-icons right">send</i>
            </button>
        </div>
      </div>
    </form>
  </div>
        
</template>

<script>
export default {
    name: "login",
    methods: {
        ulogujSe : function(){
            console.log('lep sam')
        }
    }
}
</script>