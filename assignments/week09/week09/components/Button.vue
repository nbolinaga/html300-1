<template>
<!-- go back to top button / runs handleClick () when.... clicked -->
  <button  @click="handleClick" id="myBtn" title="Go to top" data-toggle="tooltip" data-placement="left"><i class="fas fa-arrow-circle-up"></i></button>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    scrollFunction() {
    // if page is scroll down more than 20px then sets "myBtn" to display:block (showing)
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
    // else sets "myBtn" to display:none (not showing)
        } else {
          document.getElementById("myBtn").style.display = "none";
        }
      },
    // when function is called go back to top
      handleClick() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    },
    // function listens for the scoll event 
    beforeMount() {
        window.addEventListener('scroll', this.scrollFunction);
      },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollFunction);
      }
    }
</script>

<style lang="scss">
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

#myBtn {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: $details;
  color: $background;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  z-index: 999;


  @media (max-width: 768px) {
    font-size: .6rem;
  }

  &:hover {
    color: $text;
  }
}
</style>
