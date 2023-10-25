<template>
  <div class="bg-green-50 sm:py-16 py-12">
    <div class="container">
      <!-- tab section -->
      <nav
        class="relative z-0 sm:flex grid grid-cols-2 gap-4 border-0 rounded-xl overflow-hidden sm:px-16"
        aria-label="Tabs"
        role="tablist">

        <button
          type="button"
          class="hs-tab-active:border-green-100 hs-tab-active:text-white text-white sm:mr-4 rounded-xl dark:hs-tab-active:text-white dark:hs-tab-active:border-green-100 hover:border-green-100 relative min-w-0 flex-1 bg-green-100 border-2 py-4 px-4 text-green-white hover:text-white sm:text-xl text-base font-poppins font-medium text-center overflow-hidden hover:bg-green-200 focus:z-10 dark:bg-gray-800 dark:border-l-white dark:border-b-white dark:hover:bg-white dark:hover:text-gray-400 active"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab">
          Courses
        </button>
        <button
          type="button"
          class="hs-tab-active:border-green-100 hs-tab-active:text-white text-white sm:mr-4 rounded-xl dark:hs-tab-active:text-white dark:hs-tab-active:border-green-100 hover:border-green-100 relative min-w-0 flex-1 bg-green-100 border-2 py-4 px-4 text-green-white hover:text-white sm:text-xl text-base font-poppins font-medium text-center overflow-hidden hover:bg-green-200 focus:z-10 dark:bg-gray-800 dark:border-l-white dark:border-b-white dark:hover:bg-white dark:hover:text-gray-300"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab">
          Exams

        </button>
        <button
          type="button"
          class="hs-tab-active:border-green-100 hs-tab-active:text-white text-white sm:mr-4 rounded-xl dark:hs-tab-active:text-white dark:hs-tab-active:border-green-100 hover:border-green-100 relative min-w-0 flex-1 bg-green-100 border-2 py-4 px-4 text-green-white hover:text-white sm:text-xl text-base font-poppins font-medium text-center overflow-hidden hover:bg-green-200 focus:z-10 dark:bg-gray-800 dark:border-l-white dark:border-b-white dark:hover:bg-white dark:hover:text-gray-300"
          id="bar-with-underline-item-3"
          data-hs-tab="#bar-with-underline-3"
          aria-controls="bar-with-underline-3"
          role="tab">
          Support

        </button>
        <button
          type="button"
          class="hs-tab-active:border-green-100 hs-tab-active:text-white text-white rounded-xl dark:hs-tab-active:text-white dark:hs-tab-active:border-green-100 hover:border-green-100 relative min-w-0 flex-1 bg-green-100 border-2 py-4 px-4 text-green-white hover:text-white sm:text-xl text-base font-poppins font-medium text-center overflow-hidden hover:bg-green-200 focus:z-10 dark:bg-gray-800 dark:border-l-white dark:border-b-white dark:hover:bg-white dark:hover:text-gray-300"
          id="bar-with-underline-item-4"
          data-hs-tab="#bar-with-underline-4"
          aria-controls="bar-with-underline-4"
          role="tab"
        >
          Other
        </button>
      </nav>

      <!-- end -->

      <div class="sm:mt-32 mt-28 px-16">
    
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1">   <!--accordions of courses -->

          <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
              <div
                class="sm:text-5xl text-4xl font-normal font-poppins absolute mt-4 ml-[-48px]"
              >
                1
              </div>
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-l-4 border-green-200 rounded-sm dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white group"
                data-accordion-target="#accordion-open-body-1"
                aria-expanded="true"
                aria-controls="accordion-open-body-1"
              >
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-green-100"
                  >
                    Q.
                  </div>
                  <div
                    class="sm:text-2xl text-lg font-medium font-poppins text-black-200 px-4"
                  >
                    Which course should I study?
                  </div>
                </div>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0 text-green-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-open-body-1"
              class="hidden bg-white mb-8 rounded-sm"
              aria-labelledby="accordion-open-heading-1"
            >
              <div class="p-5 border-0">
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-black-200"
                  >
                    A.
                  </div>
                  <p
                    class="mb-2 sm:text-xl font-normal font-poppins text-green-400 px-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <h2 id="accordion-open-heading-2">
              <div
                class="sm:text-5xl text-4xl font-normal font-poppins absolute mt-4 ml-[-48px]"
              >
                2
              </div>
              <button
                type="button"
                class="mt-8 flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-l-4 border-green-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white rounded-sm"
                data-accordion-target="#accordion-open-body-2"
                aria-expanded="false"
                aria-controls="accordion-open-body-2"
              >
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-green-100"
                  >
                    Q.
                  </div>
                  <div
                    class="sm:text-2xl text-lg font-medium font-poppins text-black-200 px-4"
                  >
                    Which course should I study?
                  </div>
                </div>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0 text-green-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-open-body-2"
              class="hidden bg-white mb-8 rounded-sm"
              aria-labelledby="accordion-open-heading-2"
            >
              <div class="p-5 border-0">
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-black-200"
                  >
                    A.
                  </div>
                  <p
                    class="mb-2 sm:text-xl font-normal font-poppins text-green-400 px-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <h2 id="accordion-open-heading-3">
              <div
                class="sm:text-5xl text-4xl font-normal font-poppins absolute mt-4 ml-[-48px]"
              >
                3
              </div>
              <button
                type="button"
                class="mt-8 flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-l-4 border-green-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white rounded-sm"
                data-accordion-target="#accordion-open-body-3"
                aria-expanded="false"
                aria-controls="accordion-open-body-3"
              >
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-green-100"
                  >
                    Q.
                  </div>
                  <div
                    class="sm:text-2xl text-lg font-medium font-poppins text-black-200 px-4"
                  >
                    Which course should I study?
                  </div>
                </div>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0 text-green-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-open-body-3"
              class="hidden bg-white mb-8 rounded-sm"
              aria-labelledby="accordion-open-heading-3"
            >
              <div class="p-5 border-0">
                <div class="flex items-baseline">
                  <div
                    class="sm:text-4xl text-2xl font-poppins font-medium text-black-200"
                  >
                    A.
                  </div>
                  <p
                    class="mb-2 sm:text-xl font-normal font-poppins text-green-400 px-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bar-with-underline-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2">   <!--accordions of Exams -->

         
        </div>
        <div
          id="bar-with-underline-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3" > <!--accordions of Support -->
          
        </div>
        <div
          id="bar-with-underline-4"
          class="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"> <!--accordions of Other -->
          
        </div>
      </div>
    </div>
  </div>
</template>

 

