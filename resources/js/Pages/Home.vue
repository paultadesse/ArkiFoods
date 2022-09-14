<template>
  <section class="landing">
    <!-- <h1 id="logo">Arki</h1>
    <ul class="nav-links">
      <li>Home</li>
      <li>contact</li>
      <li>about</li>
    </ul> -->
    <div class="big-text space-y-7 text-center">
      <h2 class="text-7xl font-bold uppercase tracking-wider">Arki Agro</h2>
      <div class="flex justify-center items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
          />
        </svg>

        <p class="font-bold tracking-wider text-sm">Food That Loves You</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
          />
        </svg>
      </div>
      <p
        class="
          max-w-xl
          text-justify
          bg-white bg-opacity-25
          px-8
          py-24
          tracking-wider
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
    <div class="intro-text text-7xl uppercase font-bold tracking-wide">
      <h1 class="hide">
        <span class="text">Arki agro food</span>
      </h1>
      <h1 class="hide">
        <span class="text">that loves</span>
      </h1>
      <h1 class="hide">
        <span class="text"
          >you
          
          &hearts;
        </span>
      </h1>
    </div>
  </div>

  <div class="slider"></div>
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
  background: url("https://images.pexels.com/photos/4199064/pexels-photo-4199064.jpeg");
  /* background: url("https://static01.nyt.com/images/2020/03/17/well/askwell-wholegrains/askwell-wholegrains-videoSixteenByNineJumbo1600.jpg"); */
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

  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
});
</script>