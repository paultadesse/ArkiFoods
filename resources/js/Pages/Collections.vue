<template>
  <div class="background-img text-wshite">
    <div class="px-44 py-24 bg-bslack bg-opascity-75">
      <div class="grid grid-cols-12 gasp-4 place-items-center">
        <div
          class="
            col-span-12
            flex
            items-center
            justify-between
            p-24
            bg-white
            w-full
          "
        >
          <p class="uppercase tracking-wider text-3xl font-bold">
            All collections
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="
              w-10
              h-10
              hover:scale-110
              delay-500
              duration-150
              cursor-pointer
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
        <div class="col-span-6 w-full h-full bg-white p-12 bg-opacity-75">
          <img
            class="
              shadow-2xl
              mx-auto
              h-80
              w-80
              object-cover
              hover:scale-110
              delay-75
              duration-700
              rounded-full
            "
            src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.3Spice_Blends_460x.JPG?v=1528041677"
            alt=""
          />
        </div>
        <div class="bg-white col-span-6 w-full h-full flex items-center px-7">
          <div class="space-y-4">
            <p
              class="
                text-4xl
                font-semibold
                tracking-wider
                first-letter:text-6xl
              "
            >
              Flours and spice blends
            </p>
            <p class="text-justify font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cum tempora! Vitae natus, mollitia quae sed cumque repellendus quo
              facere nihil voluptatem magnam quam ratione, ipsum assumenda
              corrupti enim velit?
            </p>
          </div>
        </div>
        <div
          class="
            bg-white
            col-span-6
            px-7
            w-full
            h-full
            flex
            items-center
            justify-end
          "
        >
          <div class="space-y-7">
            <p
              class="
                text-4xl text-end
                font-semibold
                tracking-wider
                first-letter:text-6xl
              "
            >
              Beans & peas
            </p>
            <p class="text-justify font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cum tempora! Vitae natus, mollitia quae sed cumque repellendus quo
              facere nihil voluptatem magnam quam ratione, ipsum assumenda
              corrupti enim velit?
            </p>
          </div>
        </div>

        <div
          class="
            col-span-6
            bg-white bg-opacity-75
            w-full
            h-full
            p-12
            bg-[#123s456]
          "
        >
          <img
            class="
              shadow-2xl
              mx-auto
              h-80
              w-80
              object-cover
              hover:scale-110
              delay-75
              duration-700
              rounded-full
            "
            src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans_460x.JPG?v=1527878711"
            alt=""
          />
        </div>
        <div class="col-span-6 p-12 bg-opacity-75 bg-white w-full h-full">
          <img
            class="
              shadow-2xl
              mx-auto
              h-80
              w-80
              object-cover
              hover:scale-110
              delay-75
              duration-700
              rounded-full
            "
            src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.2Whole_Grains_460x.JPG?v=1527878691"
            alt=""
          />
        </div>
        <div class="col-span-6 bg-white w-full h-full px-7 flex items-center">
          <div class="space-y-7">
            <p
              class="
                text-4xl
                font-semibold
                tracking-wider
                first-letter:text-6xl
              "
            >
              whole grains
            </p>
            <p class="text-justify font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cum tempora! Vitae natus, mollitia quae sed cumque repellendus quo
              facere nihil voluptatem magnam quam ratione, ipsum assumenda
              corrupti enim velit?
            </p>
          </div>
        </div>
        <div
          class="
            col-span-6
            bg-white
            w-full
            px-7
            h-full
            flex
            items-center
            justify-end
          "
        >
          <div class="space-y-7">
            <p
              class="
                text-4xl text-end
                font-semibold
                tracking-wider
                first-letter:text-6xl
              "
            >
              special orders
            </p>
            <p class="text-justify font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              cum tempora! Vitae natus, mollitia quae sed cumque repellendus quo
              facere nihil voluptatem magnam quam ratione, ipsum assumenda
              corrupti enim velit?
            </p>
          </div>
        </div>
        <div
          class="
            col-span-6
            bg-white bg-opacity-75
            h-full
            w-full
            p-12
            bg-[#123s456]
          "
        >
          <img
            class="
              shadow-2xl
              mx-auto
              h-80
              w-80
              object-cover
              hover:scale-110
              delay-75
              duration-700
              rounded-full
            "
            src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/9.1.1_Mulu_Kocho_460x.JPG?v=1527969701"
            alt=""
          />
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
  background: url("@/../assets/images/ARKI_AGRO_RECIPE_IDEAS_PHOTOS.jpg");
  background-size: cover;
}
</style>