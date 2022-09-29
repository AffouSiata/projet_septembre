/* uploader une images en firebase */


// uploadImage(e){
        //     console.log("eeeeee",e);
        //     let file = e.target.files[0]
        //     console.log("images",file.name);

        //     const storageRef = ref(storage, file.name);
        //     const uploadTask = uploadBytesResumable(storageRef, file);
        //     uploadTask.on('state_changed', 
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //         case 'paused':
        //             console.log('Upload is paused');
        //             break;
        //         case 'running':
        //             console.log('Upload is running');
        //             break;
        //         }
        //         }, 
        //         (error) => {
        //             console.log("erereree",error);
        //         }, 
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //             this.image =downloadURL
        //             });
        //         }
        //         );   
// }


/* fin uploader une images en firebase */



/* plusieurs images */


// async uploadImage(e){
//     let touslesimages =[];
//     Object.values(e.target.files).forEach((elem)=>{
//      console.log("images",elem.name);
//      const file = elem
//      const metadata ={
//          contentType:"image/jpeg"
//      }
//      const storageRef = ref(storage,"mesImages/" + file.name)
//      touslesimages.push(uploadBytes(storageRef, file , metadata)
//      .then(uploadResult =>{
//          return getDownloadURL(uploadResult.ref)
//      })
//      )
//     })
//     const images = await Promise.all(touslesimages)
//     this.image =images
//     console.log("azertyuiolkjhgfds",this.image);

// }

/* fin plusieurs images */


/* faire un modal  le contenu du modal */
//  <template>
//   <div class="bloc-modale" v-if="revele">
//     <div class="overlay" v-on:click="toggleModale"></div>

//     <div class="modale card">
//       <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
//       <h2>Le contenu de la modale</h2>
//     </div>
//   </div>
// </template> 


// <script>
// export default {
//   name: "Modale",
//   props: ["revele", "toggleModale"]
// };
// </script>


// <style scoped>
// .bloc-modale {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .overlay {
//   background: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }

// .modale {
//   background: #f1f1f1;
//   color: #333;
//   padding: 50px;
//   position: fixed;
//   top: 30%;
// }

// .btn-modale {
//   position: absolute;
//   top: 10px;
//   right: 10px;
// }
// </style>
/* fin  modal  le contenu du modal */


/* ou le modal s'applique */
/* <template>
  <div class="container my-5">
    <h1 class="mb-5">Une modale en Vue JS !</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ouvre la modale</div>
  </div>
</template>


<script>
import Modale from "./Modale";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false
    };
  },
  components: {
    modale: Modale
  },
  methods: {
    toggleModale: function() {
      this.revele = !this.revele;
    }
  }
};
</script>


<style>
</style> */
/* fin ou le modal s'applique */

