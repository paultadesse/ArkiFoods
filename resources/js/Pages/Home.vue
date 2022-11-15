<template>
  <div class="relative background-img h-screen">
    <!-- Nav Bar -->
    <!-- <div class="bg-white py-2">
      <div class="flex justify-evenly items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div class="px-8">
          <img
            class="h-20 w-20 rounded-full mx-auto"
            src="@/../assets/logos/ARKI_AGRO_LOGO_WHITE.png"
            alt=""
          />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div> -->
    <div
      class="
        absolute
        bottom-0
        w-full
        bg-black bg-opacity-40
        text-white
        font-bold
        py-9
      "
    >
      <div class="grid grid-cols-12 gap-4 uppercase">
        <div
          class="
            col-span-6
            xl:col-span-3
            px-12
            space-y-4
            text-center
            tracking-wider
            hover:-translate-y-6
            duration-300
          "
        >
          <p class="text-xs xl:text-base">flour & spice blends</p>
          <button
            class="
              py-4
              px-6
              uppercase
              bg-[#cf7a03]
              text-white text-xs
              tracking-widest
            "
          >
            <span class="hidden xl:block">buy</span>
            <span class="block xl:hidden">+</span>
          </button>
        </div>
        <div
          class="
            col-span-6
            xl:col-span-3
            px-12
            space-y-4
            text-center
            tracking-wider
            hover:-translate-y-6
            duration-300
          "
        >
          <p class="text-xs xl:text-base">whole grains</p>
          <button
            class="
              py-4
              px-6
              uppercase
              bg-[#cf7a03]
              text-white text-xs
              tracking-widest
            "
          >
            <span class="hidden xl:block">buy</span>
            <span class="block xl:hidden">+</span>
          </button>
        </div>
        <div
          class="
            col-span-6
            xl:col-span-3
            px-12
            space-y-4
            text-center
            tracking-wider
            hover:-translate-y-6
            duration-300
          "
        >
          <p class="text-xs xl:text-base">beans & peas</p>
          <button
            class="
              py-4
              px-6
              uppercase
              bg-[#cf7a03]
              text-white text-xs
              tracking-widest
            "
          >
            <span class="hidden xl:block">buy</span>
            <span class="block xl:hidden">+</span>
          </button>
        </div>
        <div
          class="
            col-span-6
            xl:col-span-3
            px-12
            space-y-4
            text-center
            tracking-wider
            hover:-translate-y-6
            duration-300
          "
        >
          <p class="text-xs xl:text-base">special orders</p>
          <button
            class="
              py-4
              px-6
              uppercase
              bg-[#cf7a03]
              text-white text-xs
              tracking-widest
            "
          >
            <span class="hidden xl:block">buy</span>
            <span class="block xl:hidden">+</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- OUR STORY SECTION -->
  <div class="flex justify-center py-12 bg-[#372727]">
    <div class="text-center space-y-12">
      <hr class="w-24 border-4 border-[#cf7a03] mx-auto" />
      <h1 class="text-4xl text-white">Our Story</h1>
      <h2 class="max-w-3xl tracking-wider px-4 xl:px-0 text-white">
        Making food is an act of love, and fresh ingredients are the root of the
        perfect meal. We provide you spice blends, whole grains and beans that
        are as nutritious as they are flavorful. Choose Arki for food that loves
        you.
      </h2>
      <button
        class="
          px-4
          py-4
          uppercase
          tracking-widest
          border-4 border-[#cf7a03]
          text-[#cf7a03] text-sm
        "
      >
        view more
      </button>
    </div>
  </div>
  <!-- processing section -->
  <div class="grid grid-cols-12 place-items-center">
    <div class="relative col-span-12 xl:col-span-4 h-[775px] bg-black">
      <img
        class="object-cover h-full opacity-70"
        alt="process"
        src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/2.1Cleaning.JPG?v=1615922779"
      />
      <div class="text-white inset-center">
        <div class="flex flex-col items-center space-y-4">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="
              border-4 border-[#cf7a03]
              rounded-full
              h-14
              w-14
              fill-[#cf7a03]
            "
            viewBox="0 0 64 64"
          >
            <path
              d="M20.3 23.9c-5.3 5.3-5.5 13.6-.7 19.1l-3.3 3.3 1.4 1.4 3.3-3.3c2.5 2.2 5.8 3.4 9.2 3.4 3.7 0 7.3-1.5 9.9-4.1 5.1-5.1 6.8-25.3 6.9-27.6l.2-2.8-2.7.7c-2 .6-19.3 5-24.2 9.9zm16.9 17c-1.9 1.9-4.4 2.9-7.1 2.9-2.3 0-4.5-.8-6.3-2.3L35.4 30 34 28.6 22.4 40.2c-3.2-3.9-3-9.7.7-13.4 3-3 13.5-6.4 19.7-8.1-.9 8.1-2.9 19.5-5.6 22.2z"
            ></path>
          </svg>
          <p class="uppercase text-lg font-bold tracking-wider">handpicked</p>
        </div>
      </div>
    </div>
    <div class="relative col-span-12 xl:col-span-4 h-[775px] bg-black">
      <img
        class="object-cover h-full opacity-70"
        alt="process"
        src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/2.2Cleaning.JPG?v=1615922779"
      />
      <div class="text-white inset-center">
        <div class="flex flex-col items-center space-y-4">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="
              border-4 border-[#cf7a03]
              rounded-full
              h-14
              w-14
              fill-[#cf7a03]
            "
            viewBox="0 0 64 64"
          >
            <path
              d="M20.3 23.9c-5.3 5.3-5.5 13.6-.7 19.1l-3.3 3.3 1.4 1.4 3.3-3.3c2.5 2.2 5.8 3.4 9.2 3.4 3.7 0 7.3-1.5 9.9-4.1 5.1-5.1 6.8-25.3 6.9-27.6l.2-2.8-2.7.7c-2 .6-19.3 5-24.2 9.9zm16.9 17c-1.9 1.9-4.4 2.9-7.1 2.9-2.3 0-4.5-.8-6.3-2.3L35.4 30 34 28.6 22.4 40.2c-3.2-3.9-3-9.7.7-13.4 3-3 13.5-6.4 19.7-8.1-.9 8.1-2.9 19.5-5.6 22.2z"
            ></path>
          </svg>
          <p class="uppercase text-lg font-bold tracking-wider">twice washed</p>
        </div>
      </div>
    </div>
    <div class="relative col-span-12 xl:col-span-4 h-[775px] bg-black">
      <img
        class="object-cover h-full opacity-70"
        alt="process"
        src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/2.3Cleaning.JPG?v=1615922779"
      />
      <div class="text-white inset-center">
        <div class="flex flex-col items-center space-y-4">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="
              border-4 border-[#cf7a03]
              rounded-full
              h-14
              w-14
              fill-[#cf7a03]
            "
            viewBox="0 0 64 64"
          >
            <path
              d="M20.3 23.9c-5.3 5.3-5.5 13.6-.7 19.1l-3.3 3.3 1.4 1.4 3.3-3.3c2.5 2.2 5.8 3.4 9.2 3.4 3.7 0 7.3-1.5 9.9-4.1 5.1-5.1 6.8-25.3 6.9-27.6l.2-2.8-2.7.7c-2 .6-19.3 5-24.2 9.9zm16.9 17c-1.9 1.9-4.4 2.9-7.1 2.9-2.3 0-4.5-.8-6.3-2.3L35.4 30 34 28.6 22.4 40.2c-3.2-3.9-3-9.7.7-13.4 3-3 13.5-6.4 19.7-8.1-.9 8.1-2.9 19.5-5.6 22.2z"
            ></path>
          </svg>
          <p class="uppercase text-lg font-bold tracking-wider">sun dried</p>
        </div>
      </div>
    </div>
  </div>
  <!-- cleaning process -->
  <div class="flex justify-center py-12 bg-[#a66000] text-white">
    <div class="text-center space-y-12">
      <!-- <hr class="w-24 border-4 mx-auto" /> -->
      <h1 class="text-4xl">Our Cleaning Process</h1>
      <h2 class="max-w-2xl tracking-wider px-4 xl:px-0">
        Our philosophy is that clean ingredients are the essence of nutritional
        value and taste. We first pick out foreign matter by hand and then with
        a winnowing tray and sieve. We then wash our product twice to remove any
        further impurities. Once it is thoroughly clean, we lay it out to dry
        under the natural light of the sun. Our products are regularly
        laboratory-tested to assure our customers’ safety from toxins.
      </h2>
    </div>
  </div>

  <!-- our products -->
  <div class="flex justify-center py-24 bg-[#372727] text-white">
    <div class="text-center space-y-12">
      <!-- <hr class="w-24 border-4 mx-auto" /> -->
      <h1 class="text-4xl">Our Products</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans.JPG?v=1527878711"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">beans & peas</p> -->
          <p class="uppercase font-bold tracking-wider">product 1</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.3Spice_Blends_360x.JPG?v=1528041677"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">
            flours & spice blends
          </p> -->
          <p class="uppercase font-bold tracking-wider">product 2</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.2Whole_Grains_360x.JPG?v=1527878691"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">whole grains</p> -->
          <p class="uppercase font-bold tracking-wider">product 3</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/9.1.1_Mulu_Kocho_360x.JPG?v=1527969701"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">special orders</p> -->
          <p class="uppercase font-bold tracking-wider">product 4</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans.JPG?v=1527878711"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">beans & peas</p> -->
          <p class="uppercase font-bold tracking-wider">product 5</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans.JPG?v=1527878711"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">beans & peas</p> -->
          <p class="uppercase font-bold tracking-wider">product 6</p>
        </div>
        <div class="col-span-4 xl:col-span-1 space-y-3">
          <div class="overflow-hidden">
            <img
              class="object-cover h-52 w-52 hover:scale-105 duration-300"
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans.JPG?v=1527878711"
            />
          </div>
          <!-- <p class="uppercase font-bold tracking-wider">beans & peas</p> -->
          <p class="uppercase font-bold tracking-wider">product 7</p>
        </div>
      </div>
    </div>
  </div>

  <!-- featured products -->
  <div
    class="
      grid grid-cols-12
      gap-4
      place-items-center
      overflow-hidden
      bg-[#493636]
    "
  >
    <div class="col-span-12 xl:col-span-6">
      <div class="space-y-7">
        <hr class="w-24 border-4 border-[#cf7a03]" />
        <h1 class="text-4xl text-[#eae7e0]">Featured Product</h1>
        <h2 class="uppercase font-bold text-[#908980]">berbere</h2>
        <h3 class="max-w-sm tracking-wider text-justify text-[#908980]">
          The rich red of our berbere speaks to the originality of our recipe.
          Our unique blend makes it so that the berbere is first mild to the
          taste, exploding with tart flavor as it settles into your taste buds.
        </h3>
        <button
          class="
            px-4
            py-4
            uppercase
            tracking-widest
            border-4 border-[#cf7a03]
            text-[#cf7a03] text-sm
          "
        >
          shop now
        </button>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-6 w-full h-[775px] overflow-hidden">
      <img
        class="object-cover w-full"
        alt="process"
        src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/4.1FeaturedProduct.JPG?v=1615922779"
      />
    </div>
  </div>

  <!-- address -->
  <div
    class="map-img h-[600px] flex items-center justify-center xl:justify-start"
  >
    <div
      class="
        px-20
        py-7
        bg-[#372727]
        text-white
        max-w-lg
        xl:ml-28
        space-y-9
        text-center
      "
    >
      <h1 class="text-2xl">Arki Foods</h1>
      <div class="text-[#908980]">
        <p>Nifas Silk Lafto Sub-City</p>
        <p>Woreda 03</p>
        <p>House #435</p>
        <p>Addis Ababa, Ethiopia</p>
      </div>
      <div class="text-[#908980]">
        <p>Mon - Fri, 9am - 6pm</p>
        <!-- <p>Saturday, 8.30am - 2pm</p> -->
      </div>
      <div class="py-3 text-[#cf7a03]">
        <a href="#" class="underline">Get Directions</a>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "../Shared/Layout.vue";
export default {
  layout: Layout,
};
</script>

<style>
.background-img {
  /* min-height: 100vh; */
  background: url("@/../assets/images/ARKI_AGRO_RECIPE_IDEAS_PHOTOS.jpg");
  background-size: cover;
}

.map-img {
  background: url("https://cdn.shopify.com/s/files/1/0099/8847/2889/files/antique-binoculars_1296x.jpg");
  background-size: cover;
}
</style>