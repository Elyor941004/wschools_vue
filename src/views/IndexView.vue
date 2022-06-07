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
            <router-link class="content_menu" to="">Foods</router-link>
            <router-link class="content_menu" to="">Desserts</router-link>
            <router-link class="content_menu" to="">Cookies</router-link>
          </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <img src="../assets/img/test.webp" alt="">
                    </div>
                    <div class="card-footer">
                        <h2>Easy Meatloaf</h2>
                        <span>This is a very easy and no fail recipe for meatloaf. It won't take long to make at all, and it's quite good!</span>
                        <h3>30 min</h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <img src="../assets/img/test.webp" alt="">
                    </div>
                    <div class="card-footer">
                        <h2>Easy Meatloaf</h2>
                        <span>This is a very easy and no fail recipe for meatloaf. It won't take long to make at all, and it's quite good!</span>
                        <h3>30 min</h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <img src="../assets/img/test.webp" alt="">
                    </div>
                    <div class="card-footer">
                        <h2>Easy Meatloaf</h2>
                        <span>This is a very easy and no fail recipe for meatloaf. It won't take long to make at all, and it's quite good!</span>
                        <h3>30 min</h3>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="row">
                <div class="col">
                    <span>Tashkent 2022</span>
                </div>
                <div class="col">
                    <span>Design in vuejs</span>
                </div>
            </div>
        </footer>
    </div>

</template>
<script>
    import Header from "@/components/Header";
    import SwiperCarusel from "@/components/SwiperCarusel";
    export default {
        components: {SwiperCarusel, Header}
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
        border: 0;
    }
    .card{
        transition: transform .3s;
        border: 0;
    }
    .card:hover{
        box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
    }
    .card:hover{
        -ms-transform: scale(1.04); /* IE 9 */
        -webkit-transform: scale(1.04); /* Safari 3-8 */
        transform: scale(1.04);
        transition: transform .3s;
    }
    footer .row{
        height: 144px;
        background-color: #fbfcfc;
    }
    footer .col{
        height: 144px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(0, 0, 0, 0.2);
        color: white;
        font-weight: bold;
    }
</style>
