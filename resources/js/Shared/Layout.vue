<template>
  <section>
    <!-- Nav Bar -->
    <div class="bg-white py-2">
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
    </div>
  </section>

  <section>
    <slot />
  </section>

  <section>
    <!-- footer goes here -->
    <div class="p-24 flex justify-center bg-[#3c3433]">
      <div class="">
        <div class="grid grid-cols-12 gap-4 xl:gap-x-20 text-[#c5c5c5]">
          <div
            class="
              col-span-6
              xl:col-span-3
              space-y-3
              uppercase
              text-sm tracking-wider
              font-bold
            "
          >
            <p>Home</p>
            <p>story</p>
            <p>products</p>
            <p>lacations</p>
            <p>contact</p>
          </div>
          <div
            class="
              col-span-6
              xl:col-span-3
              space-y-3
              uppercase
              text-sm tracking-wider
              font-bold
            "
          >
            <p>Search</p>
            <p>privacy</p>
            <p>terms</p>
            <p>faqs</p>
          </div>
          <div class="col-span-12 xl:col-span-6 w-full space-y-4">
            <h1 class="uppercase text-xl font-bold">Sign up for updates</h1>
            <input
              type="text"
              placeholder="My email address"
              class="
                p-4
                w-[90%]
                text-[#908980] outline-none
                border-white
                bg-[#3c3433]
                border-b-2
              "
            />
            <button class="uppercase text-sm text-white font-bold">Ok</button>
          </div>
          <div class="col-span-12 w-full pt-16">
            <div class="grid grid-cols-12 space-y-4 xl:space-y-0">
              <div class="col-span-12 xl:col-span-4 flex space-x-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  class="h-6 w-6 fill-[#c5c5c5]"
                  viewBox="0 0 8.4 20.6"
                >
                  <path
                    d="M8.4 6H5.6V4.1c0-.7.5-.9.8-.9h2V0H5.6C2.5 0 1.8 2.4 1.8 3.9V6H0v3.3h1.8v9.3h3.8V9.3h2.5L8.4 6z"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  class="h-6 w-6 fill-[#c5c5c5]"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"
                  ></path>
                </svg>
              </div>
              <div class="col-span-12 xl:col-span-8">
                <p class="text-sm">© {{ year }} ARKIAGRO All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<script setup>
import { computed } from "vue";
const year = computed(() => {
  return new Date().getFullYear();
});
</script>

<style>
</style>