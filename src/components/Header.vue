<template>
    <div class="header">
        <Swiper class="header_swiper" @swiper="onSwiper" @slideChange="onSlideChange" :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination, Virtual]"
                 :pagination="{ clickable:true, dynamicBullets:true }" grab-cursor virtual >
            <SwiperSlide v-for="number in numbers" :key="number.id" :virutalIndex="number.id">
                <img :src="require(`../assets/img/${number.value}`)" v-bind:alt="number">
            </SwiperSlide>
        </Swiper>
        <div class="header-menu">
            <router-link class="header_menu_link" to="">Home</router-link>
            <router-link class="header_menu_link" to="">Contact</router-link>
            <router-link class="header_menu_link" to="">Login</router-link>
            <router-link class="header_menu_link" to="">Register</router-link>
            <select name="" id="" class="form-group">
                <option class="form-control" value="">EN</option>
                <option class="form-control" value="">RU</option>
                <option class="form-control" value="">UZ</option>
            </select>
        </div>
    </div>
</template>
<script setup>
import { Navigation, Pagination, Virtual } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
</script>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    name:'header',
    components:{
      Swiper,
      SwiperSlide
    },
    data(){
        return {
            numbers:[
                {id:1, value: "headerslide1.jpg"},
                {id:2, value:"headerslide2.jpg"},
                {id:3, value:"headerslide3.jpg"},
                {id:4, value:"headerslide4.jpg"},
                {id:5, value:"headerslide5.jpg"},
                {id:6, value:"headerslide6.jpg"},
                {id:7, value:"headerslide7.jpg"},
                {id:8, value:"headerslide8.jpg"},
                {id:9, value:"headerslide9.jpg"},
                {id:10, value:"headerslide10.jpg"}
            ],
          index:0,
          interval:null,
        }
    },
    methods: {

    },

}
</script>
<style scoped>
 @import "../assets/css/bootstrap.min.css";

 .header{
     display: flex;
     justify-content: space-around;
     background-repeat: no-repeat;
     background-size: cover;
     height: 574px;
     /*align-items: flex-end;*/
     transition: transform .3s;
 }
 .header_swiper{
     position: absolute;
     height: 574px;
     width: 100%;
     object-fit: cover;
 }
 .header_swiper img{
     height: 100%;
     width: 100%;
 }
 @media only screen and (max-width: 768px) {
   .header-menu{
     display: flex;
     width: 24%;
     justify-content: center;
     align-items: flex-end;
     flex-direction: column;
   }
   .header_menu_link{
     text-decoration: none !important;
     color: white  !important;
     width: 144px;
     padding: 12px 12px 14px 12px;
     margin: 64px 0px 0px 0px;
     border-radius: 4px;
     transition: transform .3s;
     z-index: 1;
     font-weight: bold;
     box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
   }
 }
 @media only screen and (min-width: 769px) {
   .header-menu{
     display: flex;
     width: 100%;
     justify-content: center;
     align-items: flex-end;
     margin-top: -34px;
   }
   .header_menu_link{
     text-decoration: none !important;
     color: white  !important;
     width: 14%;
     padding: 12px 12px 14px 12px;
     margin: 12px 12px 44px 12px;
     border-radius: 4px;
     transition: transform .3s;
     z-index: 1;
     font-weight: bold;
     box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
   }
 }
.header-menu .form-group{
  z-index: 1;
}

 .header_menu_link:hover{
     color: white;
     background-color: rgb(0, 0, 0, 0.2);
     -ms-transform: scale(1.04); /* IE 9 */
     -webkit-transform: scale(1.04); /* Safari 3-8 */
     transform: scale(1.04);
     box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
 }
 .header select{
    text-align: center;
     color: white  !important;
      border-radius: 4px;
     margin: 0px 0px 44px 0px;
      box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
     background-color: rgb(0, 0, 0, 0);
     width: 144px;
     border: 0;
     height: 50px;
     transition: transform .3s;
 }
 .header select:hover{
     color: white;
     -ms-transform: scale(1.04); /* IE 9 */
     -webkit-transform: scale(1.04); /* Safari 3-8 */
     transform: scale(1.04);
    background-color: rgb(0, 0, 0, 0.2);
 }
</style>
