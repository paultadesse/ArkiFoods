<template>
  <div class="background-img h-full w-full bg-cover bg-fixed">
    <div class="pt-16 xl:pt-96">
      <div class="h-1/3 flex justify-center items-end">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            space-y-4
            text-center
            bg-[#372727]
            w-full
            mt-48
            pb-12
          "
        >
          <div class="py-12">
            <h1 class="text-[#eae7e0] text-5xl">Flours & Spice Blends</h1>
          </div>
          <div class="flex xl:flex-row flex-col space-y-2 xl:space-y-0 xl:space-x-4">
            <select
              name=""
              id=""
              class="w-64 p-6 font-bold bg-[#2d1e1e] text-[#908980]"
            >
              <option value="hello">Filter</option>
              <option value="hello">Filter</option>
              <option value="hello">Filter</option>
              <option value="hello">Filter</option>
            </select>
            <select
              name=""
              id=""
              class="w-64 p-6 font-bold bg-[#2d1e1e] text-[#908980]"
            >
              <option value="hello">Best Selling</option>
              <option value="hello">Best Selling</option>
              <option value="hello">Best Selling</option>
              <option value="hello">Best Selling</option>
            </select>
          </div>
          <div class="py-12">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 xl:col-span-6 bg-black p-16">
                <div class="overflow-hidden">
                  <img
                    class="
                      object-cover mx-auto
                      h-[420px]
                      w-[280px]
                      hover:scale-105
                      duration-300
                    "
                    alt="process"
                    src="https://cdn.shopify.com/s/files/1/0099/8847/2889/products/6.7.1_Berbere_540x.JPG?v=1528045470"
                  />
                </div>
                <div class="flex flex-col justify-center bg-black pt-8 space-y-3">
                  <p class="text-2xl tracking-wider text-[#eae7e0]">
                    Berbere
                  </p>
                  <p class="text-[#eae7e0] text-xs">From Birr 70</p>
                </div>
              </div>
              <div class="col-span-12 xl:col-span-6 bg-black p-16">
                <div class="overflow-hidden">
                  <img
                    class="
                      object-cover mx-auto
                      h-[420px]
                      w-[280px]
                      hover:scale-105
                      duration-300
                    "
                    alt="process"
                    src="https://cdn.shopify.com/s/files/1/0099/8847/2889/products/6.8.1_Mitmita_540x.JPG?v=1528045511"
                  />
                </div>
                <div class="flex flex-col justify-center bg-black pt-8 space-y-3">
                  <p class="text-2xl tracking-wider text-[#eae7e0]">
                    Mitmita
                  </p>
                  <p class="text-[#eae7e0] text-xs">From Birr 100</p>
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
import Layout from "../Shared/Layout.vue";
export default {
  layout: Layout,
};
</script>

<style>
.background-img {
  /* min-height: 100vh; */
  background-image: url("https://cdn.shopify.com/s/files/1/0099/8847/2889/collections/3.3Spice_Blends.JPG?v=1528041677");
  background-size: cover;
}
</style>