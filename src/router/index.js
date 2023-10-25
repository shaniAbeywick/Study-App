import { createRouter, createWebHistory } from 'vue-router'
import awardBodyDetails from '../pages/master/AwardBodyDetails.vue'
import Faq from '../pages/master/FAQ.vue'
import becomeInstructor from '../pages/master/BecomeInstructor.vue'
import termsConditions from '../pages/master/TermsConditions.vue'
import privacyPolicy from '../pages/master/PrivacyPolicy.vue'
import bcsPublication from '../pages/master/BCSMain.vue'
import bcsCategory from '../pages/master/BCSCategory.vue'
import freeWebinarMain from '../pages/master/FreeWebinarMain.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'AwardBodyDetails',
      path: '/AwardBodyDetails',
      component: awardBodyDetails 

      
    },
    {
      name: 'Faq',
      path: '/Faq',
      component: Faq

      
    },
    {
      name: 'BecomeInstructor',
      path: '/BecomeInstructor',
      component: becomeInstructor

      
    },
    {
      name: 'TermsConditions',
      path: '/TermsConditions',
      component: termsConditions

      
    },
    {
      name: 'PrivacyPolicy',
      path: '/PrivacyPolicy',
      component: privacyPolicy

      
    },
    {
      name: 'BCSPublication',
      path: '/BCSPublication',
      component: bcsPublication

      
    },
    {
      name: 'BCSCategory',
      path: '/BCSCategory',
      component: bcsCategory
      
    },
    {
      name: 'FreeWebinarMain',
      path: '/FreeWebinarMain',
      component: freeWebinarMain
      
    }
    
  ]
})

export default router
