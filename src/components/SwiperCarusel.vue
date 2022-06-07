<template>
    <Swiper :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination, Virtual]"
            navigation :pagination="{ clickable:true, dynamicBullets:true }" grab-cursor virtual>
        <SwiperSlide v-for="n in 10" :key="n" :virutalIndex="n">
            <img :src="'https://picsum.photos/1024/600?random='+n" >
        </SwiperSlide>
    </Swiper>
</template>
<script setup>
    import { Navigation, Pagination, Virtual } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/bundle';
</script>
