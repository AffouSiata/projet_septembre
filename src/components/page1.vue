<template>
        <div>
            <h1>Propriétés les plus récentes</h1>
            <div class="contenu">
                <div class="element">
                    <!-- <div class="villa" v-for="doc in Immo" :key="doc.id">
                        <div class="villa1">
                                <img :src="doc.images" alt="">
                                <div class="col_rent">{{doc.cate}}</div> 
                                <div class="price">{{doc.prix}} USD</div>
                        </div>
                        <div class="villa2">
                            <h2>{{doc.nom}}</h2>
                            <p>{{doc.message}}</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:{{doc.chambre}}</span></i>
                                <i class="fa fa-shower"><span> Bath: {{doc.bain}} </span></i>
                                <i class="fa fa-th"><span>  {{doc.sf}} SF </span></i>
                                
                            </div>
                        </div>
                    </div> -->
                    
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/appart1.jpg" alt="">
                                <div class="col_sale">A Vendre</div>
                                <div class="price">2000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Appartement</h2>
                            <p>Bel appartement à vendre dans la résidence hôtelière.</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:4 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 4 </span></i>
                                <i class="fa fa-th"><span> 2750 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/villa1.jpg" alt="">
                                <div class="col_rent">A Louer</div>
                                <div class="price">25000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Villa</h2>
                            <p>Cette belle villa de plain pied est situé plein ville:</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:4 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 3 </span></i>
                                <i class="fa fa-th"><span> 750 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/mai1.jpg" alt="">
                                <div class="col_sale">A Vendre</div>
                                <div class="price">4000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Maison</h2>
                            <p>MAison a La Motte Situé dans un environnement résidentiel, sécurisé avec piscine et parking privé.</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:3 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 3 </span></i>
                                <i class="fa fa-th"><span> 150 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/duplex1.jpg" alt="">
                                <div class="col_rent">A Louer</div>
                                <div class="price">6000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Duplex</h2>
                            <p>Belle opportunité : appartement duplex surface carrez 121 m²</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:4 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 4 </span></i>
                                <i class="fa fa-th"><span> 121 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/appart2.jpg" alt="">
                                <div class="col_sale">A Vendre</div>
                                <div class="price">1000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Appartement</h2>
                            <p>Villa contemporaine a vendre sur plan d'une surface de 159 m² avec piscine individuelle, Ouverte au sud avec une vue exceptionnelle</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:5 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 5 </span></i>
                                <i class="fa fa-th"><span> 159 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/duplex.jpg" alt="">
                                <div class="col_rent">A Louer</div>
                                <div class="price">3000 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Duplex</h2>
                            <p>Une magnifique villa duplex de style moderne bâtie sur un terrain d’une surface de totale de 862m²</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:4 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 3 </span></i>
                                <i class="fa fa-th"><span> 862 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/villa2.jpg" alt="">
                                <div class="col_sale">A Vendre</div>
                                <div class="price">1200 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Maison</h2>
                            <p>Cette splendide propriété, au calme et sans nuisances, vous enchantera par ses prestations de qualités.</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:3 </span></i>
                                <i class="fa fa-shower"><span>Salle de Bain: 3 </span></i>
                                <i class="fa fa-th"><span> 270 SP </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/mai2.jpg" alt=""> 
                                <div class="col_rent">A Louer</div>
                                <div class="price">1800 FCFA</div>
                        </div>
                        <div class="villa2">
                            <h2>Villa</h2>
                            <p>
                                villa américaine comme une résidence de prestige offrant une vue imprenable à ses occupants
                            </p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Chambre:4 </span></i>
                                <i class="fa fa-shower"><span> Salle de Bain:4</span></i>
                                <i class="fa fa-th"><span> 300 SP </span></i>            
                            </div>
                        </div>
                    </div> 
                </div>
               
            </div> 
        </div> 
</template>

<script>
import {homeColRef} from '../firebase' 
import {getDocs,query, where,orderBy, startAfter, limit} from "firebase/firestore"

export default {
    name:'page1Component',

    data(){
        return{
            Immo:[],
            
        }
    },
    methods: {

    },
    /* affichage */

    // async  mounted() {
    //         const querySnapshot = await getDocs(homeColRef);
    //         let Immo = [];
    //         querySnapshot.forEach((doc) => {
    //             let homedata = doc.data()
    //             homedata.id = doc.id;
    //             Immo.push(homedata);
                
           
    //         });

    //         this.Immo = Immo;
    // },


    /* fin affichage */





    // async mounted(){
    //     // Query the first page of docs
    //         const first = query(homeColRef,limit(5));
    //         const documentSnapshots = await getDocs(first);

    //         const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    //         console.log("last", lastVisible);

    //         const next = query(homeColRef,
    //             startAfter(lastVisible),
    //             limit(5));
    // }
   
   
    
}
</script>

<style scoped>
    h1{
        text-align: center;
        text-transform: uppercase;
        margin-top:30px;
        font-size: 50px;
        color: black;
    }
    .contenu{

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .element{
        width: 70vw;
        height: auto;
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
        height: 460px;
        margin-right: 20px;
    }
    .villa:hover{
        box-shadow: rgba(1,1, 1, 0.25) 0px 50px 100px -20px, rgba(1,1, 1, 0.3) 0px 30px 60px -30px, rgba(1,1, 1, 0.35) 0px -2px 6px 0px inset;
    }
    .col_rent{
        position: absolute;
        top:-1%;
        background-color: blueviolet;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
       
    }
    .col_sale{
        position: absolute;
        top:-2%;
        background-color:black;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
    }
    .price{
        position: absolute;
        top: 45%;
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
        margin-top: -20px;
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
    .pagination{
        display: flex;
        justify-content: center;
    }
    @media (max-width:1200px) {
        .contenu{
            /* height: 600px; */
            height: auto;
        }
        .element{
            margin-top: 40px;
        }
    }
    @media (max-width:780px) {

        .element{
            height: auto;
            margin-top: -20px;
            
        }
       .villa{
           height: 360px;
       }    
  
    }
    @media (max-width:600px) {
    .villa{
        width: 520px;
        height: 390px;
        margin-left: -70px!important;
    }  
    }
    @media (max-width:414px) {
    .villa{
        height: 390px;
        margin-left: -30px!important;
    }  
    }
  
    @media (max-width:320px){
        h1{
            font-size: 30px;
        }
        .villa{
            height:420px;
            margin-left: -60px!important;
        }
    }

    
</style>