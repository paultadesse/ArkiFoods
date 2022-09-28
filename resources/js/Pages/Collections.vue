<template>
  <div class="bg-[#372727]">
    <div class="py-12">
      <h1 class="text-center text-5xl text-[#eae7e0]">All Collections</h1>
    </div>
    <div class="flex justify-center items-center pb-12">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 xl:col-span-6 ">
          <div class="overflow-hidden">
            <img
              class="
                object-cover
                h-[320px]
                w-[480px]
                hover:scale-105
                duration-300
              "
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.3Spice_Blends_460x.JPG?v=1528041677"
            />
          </div>
          <div class="flex justify-center bg-black p-8">
            <p class="text-3xl tracking-wider text-[#eae7e0]">Flours & Spice Blends</p>
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6 ">
          <div class="overflow-hidden">
            <img
              class="
                object-cover
                h-[320px]
                w-[480px]
                hover:scale-105
                duration-300
              "
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.4Peas_Beans.JPG?v=1527878711"
            />
          </div>
          <div class="flex justify-center bg-black p-8">
            <p class="text-3xl tracking-wider text-[#eae7e0]">Beans & Peas</p>
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6 ">
          <div class="overflow-hidden">
            <img
              class="
                object-cover
                h-[320px]
                w-[480px]
                hover:scale-105
                duration-300
              "
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.2Whole_Grains_460x.JPG?v=1527878691"
            />
          </div>
          <div class="flex justify-center bg-black p-8">
            <p class="text-3xl tracking-wider text-[#eae7e0]">Whole Grains</p>
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6 ">
          <div class="overflow-hidden">
            <img
              class="
                object-cover
                h-[320px]
                w-[480px]
                hover:scale-105
                duration-300
              "
              alt="process"
              src="https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/9.1.1_Mulu_Kocho_460x.JPG?v=1527969701"
            />
          </div>
          <div class="flex justify-center bg-black p-8">
            <p class="text-3xl tracking-wider text-[#eae7e0]">Special Orders</p>
          </div>
        </div>
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
</style>