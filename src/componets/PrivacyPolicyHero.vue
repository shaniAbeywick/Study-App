<template>
    <div class="relative">
      <img
        src="../../public/img/treeRight.png"
        alt="treeImg"
        srcset=""
        class="hidden md:block absolute right-0"
      />
    </div>
    <div class="container sm:py-32 py-24">
      <div class="grid grid-row">
        <div>
          <div
            class="text-green-100 sm:text-4xl text-3xl font-poppins font-medium text-left"
          >
          Privacy Policy
          </div>
          <!--  Terms and conditions section heading-->
          <div
            class="text-black-100 sm:text-6xl text-3xl font-poppins leading-12 font-semibold pt-6 max-w-[16ch] text-left"
          >
            <!--  Become Instructor section sub heading-->
            What can we help you find ?
          </div>
  
          <button
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
            class="mt-12 bg-white shadow-2xl sm:text-xl  text-ash-100 font-medium font-poppins focus:ring-4 focus:outline-none focus:ring-transparent rounded-lg px-4 py-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
          Select Privacy & Policy
            <svg
              class="w-2.5 h-2.5 sm:ml-48 ml-8 text-green-200"
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
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
  
          <!-- Dropdown menu -->
          <div
            id="dropdownUsers"
            class="z-10 hidden bg-white shadow sm:w-1/4 w-72 dark:bg-gray-700 rounded-lg"
          >
            <ul
              class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <li>
                <a
                  href="#section-1"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  
                Introduction
                </a>
              </li>
              <li>
                <a
                  href="#section-2"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  
                Specific uses of information provide to us
                </a>
              </li>
              <li>
                <a
                  href="#section-3"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  
                Use of information we collect through automated systems when you visit our website
                </a>
              </li>
              <li>
                <a
                  href="#section-4"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                 
                Disclosure and sharing of your information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                 
                Access to your own information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center text-black-300 text-xl font-medium font-poppins px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  
                Other matters
                </a>
              </li>
            </ul>
          
          </div>
        </div>
        <div>
          <img src="../../public/img/Exclude.png" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <style>
  
  #dropdownUsers {
      scrollbar-color:#0E6936 #0E6936;
      scrollbar-width: auto; /* "auto" or "thin" for Firefox */
     
  }
  #dropdownUsers::-webkit-scrollbar {
    width: 12px; /* Set the width of the scrollbar */
  }
  
  #dropdownUsers::-webkit-scrollbar-thumb {
    background-color: #0E6936; /* Set the color of the scrollbar thumb */
  }
  
  #dropdownUsers::-webkit-scrollbar-track {
    background-color: #0E6936; /* Set the color of the scrollbar track */
  }
  </style>
  
  
  
  
  
  
  
  
  
  