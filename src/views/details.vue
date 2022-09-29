<template>
      <div>
        <div class="details">
          <navbarComponent/>
        </div>
        <div class="des" >
            <div class="des1">
              <img :src="homedocSnap.images" alt="">
            </div>
            <div class="des2">
                <div class="carre" v-for="images in homedocSnap.images" :key="images.id">
                  <img :src="images" alt="">
                </div>
            </div>
        </div>
        <!-- <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-mdb-interval="10000">
               <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape"/> 
             <img :src="homedocSnap.images" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item" data-mdb-interval="2000">
               <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
               <img :src="homedocSnap.images" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item">
               <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
              <img :src="homedocSnap.images" alt="" class="d-block w-100">
            </div>
          </div>
          <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>  -->

        <!-- <h1 style="text-align:center"></h1> -->
        <div class="detail">
            <div class="detail1">
              <div class="titre">
                <div class="titre1"></div>
                <div class="titre2"><small class="descrip">Description du bien</small></div>
                <div class="titre3"></div>
              </div>
              <div class="textes">
                  <p>
                    {{homedocSnap.message}}
                  </p>
              </div>
            </div>
            <div class="detail2">
              <div class="montitre">
                <div class="montitre1"></div>
                <div class="montitre2"><i class="fas fa-pencil"><small>FICHE DÉTAILLÉ</small></i></div>
                <div class="montitre3"></div>
             </div>
             <div class="fiche">
                <div class="fiche1">
                  <div class="fiche11">
                    <span>Nom du bien:</span>  
                    <span class="bien1"> {{homedocSnap.nom}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Status:</span>  
                    <span class="bien1">{{homedocSnap.cate}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Type:</span>  
                    <span class="bien1">{{homedocSnap.type}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Lot superficie:</span>  
                    <span class="bien1"> {{homedocSnap.superficie}} m²</span> 
                  </div>
                  <div class="fiche11">
                    <span>Prix:</span>  
                    <span class="bien1"> {{homedocSnap.prix}} FCFA</span> 
                  </div>
                 
                </div>
                <div class="fiche2">
                  <div class="fiche11">
                    <span>Nombre de salle de bain :</span>  
                    <span class="bien1">{{homedocSnap.bain}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Nombre de chambre :</span>  
                    <span class="bien1"> {{homedocSnap.chambre}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Pays:</span>  
                    <span class="bien1"> {{homedocSnap.pays}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Ville :</span>  
                    <span class="bien1">{{homedocSnap.ville}}</span> 
                  </div>
                  <div class="fiche11">
                    <span>Adresse:</span>  
                    <span class="bien1">{{homedocSnap.adresse}}</span> 
                  </div>
                  
                </div>
             </div>
            </div>
        </div>
        <div class="clan">
          <h1>Réservation</h1>
          <p>vous pouvez acheter ou louer via ce formulaire</p>
          <div class="clan1">
            <div class="clane">
              <form action="">
                <div class="formes">
                  <input type="text" placeholder="Nom" v-model="nom">
                  <input type="email" placeholder="email" v-model="email">
                  <input type="number" placeholder="numero" v-model="numero">
                </div>
                <div class="botton">
                  <button>Envoyer</button>
                </div>
              </form>
            </div>
            <div class="appel-direct">
                <div class="part1">
                  <i class="fa-solid fa-phone"></i>
                    <h3>Numero de Telephone Direct</h3>
                    <p>+255 07 07 45 47 83,
                      +255 01 04 05 10 62
                    </p>
                </div>
                <div class="part2">
                  <i class="fa-solid fa-phone"></i>
                    <h3>Numero de Telephone Whatsapp</h3>
                   <p>+255 03 08 23 97 34</p>
                </div>
            </div>
          </div>
              <!-- <div class="numero-whathap"></div> -->
        </div>


        <div class="autre-associe">
          <h1>Découvrez plus d'annonces dans la même ville</h1>
          <div class="element">
            
            <!-- <div class="villa" v-for="doc in snape" :key="doc.id">
              <div class="villa1">
                <img :src="doc.images" alt="">
                <div class="col_rent">{{doc.cate}}</div> 
                <div class="price">{{doc.prix}} FCFA</div>
              </div>
              <div class="villa2">
                <h2>{{doc.nom}}</h2>
                <p>{{doc.message}}</p>
                <div class="villa21">
                  <i class="fa fa-bed"><span> Bed:{{doc.chambre}}</span></i>
                  <i class="fa fa-shower"><span> Bath:{{doc.bain}}</span></i>
                  <i class="fa fa-th"><span>{{doc.superfice}} Sp </span></i>
                                
                </div>
              </div>
            </div>  -->
            
            
             <div class="villa" >
              <div class="villa1">
                <img src="../assets/maison1.jpg" alt="">
                <div class="col_rent">For Sale</div> 
                <div class="price">112345 FCFA</div>
              </div>
              <div class="villa2">
                <h2>Apppartement</h2>
                <p>sgvhdfhdfhudhiufhiduhgudhjbfghujdhiufvdhujfvhjdhfudhfhu</p>
                <div class="villa21">
                  <i class="fa fa-bed"><span> Bed:7</span></i>
                  <i class="fa fa-shower"><span> Bath: 7 </span></i>
                  <i class="fa fa-th"><span>123456 SF </span></i>
                                
                </div>
              </div>
            </div>  
             <div class="villa" >
              <div class="villa1">
                <img src="../assets/maison1.jpg" alt="">
                <div class="col_rent">For Sale</div> 
                <div class="price">112345 FCFA</div>
              </div>
              <div class="villa2">
                <h2>Apppartement</h2>
                <p>sgvhdfhdfhudhiufhiduhgudhjbfghujdhiufvdhujfvhjdhfudhfhu</p>
                <div class="villa21">
                  <i class="fa fa-bed"><span> Bed:7</span></i>
                  <i class="fa fa-shower"><span> Bath: 7 </span></i>
                  <i class="fa fa-th"><span>123456 SF </span></i>
                                
                </div>
              </div>
            </div>   
            <div class="villa" >
              <div class="villa1">
                <img src="../assets/maison1.jpg" alt="">
                <div class="col_rent">For Sale</div> 
                <div class="price">112345 FCFA</div>
              </div>
              <div class="villa2">
                <h2>Apppartement</h2>
                <p>sgvhdfhdfhudhiufhiduhgudhjbfghujdhiufvdhujfvhjdhfudhfhu</p>
                <div class="villa21">
                  <i class="fa fa-bed"><span> Bed:7</span></i>
                  <i class="fa fa-shower"><span> Bath: 7 </span></i>
                  <i class="fa fa-th"><span>123456 SF </span></i>
                                
                </div>
              </div>
            </div>       
          </div>
        </div>
        <footerComponent/>
      </div>
</template>

<script>
import {homeColRef} from '../firebase' 
import {getDocs,query, where,} from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import navbarComponent from "../components/navbar.vue";
import footerComponent from '../components/footer.vue'
  export default {
    name:'details',
    components:{
      navbarComponent,
      footerComponent
    },
    data(){
      return{
         snape:[],
         homedocSnap:''
      }
    },
    props:['id'],
    methods: {
     
        
    },
   
    async mounted() {
        const docRef = doc(homeColRef, this.id);
        const docSnap = await getDoc(docRef);
        // console.log("dgfhhdgfgh",homedocSnap.images);
        if (docSnap.exists()){
          this.homedocSnap= docSnap.data()
         console.log("Document data:", this.homedocSnap);
        } 
        else {
          console.log("No such document!");
        }


        const q = query(homeColRef, where("ville", "==", "abidjan"));
             console.log("ddddd",q);
             const snapSnapshot = await getDocs(q);
             let snape = [];
             console.log("ssssss",snapSnapshot);
             snapSnapshot.forEach((doc) => {
                let homesnapedata = doc.data()
                homesnapedata.id = doc.id;
                snape.push(homesnapedata);
             console.log("pppppppp",doc.id, " => ", homesnapedata);
        });
        this.snape = snape;
       

    },
    
    
    
    // async mounted(){
    //     const q = query(homeColRef, where("ville", "==", "abidjan"));
    //          console.log("ddddd",q);
    //          const snapSnapshot = await getDocs(q);
    //          let snape = [];
    //          console.log("ssssss",snapSnapshot);
    //          snapSnapshot.forEach((doc) => {
    //             let homesnapedata = doc.data()
    //             homesnapedata.id = doc.id;
    //             snape.push(homesnapedata);
    //          console.log("pppppppp",doc.id, " => ", homesnapedata);
    //     });
    //     this.snape = snape;

    // }




    // async  mounted() {
    //         let homedocSnap= docSnap.data()
    //         const querySnapshot = await getDocs(homedocSnap);
    //         let snape = [];
    //         querySnapshot.forEach((doc) => {
    //             let homesnapedata = doc.data()
    //             homesnapedata.id = doc.id;
    //             snape.push(homesnapedata);
                
           
    //         });

    //         this.snape = snape;
    // },

}
</script>

<style scoped>
  .details{
    width: 100%;
    height: 90px;
    background-color: black;
    z-index:1 ;
   
  }
  .des{
    border:5px solid rgb(240, 235, 235);
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .des1{
    width: 70%;
    height: 400px;
  
  }
  .des1 img{
    margin-top:-20px;
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  .des2{
    /* border:1px solid blue; */
    width: 60%;
    height: 200px;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
   
  }
 .carre{
    width: 320px;
    height: 150px;
    /* border:1px solid green; */
    margin-top: 20px;
 }
 .carre img{
    width: 370px;
    height: 200px;
 }
 .detail{
   margin-top: 30px;
   width: 100%;
   height: 520px;
   display: flex;
   justify-content: center;
 }
 .detail1{
  width: 34%;
  height: 400px;
  border:1px solid rgb(187, 30, 155);
  margin: 50px 0 0 0px;
 }



 .titre{
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
 .titre1{
  margin-top: 40px;
  width: 300px;
  background-color: #666;
  height: 10px;
  }
 
.titre2{
  margin-top: 25px;
 width: 200px;
 font-size: 20px;
 font-weight: bold;
 padding: 0 20px 0 20px;
  
 }
 .titre2 small{
  color: blueviolet;
 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
 .titre3{
  margin-top: 40px;
   width: 300px;
   height: 10px;
  background-color: #666;
  }
  .textes{
    background-color: rgb(249, 248, 248);
    padding: 30px;
    margin: 20px;
    border-radius: 10px;
  }
  .textes p{
    height: 100px;
    text-align: justify;
    margin: 40px 40px 40px 40px;
  }

 .detail2{
  width: 34%;
  height: 400px;
  border:1px solid rgb(229, 229, 16);
  margin: 50px 0 0 30px;
  text-align: center;
 }


 .montitre{
   width: 100%;
   display: flex;
   justify-content: space-around;
 }
 .montitre1{
   margin-top: 40px;
   width: 240px;
  background-color: #666;
  height: 10px;
  }
 
 .montitre2 i{
  padding: 30px;
  color: blueviolet;
  font-size: 22px;
 }
 .montitre2 small{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
 .montitre3{
  margin-top: 40px;
   width: 240px;
   height: 10px;
  background-color: #666;
  }
  .fiche{
    width: 94%;
    height: 300px;
    border: 1px solid black;
    margin:  0px 20px;
    display: flex;
    border-radius: 10px;
  }
  .fiche1{
    width: 50%;
    margin-right: 10px;
     
  }
  .fiche11{
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    border-bottom: 1px solid rgb(206, 200, 200);
  }
  .fiche11 .bien1{
    font-weight: bold;
    font-size:20px;
  }
  .fiche2{
    width: 50%;
  }
 .autre-associe{
   width: 100%;
   height: 60vh;
   display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* margin-top: -20%; */
 }
 h1{
   padding-top: 50px;
   text-transform: uppercase;
 }
 .element{
        width: 70vw;
        height: 1000px;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        padding: 20px;
        grid-gap:20px;
        margin-top: 10px;
        
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
        height: 430px;
        margin-right: 20px;
    }
    .villa:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
        object-fit: cover;
        border-radius: 5px;
    }
    .villa2 h2{
        padding-top: 20px;
        text-align: center;
        color: blueviolet;
    }
    .villa2 p{
        padding: 0 0 12px;
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



    .clan{
      margin-top: -5%;
      width: 100%;
      height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
    }
    .clan1{
      position: relative;
      width: 70%;
      height: 400px;
      border: 2px solid cornflowerblue;
      display: flex;
      background-color: aliceblue;
    }
    .clane{
       
        position: absolute;
        top: 45%;
        left: 22%;
        transform: translate(-50%,-50%);
        padding: 10px 20px;
        background-color: #fff;
        height: 320px;
        width: 600px;
        border-radius: 10px;

      
    }
    form{
        height: 550px;
        margin:  auto;
        text-align: center;
      

    }
    .formes select{
        width: 450px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: grey;
    }
    .formes input{
        width: 450px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .forme{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .forme input{
        width: 150px;
        padding: 10px;
        margin: 10px 10px 10px 20px;
        border-radius: 10px;
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
  
    .forme textarea{
        width: 580px;
        height: 200px;
        padding: 10px;
        margin: 10px;
        border-radius: 10px; 
        outline-color: blueviolet;
        border: 2px solid rgb(211, 193, 228);
        color: black;
    }
    .botton button{
        width: 450px;
        margin: 10px;
        background-color: blueviolet;
        border: none;
        font-size: 30px;
        color: #fff;
        border-radius: 10px;
    }
    .botton button:hover{
        border: 3px dashed rgb(189, 145, 231);
        background-color: #fff;
        color: rgb(189, 145, 231);
    }
    /* .clan-appel{
        width: 50%;
        height:  650px;
        
    } */
    .appel-direct{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 700px;
        margin-top: -120px;
    }
    .part1,.part2{
        width: 300px;
        height: 250px;
        outline:.1rem solid rgba(146, 56, 202, 0.929);
        outline-offset: -1rem;
        text-align: center;
        margin-top: 50px;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #fff;
    }
    .part1 i,.part2 i{
        /* border:1px solid blue; */
        padding: 30px;
        border-radius: 50%;
        background-color: #fff;
        color: blueviolet;
        font-size: 30px;
        margin-bottom: 5px;
    }
    .part1 h3,.part2 h3{
        color: black;
        font-weight: bold;
    }
    .part2:hover,.part1:hover{
        outline:.2rem solid blueviolet;
        outline-offset: 0rem;
    }
    .carousel{
      position: relative;
    }
    
</style>