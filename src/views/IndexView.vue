<template>
    <div class="container">
        <Header/>
        <div class="body">
            <div class="body_content_tekst">
                <div class="justify-content-center">
                    <h3>Foods, desserts, cookies recepies</h3>
                </div>
                <div class="justify-content-center">
                    <span>This site teaches you how to cook</span>
                </div>
            </div>
        </div>
        <div class="body_content_menu">
          <div class="body_content_menu_position">
            <router-link class="content_menu" to="" @click="foodsShow">Foods</router-link>
            <router-link class="content_menu" to="" @click="dessertsShow">Desserts</router-link>
            <router-link class="content_menu" to="" @click="cookiesShow">Cookies</router-link>
          </div>
        </div>
        <div class="row" v-if="foods">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" v-for="response in allPosts" :key="response.id">
            <div class="card">
              <div class="card-body">
                <img :src="`https://wschool.uz/storage/${response.image}`" alt="">
              </div>
              <div class="card-footer">
                <h2>{{response.name}}</h2>
                <span>{{response.text}}</span>
                <h3>{{response.time}} min</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="desserts">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" v-for="response in allDesserts" :key="response.id">
            <div class="card">
              <div class="card-body">
                <img :src="`https://wschool.uz/storage/${response.image}`" alt="">
              </div>
              <div class="card-footer">
                <h2>{{response.name}}</h2>
                <span>{{response.text}}</span>
                <h3>{{response.time}} min</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="cookies">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" v-for="response in allCookies" :key="response.id">
            <div class="card">
              <div class="card-body">
                <img :src="`https://wschool.uz/storage/${response.image}`" alt="">
              </div>
              <div class="card-footer">
                <h2>{{response.name}}</h2>
                <span>{{response.text}}</span>
                <h3>{{response.time}} min</h3>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>

</template>
<script>
    import Header from "@/components/Header";
    import SwiperCarusel from "@/components/SwiperCarusel";
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
    import Footer from "@/components/Footer";
    export default {
      components: {Footer, SwiperCarusel, Header},
      computed:{
        ...mapState(['foods', 'desserts', 'cookies']),
        ...mapGetters(['allPosts', 'allDesserts', 'allCookies']),
      },
      methods:{
        ...mapActions(['fetchPosts', 'fetchDesserts', 'fetchCookies']),
        ...mapMutations(['foodsShowFunc', 'dessertsShowFunc', 'cookiesShowFunc']),
        foodsShow(){
          this.foodsShowFunc()
        },
        dessertsShow(){
          this.dessertsShowFunc()
        },
        cookiesShow(){
          this.cookiesShowFunc()
        },
      },
      async mounted(){
        this.fetchPosts();
      },
    }
</script>
<style scoped>
    @import "../assets/css/bootstrap.min.css";
    .container{
        position: relative;
        background-color: white;
        box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
    }
    .body_content_tekst{
        margin-top: 44px;
    }
    .body_content_tekst .justify-content-center{
        margin-bottom: 14px;
    }

    @media only screen and (max-width: 768px) {
      .body_content_menu{
        display: flex;
        justify-content: center;
      }
      .body_content_menu .content_menu{
        margin-top: 24px;
      }
      .body_content_menu_position{
        width: 144px;
      }
    }
    @media only screen and (min-width: 769px) {
      .body_content_menu_position{
        display: flex;
        justify-content: space-evenly;
      }
    }
      .body_content_menu .content_menu{
        height: 44px;
        width: 144px;
        text-decoration: none;
        color:black;
        background-color: rgb(0, 0, 0, 0.01);
        display: flex;
        padding: 14px 24px 14px 24px;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: transform .3s;
        box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
    }
    .body_content_menu .content_menu:hover{
        -ms-transform: scale(1.04); /* IE 9 */
        -webkit-transform: scale(1.04); /* Safari 3-8 */
        transform: scale(1.04);
        transition: transform .3s;
        background-color: #F7F7F7;
        box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
    }
    .container .row{
        margin-top: 44px;
    }

    .card-body img{
        height: 244px;
        width: 100%;
        border-radius: 4px;
    }
    .card-footer{
      padding: 0px -14px 0px -14px;
        border: 0;
      background-color: transparent;
    }
    .card{
        transition: transform .3s;
        border: 0;
    }
    .card:hover{
        box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.1);
    }
    .card:hover{
        -ms-transform: scale(1.004); /* IE 9 */
        -webkit-transform: scale(1.004); /* Safari 3-8 */
        transform: scale(1.004);
        transition: transform .3s;
    }
    .card-body img{
      transition: transform .7s;
    }
    .card-body img:hover{
      box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
    }
    .card-body:hover{
      -ms-transform: scale(1.04); /* IE 9 */
      -webkit-transform: scale(1.04); /* Safari 3-8 */
      transform: scale(1.04);
      transition: transform .3s;
    }


</style>
