<template>
  <section class="landing">
    <!-- <h1 id="logo">Arki</h1>
    <ul class="nav-links">
      <li>Home</li>
      <li>contact</li>
      <li>about</li>
    </ul> -->
    <div class="big-text space-y- text-center bg-white">
      <!-- <h2 class="text-7xl font-bold uppercase tracking-wider text-white">Arki Agro</h2> -->
      <img
        class="h-96 w-96 rounded-full mx-auto"
        src="@/../assets/logos/ARKI_AGRO_LOGO_WHITE.png"
        alt=""
      />
      <div class="flex justify-center items-center bg-black space-x-2 py-2">
        <p class="font-bold tracking-wider text-sm text-white">
          Food That Loves You
        </p>
      </div>
      <p
        class="
          max-w-lg
          text-justify
          bg-black
          text-lg
          px-8
          text-white
          py-4
          tracking-wide
          foant-bold
        "
      >
        Making food is an act of love, and fresh ingredients are the root of the
        perfect meal. We provide you spice blends, whole grains and beans that
        are as nutritious as they are flavorful. Choose Arki for food that loves
        you.
      </p>
    </div>
  </section>

  <div class="intro flex justify-center items-center">
    <img
      class="h-96 w-96 rounded-full"
      src="@/../assets/logos/ARKI_AGRO_LOGO_WHITE.png"
      alt=""
    />
    <div class="intro-text text-7xl uppercase font-bold tracking-wide">
      <h1 class="hide">
        <span class="text">Arki agro food</span>
      </h1>
      <h1 class="hide">
        <span class="text">that loves</span>
      </h1>
      <h1 class="hide">
        <span class="text">you. </span>
      </h1>
    </div>
  </div>

  <div class="slider flex min-h-screen justify-center items-center">
    <img
      class="h-96 w-96 rounded-full"
      src="@/../assets/logos/ARKI_AGRO_LOGO_WHITE.png"
      alt=""
    />
  </div>
  <!-- <div>another section</div> -->
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing {
  min-height: 100vh;
  /* background: url("https://images.pexels.com/photos/4199064/pexels-photo-4199064.jpeg"); */
  background: url("@/../assets/images/ARKI_AGRO_SLIDESHOW_PHOTOS_6.jpg");
  background-size: cover;
}

.big-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.intro {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
}
.slider {
  position: fixed;
  top: 0;
  left: 0;
  /* background: rgb(251, 251, 251); */
  background: #0f2c48;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
}

.intro-text {
  color: #123456;
}

.hide {
  background: #fff;
  overflow: hidden;
}

.hide span {
  transform: translateY(100%);
  display: inline-block;
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power1.out" },
  });

  tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.5 });

  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });

  tl.to(".intro", { y: "-100%", duration: 1.5 }, "-=1");

  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
});
</script>