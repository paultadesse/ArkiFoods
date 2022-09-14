<template>
  <div class="px-44 py-24">
    <h1 class="py-12 tracking-wider text-2xl font-bold">Flours & Spice Blends</h1>
    <div class="grid grid-cols-8 gap-8">
      <div
        class="
          col-span-2
          border border-gray-50
          shadow
          p-7
          hover:bg-gray-50
          rounded-3xl
          cursor-pointer
        "
        v-for="i in 8"
        :key="i"
      >
        <img
          class="rounded-full h-56 w-56 mx-auto object-cover hover:rounded-2xl duration-700"
          src="https://www.kubatspices.com/wp-content/uploads/2020/10/Red-Hot-Pepper-Powder-1-600x600.jpg"
          alt=""
        />
        <div class="space-y-4 pt-5">
          <div class="flex space-x-2 justify-between px-8 items-center">
            <p class="text-xl font-bold tracking-wider">Berbere</p>
            <div class="flex space-x-2 bg-gray-50 border-gray-200 max-w-min py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#123456"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                />
              </svg>

              <p class="font-light">{{ i }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#123456"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <hr class="border-gray-200 " />
          <div class="flex items-center justify-between  p-">
            <div class="space-y-2">
              <p class="text-gray-400 tracking-wide text-sm">Price</p>
              <hr>
              <p class="text-xl tracking-wider font-bold">
                {{70 + i * 7}} <span class="text-xs text-gray-500">Birr</span>
              </p>
            </div>
            <div class="bg-[#123456] p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>