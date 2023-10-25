<template>
    <!-- right side image -->
  <div class="relative mt-6">
    <img
      src="../../public/img/treeRight.png"
      alt="treeImg"
      srcset=""
      class="hidden md:block absolute right-0"
    />
  </div>
  <div class="container sm:py-32 sm:pb-28 pb-20">
    <div class="grid grid-row">
      <div>
        <!-- Heading -->
        <div
          class="text-green-100 sm:text-4xl text-3xl leading-6 font-medium sm:text-left text-center font-poppins"
        >
          FAQ
        </div>
        <!-- sub heading -->
        <div
          class="text-black-100 sm:text-6xl text-5xl font-semibold pt-8 max-w-[15ch] sm:text-left text-center font-poppins"
        >
          What can we help you find ?
        </div>
        <!-- search bar -->
        <div class="relative mt-10 lg:w-4/12 w-9/12 mx-auto sm:ml-0">
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              class="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 sm:text-xl text-base font-medium text-ash-100 font-poppins border border-white shadow-2xl rounded-lg bg-white focus:ring-green-100 focus:border-green-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search a question"
            required
          />
        </div>
      </div>
      <div>
        <img src="../../public/img/Exclude.png" alt="" />
      </div>
    </div>
  </div>
</template>