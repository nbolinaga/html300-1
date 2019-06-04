<template>
<!-- go back to top button -->
  <button  @click="handleClick" id="myBtn" title="Go to top" data-toggle="tooltip" data-placement="left"><i class="fas fa-arrow-circle-up"></i></button>
</template>

<script>
// HAD TO USE NORMAL JS SINCE I COULDNT FIGURE OUT HOW TO DO THIS ON VUE

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
export default {
  methods: {
    handleClick: function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  }
}

</script>

<style lang="scss">
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";

#myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 15px;
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
