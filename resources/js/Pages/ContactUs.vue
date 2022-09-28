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
            bg-[#372727]
            w-full
            mt-48
            pb-12
          "
        >
          <div class="py-16 space-y-7">
            <div class="space-y-7">
              <hr class="w-24 border-4 border-[#cf7a03]" />
              <h1 class="text-5xl text-[#eae7e0]">Contact Us</h1>
              <p class="text-[#908980] max-w-2xl">
                Thank you for visiting us at Arki! You can contact us directly
                by phone at the numbers below or send your query via email to
                the following addresses:
              </p>
            </div>
            <div class="space-y-2 border-l-2 border-[#cf7a03] px-3">
              <p class="text-[#fff2cc] font-bold text-lg tracking-wide">
                Store phone numbers
              </p>
              <p class="text-[#908980] font-bold text-lg">+251.923.214.261</p>
              <p class="text-[#908980] font-bold text-lg">+251.931.579.277</p>
              <p class="text-[#fff2cc] font-bold text-lg tracking-wide">Operations & Product Development</p>
              <p class="text-[#908980] font-bold text-lg">
                Tejnesh “Emmodish” Benti
              </p>
              <p class="text-[#908980] font-bold text-lg">
                tejnesh@arkiagro.com
              </p>
              <p class="text-[#fff2cc] font-bold text-lg tracking-wide">Marketing & Sales</p>
              <p class="text-[#908980] font-bold text-lg">Tsegnesh Tsegaye</p>
              <p class="text-[#908980] font-bold text-lg">
                tsegnesh@arkiagro.com
              </p>
              <p class="text-[#fff2cc] font-bold text-lg tracking-wide">Export Queries</p>
              <p class="text-[#908980] font-bold text-lg">
                exports@arkiagro.com
              </p>
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
  background-image: url("https://cdn.shopify.com/s/files/1/0099/8847/2889/articles/5.4OurStory-Header.JPG?v=1528044533");
  background-size: cover;
}
</style>