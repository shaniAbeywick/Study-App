<script setup>
import { ref } from "vue";

const selectedFileName = ref("");

const handleFileUpload = (event) => {  // File upload button
  const file = event.target.files[0];
  selectedFileName.value = file.name; // Set the selected file name
};
</script>



<template>
  <div class="grid sm:grid-cols-2 grid-cols-1">
    <div class="bg-green-500 sm:overflow-y-auto sm:max-h-screen"> <!--  left side of form section -->
      <img
        src="../../public/img/girl_with _tree.png"
        alt="girl_with_tree"
        class="mx-auto"
      />
      <div class="grid sm:justify-items-center px-4">
        <div
          class="sm:text-4xl text-2xl text-green-200 font-semibold font-poppins mt-16 max-w-[23ch]"
        >
          Join a team of valued teaching professionals
        </div>
        <div
          class="sm:text-lg text-sm font-normal font-poppins sm:mt-16 mt-8 max-w-[48ch]"
        >
          Our tutors always go the extra mile because we provide a great
          environment and encourage a more personal approach. Get the chance to
          pass on your passion and knowledge, and you could inspire a new
          generation of specialists.
        </div>
        <div
          class="sm:text-lg text-sm font-normal font-poppins  sm:mt-12 mt-8 mb-8 sm:mb-0 max-w-[48ch]"
        >
          We work in partnership with a team of highly skilled and experienced
          instructors, and you could be one of them. Our students want to learn
          from the best, so if you have a skill, specialist knowledge, are a
          teacher, or simply want to learn more then get in contact with us
          today. You'll get experience developing courses, working with
          students, and filming tutorials. We make teaching fun, modern, and
          innovative, so join the team today.
        </div>
      </div>
   </div>    
    <div class="bg-white sm:sticky sm:top-0 sm:right-0 lg:px-20 mt-20 sm:mt-0"> <!--  form section -->  
      <div class="container">
        <form>
          <div class="grid md:grid-cols-2 grid-col-1 gap-8">
            <div class="sm:mb-6">
              <label
                for="FName"
                class="block mb-2 lg:text-lg text-sm font-poppins font-normal text-green-400 dark:text-white"
                >First Name</label
              >
              <input
                type="text"
                id="FName"
                class="shadow-sm bg-white border border-gray-200 text-black-200 lg:text-base text-sm font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-ash-400 placeholder-ash-400 dark:text-white dark:shadow-sm-light"
                placeholder="Enter your first name"
                required
  
              />
            </div> <!--  First name -->
            <div class="mb-6">
              <label
                for="LName"
                class="block mb-2 lg:text-lg text-sm font-poppins font-normal text-green-400 dark:text-white"
                >Last Name</label
              >
              <input
                type="text"
                id="LName"
                class="shadow-sm bg-white border border-gray-200 text-black-200 lg:text-base text-sm font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-ash-400 dark:text-white dark:shadow-sm-light"
                placeholder="Enter your last name"
                required
              />
            </div> <!--  Last name -->
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 lg:text-base text-sm font-poppins font-normal text-green-400 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="LName"
              class="shadow-sm bg-white border border-gray-200 text-black-200 lg:text-base text-sm font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-ash-400 dark:text-white dark:shadow-sm-light"
              placeholder="Enter your email"
              required
            />
          </div> <!-- email -->
          <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div class="sm:mb-6">
              <label
                for="countries"
                class="block mb-2 lg:text-base text-sm font-poppins font-normal text-green-400 dark:text-white"
                >Country</label
              >
              <!-- <select
                id="countries"
                class="shadow-sm bg-white border border-gray-200 text-ash-400 lg:text-base text-sm font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              >
              <div></div>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select> -->

              <div class="flex">
  <button type="button" class="relative w-full text-ash-200 gap-2 rounded-l-md border font-normal text-left px-2 font-poppins bg-white shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all lg:text-sm text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
    select your country
  </button>
  <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
    <button id="hs-split-dropdown" type="button" class="hs-dropdown-toggle relative -ml-[.3125rem] --tw-ring-shadow:none py-3 px-4 inline-flex justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-r-md border font-medium bg-ash-200 text-ash-500 shadow-sm align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
      <span class="sr-only">Toggle Dropdown</span>
      <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <div class="hs-dropdown-menu w-96 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-split-dropdown">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
        Team Account
      </a>
    </div>
  </div>
</div>
            </div>
            <div class="mb-6"> <!--  Phone code input -->
              <label
                for="phone"
                class="block mb-2 lg:text-base text-sm font-poppins font-normal text-green-400 dark:text-white"
                >Phone</label
              >
              <input
                id="phone"
                class="shadow-sm bg-white border border-gray-200 lg:text-base text-sm text-black-200 font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              />
            </div>
          </div>   <!--  Country dropdown -->
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 lg:text-base text-sm font-poppins font-normal text-green-400 dark:text-white"
              >Subject Area</label
            >
            <input
              type="text"
              id="LName"
              class="shadow-sm bg-white border border-gray-200 text-black-200 lg:text-base text-sm font-normal rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-ash-400 dark:text-white dark:shadow-sm-light"
              placeholder="Eg : Office admin, Accounting"
              required
            />
          </div> <!--  subject area input -->

          <div class="mb-12">
            <div class="space-y-4">
              <label
                class="block mb-2 lg:text-base text-sm font-poppins font-normal text-green-400 dark:text-white"
              >
                Upload your CV
              </label>
              <div class="flex items-center space-x-4">
                <div
                  class="relative border border-gray-200 dark:border-gray-700 rounded-lg w-full h-32 flex justify-end items-end shadow-sm bg-white"
                >
                  <input
                    class="absolute top-0 left-0 w-full h-full opacity-0"
                    type="file"
                    @change="handleFileUpload"
                    id="fileInput"
                  />
                  <button
                    type="button"
                    class="bg-white border border-green-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-green-100 lg:text-base text-sm font-medium lg:px-20 px-8 py-2 mr-4 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Choose file
                  </button>
                  <label
                    for="fileInput"
                    class="absolute bottom-0 left-0 w-full h-full text-center pointer-events-none"
                  >
                    <span class="text-ash-400 lg:text-base text-sm font-normal font-poppins dark:text-gray-300 block mt-6 text-left px-3">{{
                      selectedFileName !== ""
                        ? selectedFileName
                        : "File Types :JPG, gif, png,pdf, Max file size:2MB"
                    }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div> <!--  file upload -->
          
          <button
            type="button"
            class="focus:outline-none text-white  bg-green-100 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg lg:text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button> <!-- submit button -->
        </form>
      </div>
    </div>     
  </div>
</template>

<style>
.bg-green-500 {    /* hide scroll bar */
  overflow-y: scroll;  
  scrollbar-width: thin;  
  scrollbar-color: transparent transparent;  
}
.bg-green-500::-webkit-scrollbar {  /* for Chrome and Safari browser hide scroll bar*/
  width: 8px;  
}

.bg-green-500::-webkit-scrollbar-thumb {
  background-color: transparent;  
}
input:focus {
  outline: none; /* This removes the default focus outline */
  /* Add any other specific styling you want for the focus state */
}

</style>