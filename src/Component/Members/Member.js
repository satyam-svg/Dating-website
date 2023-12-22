import React, { useEffect } from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './member.css'
export default function Member() {
    useEffect(()=>{
        var swiper = new Swiper(".team-swiper", {
            navigation: {
              nextEl: ".swiper-button-nexts",
              prevEl: ".swiper-button-prevs",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
              250: {
                slidesPerView: 1.2,
                spaceBetween: 80
              },
              // when window width is &gt;= 320px
              300: {
                slidesPerView: 1.2,
                spaceBetween: 0
              },
              // when window width is &gt;= 480px
              400: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              // when window width is &gt;= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1150: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }
          });
    })
  return (
    <>
      <div class="responsive-container-block container">
  <p class="text-blk team-head-text" id='our'>
    Our Team
  </p>
  <div class="responsive-container-block">
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card">
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png" loading="lazy"/>
        </div>
        <p class="text-blk name">
         Revealing Soon
        </p>
       
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card">
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png" loading="lazy"/>
        </div>
        <p class="text-blk name">
         Revealing Soon
        </p>
        
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card" id='three'>
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png" loading="lazy"/>
        </div>
        <p class="text-blk name">
         Revealing Soon
        </p>
       
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div class="card" id='four'>
        <div class="team-image-wrapper">
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png" loading="lazy"/>
        </div>
        <p class="text-blk name">
         Revealing Soon
        </p>
       
      </div>
    </div>
   
   
   
  </div>
</div>
    </>
  )
}

