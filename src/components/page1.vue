<template>
        <div>
            <h1>Propriétés les plus récentes</h1>
            <div class="contenu">
                <div class="element">
                    <div class="villa" v-for="doc in Immo" :key="doc.id">
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
                    </div>
                    
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div>
                    <div class="villa">
                        <div class="villa1" style="position:relative">
                            <img src="../assets/maison1.jpg" alt="">
                                <div class="col_sale">For Sale</div>
                                <div class="price">2000 USD</div>
                        </div>
                        <div class="villa2">
                            <h2>Centennial Drive</h2>
                            <p>Taking transformation mapping and above all, create synergy....</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:4 </span></i>
                                <i class="fa fa-shower"><span> Bath: 6 </span></i>
                                <i class="fa fa-th"><span> 2750 SF </span></i>            
                            </div>
                        </div>
                    </div> 
                </div>
               
            </div>
            <!-- <div class="pagination" id="demo">
                <nav aria-label="...">
                    <ul class="pagination pagination-circle">
                        <li class="page-item">
                        <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>  -->
            <div class="footer">
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
    .pagination{
        display: flex;
        justify-content: center;
    }
    @media (max-width:1200px) {
        .contenu{
            height: 2100px;
        }
        .element1{
            margin-top: 100px;
        }
    }
    @media (max-width:780px) {
        .element{
            height: 2000px;
            margin-top: -20px;
        }
       .villa{
           height: 360px;
       }    
  
    }
  
    
</style>