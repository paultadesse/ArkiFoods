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
          "
        >
          <div class="text-left p-8">
            <div class="flex-shrink-0 space-y-12">
              <hr class="w-24 border-4 border-[#cf7a03]" />
              <h1 class="text-5xl text-[#eae7e0]">Our Story</h1>
              <h2 class="text-3xl text-[#fff2cc]">Our Founder</h2>

              <img
                src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/5.2EmmodishHeadshot_large.JPG?v=1527866265"
                alt=""
              />
            </div>
            <div class="py-2">
              <p
                class="
                  max-w-xl
                  font-light
                  text-[#908980]
                  tracking-wider
                  text-lg text-justify
                "
              >
                EmmodishIn the 1970s, Tejnesh (Emmodish) Benti was the head
                researcher in the Experimental Kitchen department of the
                Ethiopian Nutrition Institute. Her team’s lab work refined
                traditional recipes, tweaking ingredients and cooking practices
                to naturally enhance the nutritional value of Ethiopian staple
                foods. The Institute used these findings as educational
                resources for its public initiatives, including maternal health
                and school feeding programs. Emmodish took her expertise into
                her own kitchen when the Institute was dissolved in the early
                1990s. This was when her passion for Ethiopian cuisine really
                blossomed. She created her own spice blends that she sifted into
                staple dishes, making her already nutritiously rich meals sing
                with flavor.
              </p>
            </div>
          </div>

          <div class="text-left p-8">
            <div>
              <h2 class="text-3xl text-[#fff2cc]">Our Company</h2>
              <p
                class="
                  max-w-xl
                  py-4
                  font-light
                  text-[#908980]
                  tracking-wider
                  text-lg text-justify
                "
              >
                Before she founded Arki, Emmodish began to notice that as Addis
                Ababa’s population grew, fewer and fewer people had the open air
                and space necessary to prepare traditional flours & spice blends
                in their own homes. Increasingly, she would get requests from
                extended family to prepare their year’s provision of berbere and
                shiro. Her recipes had always been popular but it was then that
                demand for them grew. The idea for Arki sparked then and
                developed steadily, along with Emmodish’s excitement that she
                could share her four decades in nutrition science and original
                recipes with a wider audience. It was in this way that Emmodish
                founded Arki as a labor of love, her offering to everyone who
                wants to cook clean and eat meals that sing with flavor.
              </p>
            </div>
            <div>
              <img
                class="xl:h-96"
                src="https://cdn.shopify.com/s/files/1/0099/8847/2889/files/5.4OurStory-Header_1024x1024.JPG?v=1527866845"
                alt=""
              />
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
  background-image: url("@/../assets/images/ARKI_AGRO_RECIPE_IDEAS_PHOTOS.jpg");
  background-size: cover;
}
</style>