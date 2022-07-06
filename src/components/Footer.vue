<template>
  <footer>
    <div class="row">
      <div class="col">
        <span>Tashkent 2022</span>
      </div>
      <div class="col">
        <span>Design in 3vuejs</span>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name:'footer',
    data(){
      return{

      }
    },
  }
</script>
<style scoped>
  footer{
    background-image: url("../assets/img/footer.webp");
    background-repeat: no-repeat;
    background-size: 100% 164%;
  }
  footer .row{
    height: 144px;
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