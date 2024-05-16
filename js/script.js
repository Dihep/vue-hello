/* //JS test
console.log("script.js"); 
console.log(images, images[1].title); */

//Impostazione VUE
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        mydata: `SuperHello da Vue`
      }
    }
  }).mount('#vueApp');

//Script principale
console.log("JS works");
