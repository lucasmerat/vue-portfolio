<template>
  <div>
    <Hero link="#bio" title="Hi, I'm Lucas" />
    <div id="bio" class="flex flex-col items-center justify-center py-20">
      <img class="border-4 rounded-full shadow-lg h-52 border-brand-light" src="../assets/images/headshot.jpg" alt="">
      <p class="mx-4 mt-6 text-center md:mx-40">
        I'm a full-stack software engineer based in Austin, TX. Currently, I'm working as a Software Engineer II at 
        <a class="underline text-brand-light hover:text-brand-dark" href="www.skillsengine.com">SkillsEngine</a> - we help colleges better
        align their curriculum to the job market. I've always been passionate about how software can create opportunities and improve
        outcomes in education and beyond. As a developer, I strive to always keep the user and product in mind, while writing efficient and effective code. It's my mission
        to continue building functional, beautiful applications that people love to use.
      </p>
    </div>
  </div>
  
</template>

<script>
import Hero from '../components/Hero';

export default {
  name: "Home",
  components: {
    Hero
  }
};
</script>


<style>
  html {
    scroll-behavior: smooth;
  }
  .top-section {
    background: url(../assets/images/sky.jpg) 50% 0 no-repeat fixed;
    background-size: cover;
    height: 100vh;
  }
  .top-section::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .wave {
    animation-delay: 1s;
    animation-iteration-count: 3;
    -webkit-animation-name: wiggle;
    -ms-animation-name: wiggle;
    -ms-animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-iteration-count: 3;
    -ms-animation-iteration-count: 3;
    -webkit-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
  }

  @-webkit-keyframes wiggle {
    0% {
      -webkit-transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(-10deg);
    }
    50% {
      -webkit-transform: rotate(20deg);
    }
    75% {
      -webkit-transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  .bounce {
    -moz-animation: bounce 2s 4;
    -webkit-animation: bounce 2s 4;
    animation: bounce 2s 4;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
</style>