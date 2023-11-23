<template>  
  <div class="container row">
    <nav class="col-sm-3 bg-gray-100 border-gray-200 dark:bg-gray-900  navigation-left">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
           <svg class="h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M111.848 98.888a59.075 59.075 0 0 0 0-69.776 1.429 1.429 0 0 0-.366-.514 59.193 59.193 0 0 0-94.964 0 1.727 1.727 0 0 0-.164.173 1.747 1.747 0 0 0-.2.34 59.075 59.075 0 0 0 0 69.776 1.425 1.425 0 0 0 .365.513 59.192 59.192 0 0 0 94.979-.02 1.7 1.7 0 0 0 .149-.153 1.747 1.747 0 0 0 .201-.339zM64 83.11a95.037 95.037 0 0 0-28.182 4.1 93.5 93.5 0 0 1-2.8-21.459h61.966a93.5 93.5 0 0 1-2.8 21.459A95.037 95.037 0 0 0 64 83.11zm27.236 7.517C85.972 107.963 75.738 119.75 64 119.75s-21.972-11.787-27.236-29.123A91.85 91.85 0 0 1 64 86.61a91.85 91.85 0 0 1 27.236 4.017zM8.294 65.75h21.224a95.362 95.362 0 0 0 3.026 22.563 60.5 60.5 0 0 0-14.376 7.375A55.405 55.405 0 0 1 8.294 65.75zm9.873-33.437a60.5 60.5 0 0 0 14.376 7.375 95.362 95.362 0 0 0-3.025 22.562H8.294a55.405 55.405 0 0 1 9.874-29.937zM64 44.89a95.037 95.037 0 0 0 28.182-4.1 93.5 93.5 0 0 1 2.8 21.459H33.016a93.5 93.5 0 0 1 2.8-21.459A95.037 95.037 0 0 0 64 44.89zm-27.236-7.517C42.028 20.037 52.262 8.25 64 8.25s21.972 11.787 27.236 29.123A91.85 91.85 0 0 1 64 41.39a91.85 91.85 0 0 1-27.236-4.017zm82.942 24.877H98.482a95.362 95.362 0 0 0-3.026-22.563 60.5 60.5 0 0 0 14.376-7.375 55.405 55.405 0 0 1 9.874 29.938zm-21.223 3.5h21.223a55.405 55.405 0 0 1-9.873 29.938 60.5 60.5 0 0 0-14.376-7.375 95.362 95.362 0 0 0 3.025-22.563zm9.262-36.25a56.971 56.971 0 0 1-13.26 6.774C90.931 24.8 85.244 15.569 78.339 10.128A55.874 55.874 0 0 1 107.745 29.5zM49.661 10.128C42.756 15.569 37.069 24.8 33.515 36.275a56.971 56.971 0 0 1-13.26-6.775 55.874 55.874 0 0 1 29.406-19.372zM20.255 98.5a56.971 56.971 0 0 1 13.26-6.774c3.554 11.474 9.24 20.706 16.146 26.147A55.874 55.874 0 0 1 20.255 98.5zm58.084 19.373c6.906-5.44 12.592-14.673 16.146-26.147a56.971 56.971 0 0 1 13.26 6.774 55.874 55.874 0 0 1-29.406 19.372z"/></svg>
           <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sample Company</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto items-center content-menu w-100" id="navbar-default">
          <ul class="p-4 md:p-0 mt-4 border border-gray-50 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <router-link to="/" class="flex flex-col m-0">
              <p class="m-4">Home</p>                        
            </router-link>           
            <router-link :to="{name: 'vistauno'}"  class="flex flex-col m-0">
              <p class="m-4">Vista 1</p>              
            </router-link>
            <router-link :to="{name: 'vistados'}"  class="flex flex-col m-0">
              <p class="m-4">Vista 2</p>              
            </router-link>            
          </ul>
        </div>
      </div>
    </nav>
    <div class="col-sm-9 content">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>    
</template>
<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default{
  setup(){
    onMounted(() => {
      initFlowbite();
    })
  }
}
</script>
<style>
:root {
  --main-bg-color: #f6f4f5;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

nav a {
  margin: 0;
  font-weight: bold;
  color: #a2a1a5;
  text-decoration: none;
  width: 100%;
  height: 45px;
  font-weight: 200;
  /* ejecutar con Tailwind*/ 
  display: flex;
  align-items: center;
  justify-content: center;
  align-content:center ;
}

nav a p{
  margin-bottom: 0;
  padding: 2%;
}

nav a.router-link-exact-active {
  color: white;
  border-radius: 5px;
  background-color: black;
  font-weight: 600;
}
.navigation-left{
  border: 1px solid #f0eeef;
  background-color: #f6f4f5;
  height: 100vh;
  padding: 0;
  display: flex;
}
.logo {
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content:center ;
  border-bottom: 1px solid #f0eeef;
}

.logo p{
  font-size: 1.5rem;
  font-weight: bold;
}
.logo svg {
  width:10%;
}
.content-menu{
  width: 100%;
}
 @media (max-width: 375px) {
  .logo p{
    font-size: 0.5rem;
  }
  .logo svg {
   width:10%;
  }

  .navigation-left{
    height: 100%;
    padding: 1%;
  }

}

</style>
