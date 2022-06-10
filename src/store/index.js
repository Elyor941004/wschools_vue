import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    postsFood:[],
    postsDesserts:[],
    postsCookies:[],
    foods:true,
    desserts:false,
    cookies:false
  },
  getters: {
    allPosts(state){
      return state.postsFood
    },
    allDesserts(state){
      return state.postsDesserts
    },
    allCookies(state){
      return state.postsCookies
    }
  },
  mutations: {
    updatePosts(state, allPosts) {
      state.postsFood = allPosts.foods
      state.postsDesserts = allPosts.desserts
      state.postsCookies = allPosts.cookies
    },
    foodsShowFunc:state=>{
      state.foods = true;
      state.desserts = false;
      state.cookies = false;
    },
    dessertsShowFunc:state=>{
      state.foods = false;
      state.desserts = true;
      state.cookies = false;
    },
    cookiesShowFunc:state=>{
      state.foods = false;
      state.desserts = false;
      state.cookies = true;
    }
  },
  actions: {
    async fetchPosts(ctx){
      const res = await fetch('https://wschool.uz/api/apidesserts')
      const posts = await res.json()
      ctx.commit('updatePosts', {foods: posts.foods.data, desserts:posts.desserts.data, cookies:posts.cookies.data})
      console.log(posts.foods.data)
    },
    // async fetchDesserts(ctx){
    //   const res = await fetch('https://wschool.uz/api/apidesserts')
    //   const posts = await res.json()
    //   ctx.commit('updateDesserts', posts.desserts.data)
    //   console.log(posts.desserts.data)
    // },
    // async fetchCookies(ctx){
    //   const res = await fetch('https://wschool.uz/api/apidesserts')
    //   const posts = await res.json()
    //   ctx.commit('updateCookies', posts.cookies.data)
    //   console.log(posts.cookies.data)
    // },
  },
  modules: {
  }
})
