<template>
  <main class="container about">
    <!-- row class sets bootstrap grid -->
    <div class="row">
      <!-- left side -->
      <div class="col-md">
        <h3>{{visit}}</h3>
        <a href="https://github.com/nbolinaga" target="_blank"><i class="fab fa-github text-primary logo"></i></a><br>
      </div>
      <!-- middle -->
      <div class="col-md-5 ">
        <h2>{{title}}</h2>
        <h3>{{subtitle}}</h3>
        <p>{{about}}</p>
        <p>{{message}}</p>
        <p>{{comment}}</p>
        <p class="email">{{email}}</p>
      </div>
      <!-- right side -->
      <div class="col-md">
        <img src="src/assets/me.png" alt="" class="img">
      </div>
    </div>
  </main>
</template>

<script>
export default{
 data(){
   return {
    title: 'ABOUT US',
    subtitle: 'More like.... ABOUT ME',
    about: 'My name is Nicolas Bolinaga, i created this page as an assigment for a CERTIFICATE IN FRONT-END DEVELOPMENT WITH HTML, CSS & JAVASCRIPT at the University of Washington.',
    message:'I decided to create this webpage to compile all the news for something i really like, Video Games!', 
    comment:'Hope you enjoy the page as much as i have, you can visit the source code on my github.', 
    email:'Contact me at nbolinaga17@gmail.com',
    visit: 'Visit my Github'
  }
 }
}
</script>


<style lang="scss">

  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";

  // ABOUT US ------------------------------------------------------------------------------------------------------------------------------
  .row {
    display: flex;
    align-items: center;
    background-color: $background;
    margin: 50px auto;

    .col-md,
    .col-md-5 {
      text-align: center;
      padding: 30px;

      h2 {
        color: $details;
        padding: 0 0 30px
      }

      img {
        width: 20vw;
      }

      .email {
        color: $details;
      }
    }
  }

  // GITHUB LOGO -------------------------------------------------------------------------------------------------------------------------
  .logo {
    font-size: 5rem;
    margin-top: 30px;

    &:hover {
      opacity: .6;
    }
  }

</style>

