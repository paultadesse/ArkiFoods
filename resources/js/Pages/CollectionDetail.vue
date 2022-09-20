<template>
  <div class="background-img text-wshite">
    <div class="px-44 py-24">
      <div class="bg-white bg-opacity-90 flex justify-between items-center">
        <h1 class="py-12 px-7 tracking-wider text-2xl font-bold">
          Flours & Spice Blends
        </h1>
        <div>
          <img
            class="h-40 w-40 rounsded-full mx-auto"
            src="@/../assets/logos/ARKI_AGRO_LOGO_BLACK.png"
            alt=""
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 py-2">
        <div
          class="col-span-3 shadow hover:bg-gray-50 cursor-pointer"
          v-for="i in 8"
          :key="i"
        >
          <div
            class="
              relative
              pb-full
              bg-white bg-opacity-70
              xs:h-auto xs:square
              animate__animated animate__fadeIn animate_delay-2s
            "
          >
            <img
              class="absolute h-full w-full rounsded-full object-cover p-12"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/products/8.4.1_Fendisha_2a8c76f0-db15-4855-b9d1-88e6b77e0616_540x.JPG?v=1528046761"
              alt="artist photo"
              srcset=""
            />
          </div>
          <div
            class="
              bg-white
              border-t
              p-12
              py-2
              text-sm
              tracking-widest
              animate__animated animate__fadeInLeft
            "
          >
            <div class="flex justify-between items-center py-4">
              <div class="space-y-2">
                <h1 class="text-xl font-bold">Fendisha</h1>
                <div class="">
                  <!-- <p class="text-gray-400 tracking-wide text-sm">Price</p> -->
                  <!-- <hr /> -->
                  <p class="text-xl tracking-wider font-bold">
                    {{ 70 + i * 7 }}
                    <span class="text-xs text-gray-500">Birr</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="bg-[#12/3456] ps-2 rounded">
                  <button
                    class="
                      bg-black
                      px-4
                      py-2
                      text-white
                      rounded
                      text-xs
                      tracking-wide
                    "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background-img {
  min-height: 100vh;
  background: url("@/../assets/images/ARKI_AGRO_FEATURED_PRODUCTS_PHOTOS_2.jpg");
  background-size: cover;
}
</style>