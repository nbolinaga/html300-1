<template>
  <div id="app">
    <div class="container">
      <div class="row m-5" >
      <div class="form-group">
          <label for="TITLE">FORM</label>
          <button type="submit" class="btn btn-success btn-block mt-3"  v-on:click="enableButton">Click Me</button>
          <button type="submit" class="btn btn-dark btn-block mt-3" v-bind:disabled="isButtonDisabled" v-tooltip.hover v-bind:title="tooltip" id="submitButton">Submit</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isButtonDisabled: true,
      tooltip: "Click Green Button First" 
    }
  },
    methods:{
      enableButton: function(event){
      this.isButtonDisabled = !this.isButtonDisabled,
      this.tooltip = !this.tooltip
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
