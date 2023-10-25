<template>
  <div class="bg-green-100 flex relative">
    <div>
  <img src="../../public/img/treeLeft.png" alt="" srcset="" class="hidden md:block absolute top-16">
    </div>
    <div class="container mt-20 justify-center">
      <p class="text-center text-green-300 text-4xl font-semibold">
        What our students say
      </p>
      
      <div class="text-center text-green-400 text-lg font-normal pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div class="flex justify-end space-x-2">
        <button class="splide__arrow--prev hidden md:block group"  @click="prevSlide">
          <!-- Custom Previous Arrow SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            
          >
            <path
              d="M27.7898 11.8123L35.6645 19.6872L1.4375 19.6872L1.4375 22.3122L35.6644 22.3122L27.7898 30.1868L29.6459 32.043L40.6892 20.9996L29.6459 9.95622L27.7898 11.8123Z"
              fill="#0E6836" class="group-hover:fill-lime-700"
            />
          </svg>
        </button>
        <button class="splide__arrow--next hidden md:block group" @click="nextSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="46"
            viewBox="0 0 58 46"
            fill="none"
          >
            <circle cx="35" cy="23" r="23" fill="white" class="group-hover:fill-green-400" />
            <path
              d="M27.7898 13.8123L35.6645 21.6872L1.4375 21.6872L1.4375 24.3122L35.6644 24.3122L27.7898 32.1868L29.6459 34.043L40.6892 22.9996L29.6459 11.9562L27.7898 13.8123Z"
              fill="#0E6836" class="group-hover:fill-lime-700"
            />
          </svg>
        </button>
      </div>
      <div class="container sm:w-4/5">
      
        <Splide ref="mySplide"
          :options="splideOptions"
          aria-label="My Favorite Images">
          <SplideSlide>
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-row">
                <div>
                    <div class="w-16 h-16 lg:w-24 lg:h-20 lg:text-4xl text-3xl font-semibold text-green-400 bg-ash-200 flex items-center justify-center rounded-md">DS</div>
                </div>
                   
                    <div class="flex flex-col lg:space-y-3 space-y-2 lg:mx-8 mx-4  ">
                        <div>
                            <div class="flex flex-row space-x-1">
                       
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       </div>
                        </div>
                   
                  
                    <div class="lg:text-lg text-sm  font-normal text-ash-100"> Damon Salvatore</div>
                  
                    
    
                  </div>
                
                
                
              </div>
              <div class="text-green-400 lg:text-lg text-sm font-semibold max-w-[30ch] mt-6 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,. 


              </div>
             
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-row">
                <div>
                    <div class="w-16 h-16 lg:w-24 lg:h-20 lg:text-4xl text-3xl font-semibold text-green-400 bg-ash-200 flex items-center justify-center rounded-md">DS</div>
                </div>
                   
                    <div class="flex flex-col lg:space-y-3 space-y-2 lg:mx-8 mx-4  ">
                        <div>
                            <div class="flex flex-row space-x-1">
                       
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       </div>
                        </div>
                   
                  
                    <div class="lg:text-lg text-sm  font-normal text-ash-100"> Damon Salvatore</div>
                  
                    
    
                  </div>
                
                
                
              </div>
              <div class="text-green-400 lg:text-lg text-sm font-semibold max-w-[30ch] mt-6 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,. 


              </div>
             
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-row">
                <div>
                    <div class="w-16 h-16 lg:w-24 lg:h-20 lg:text-4xl text-3xl font-semibold text-green-400 bg-ash-200 flex items-center justify-center rounded-md">DS</div>
                </div>
                   
                    <div class="flex flex-col lg:space-y-3 space-y-2 lg:mx-8 mx-4  ">
                        <div>
                            <div class="flex flex-row space-x-1">
                       
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       </div>
                        </div>
                   
                  
                    <div class="lg:text-lg text-sm  font-normal text-ash-100"> Damon Salvatore</div>
                  
                    
    
                  </div>
                
                
                
              </div>
              <div class="text-green-400 lg:text-lg text-sm font-semibold max-w-[30ch] mt-6 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,. 


              </div>
             
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-row">
                <div>
                    <div class="w-16 h-16 lg:w-24 lg:h-20 lg:text-4xl text-3xl font-semibold text-green-400 bg-ash-200 flex items-center justify-center rounded-md">DS</div>
                </div>
                   
                    <div class="flex flex-col lg:space-y-3 space-y-2 lg:mx-8 mx-4  ">
                        <div>
                            <div class="flex flex-row space-x-1">
                       
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div >
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       <div>
                         <img src="../../public/img/review.png" alt="StarImg" srcset="" />
                       </div>
                       </div>
                        </div>
                   
                  
                    <div class="lg:text-lg text-sm  font-normal text-ash-100"> Damon Salvatore</div>
                  
                    
    
                  </div>
                
                
                
              </div>
              <div class="text-green-400 lg:text-lg text-sm font-semibold max-w-[30ch] mt-6 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,. 


              </div>
             
            </div>
          </SplideSlide>
          

          
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    prevSlide() {
      this.$refs.mySplide.splide.go("-"); // Go to previous slide
    },
    nextSlide() {
      this.$refs.mySplide.splide.go("+"); // Go to next slide
    },
  },
  data() {
    return {
      splideOptions: {
        rewind: true,
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: "0.25rem",
        autoplay: false, // disable autoplay on mobile
        breakpoints: {
          1280: {
            perPage: 2,
            gap: "1rem",
          },
          768: {
            perPage:1,
            autoplay: true, // Enable autoplay on mobile
            interval: 3000, // Set interval for autoplay (in milliseconds)
            gap: "1rem",
          },
        },
      },
    };
  },
});
</script>



