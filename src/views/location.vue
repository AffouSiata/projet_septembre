<template>
    <div class="location">
        <navbarComponent/>
    </div>
     <div class="contenu">
         <div class="element">
             <div class="villa" v-for="doc in local" :key="doc.id">
                 <div class="villa1">
                     <img :src="doc.images[0]" alt="">
                     <div class="col_rent">{{doc.cate}}</div> 
                     <div class="price">{{doc.prix}} USD</div>
                 </div>
                 <div class="villa2">
                     <h2>{{doc.nom}}</h2>
                     <p>{{doc.message}} <br></p>
                    
                     <div class="villa21">
                         <i class="fa fa-bed"><span> Bed:{{doc.chambre}}</span></i>
                         <i class="fa fa-shower"><span> Bath: {{doc.bain}} </span></i>
                         <i class="fa fa-th"><span>  {{doc.superfice}} SF </span></i>
                                 
                     </div>
                    <div class="botton">
                        <!-- <a href="/details">Details</a> -->
                        <button @click.prevent="detailsplus(doc.id)">Details</button>
                    </div>
                 </div>
             </div>
         </div>
         {{id}}
     </div>
    <footerComponent/>
    
 </template>
 
 <script>
import navbarComponent from '../components/navbar.vue'
import {homeColRef} from '../firebase' 
import {getDocs,query, where,} from "firebase/firestore"
import footerComponent from '../components/footer.vue'
 export default {
     name:'location',
     components:{
         navbarComponent,
         footerComponent
     },
     data(){
         return{
             local:[]
         }
     },
    methods:{
        detailsplus(id){
          console.log("nid",id);
          this.$router.replace(`/details/${id}`)
        }

    },
     async mounted(){
         const q = query(homeColRef, where("cate", "==", "For Rent"));
              console.log("ddddd",q);
              const snapSnapshot = await getDocs(q);
              let local = [];
              console.log("ssssss",snapSnapshot);
              snapSnapshot.forEach((doc) => {
                 let homedata = doc.data()
                 homedata.id = doc.id;
                 local.push(homedata);
              console.log(doc.id, " => ", homedata);
         });
         this.local = local;
     }
 }
 </script>
 
 <style scoped>
   .location{
         width: 100%;
         height: 90px;
         background-color: black;
         position: fixed;
         z-index: 1;
     }
 
 .contenu{
 
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 
 }
 
 .element{
 
 width: 70vw;
 height: 1000px;
 display: grid;
 grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
 padding: 20px;
 grid-gap:20px;
 margin-top: 90px;
 
 }
 
 .villa{
 /* width: 400px; */
 width: 100%;
 position: relative;
 -webkit-transition: all 0.3s ease-in-out;
 transition: all 0.3s ease-in-out;
 border-color: #DFE6EE;
 border-width: 1px;
 border-style: solid;
 border-radius: 5px;
 height: 400px;
 margin-right: 20px;
 }
 .villa:hover{
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 }
 .villa1{
 
 }
 .col_rent{
 position: absolute;
 top:-1%;
 background-color: blueviolet;
 padding: 5px;
 border-radius: 5px;
 color: #fff;
 box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
 }
 .col_sale{
 position: absolute;
 top:-10%;
 background-color:black;
 padding: 5px;
 border-radius: 5px;
 color: #fff;
 box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
 }
 .price{
 position: absolute;
 top: 25%;
 background-color: black;
 padding: 5px;
 border-radius: 5px;
 color: #fff;
 box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
 opacity: 0.6;
 }
 .villa1 img{
 /* width: 398px; */
 width: 100%;
 height: 200px;
 object-fit: cover;
 border-radius: 5px;
 }
 .villa2 {
    display:flex;
    flex-direction: column;
 }
 .villa2 h2{
 padding-top: 20px;
 text-align: center;
 color: blueviolet;
 }
 .villa2 p{
    
    padding: 0 0 12px 30px;
    color: #666;
    text-align: center;
 }
 .villa21{
 text-align: center;
 }
 .villa21 i{
 margin-right: 20px;
 color: blueviolet;
 font-size: 20px;
 }
 .villa21 span{
 color: #666;
 font-size: 13px;
 }
 button{
    background-color: blueviolet;
    padding: 10px 40px;
    text-align: center;
    width:auto;
    margin:25px 90px;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    border: none;
    
}
button:hover{
    background-color: #fff;
    border: 2px solid blueviolet;
    color: blueviolet;

} 
 
 </style>