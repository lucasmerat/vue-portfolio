<template>
  <div>
    <Hero>
      <div class="relative z-20 w-full ml-6 font-bold text-left md:ml-24 text-7xl md:text-8xl text-accent">
        <h1><span class="block md:inline">Hi,</span> I'm Lucas</h1>
        <h2 class="mt-8 text-2xl font-light">A web developer</h2>
      </div>
    </Hero>
    <div id="main" class="w-full px-6 pt-64 pb-16 md:w-2/3 md:ml-16">
      <img class="border-4 rounded-full shadow-lg h-52 border-brand-light" src="../assets/images/headshot.jpg" alt="">
      <h4 class="pt-4 text-5xl font-bold text-accent">I'm a full stack software developer based in Austin, TX</h4>
      <p class="mt-6 text-2xl font-light text-accent">
        Currently, I'm working as a Software Engineer II at 
        <a class="underline text-brand-light hover:text-brand-dark" href="https://www.skillsengine.com">SkillsEngine</a> - we help colleges better
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
    -moz-animation: bounce 1s 12;
    -webkit-animation: bounce 1s 12;
    animation: bounce 1s 12;
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