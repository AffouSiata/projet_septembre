<template>
   <div class="achat">
    <navbarComponent/>
   </div>
    <div class="contenu">
        <div class="element">
            <!-- aucun bien ne s'affiche -->
            <div v-if="aucun">
                {{aucun}}
            </div>
             <!--fin aucun bien ne s'affiche -->
            <div class="villa" v-for="doc in sale" :key="doc.id" v-else :class="{show:previous}">
                <div class="villa1">
                    <img :src="doc.images[0]" alt="">
                    <div class="col_rent">{{doc.cate}}</div> 
                </div>
                <div class="villa2">
                    <h2>{{doc.nom}}</h2>
                    <p class="text">{{doc.message}}</p>
                    <div class="villa21">
                        <i class="fa fa-bed"><span> Bed:{{doc.chambre}}</span></i>
                        <i class="fa fa-shower"><span> Bath: {{doc.bain}} </span></i>
                        <i class="fa fa-th"><span>  {{doc.superfice}} SF </span></i>
                                
                    </div>
                    <div class="botton">
                        <button @click.prevent="details(doc.id)">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="pagination">
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
    </div> -->
    <div class="pagination">
        <div class="precedent" :disabled="previous" >Prev</div>
        <div class="page">Page <span class="page-num"></span></div>
        <div class="suivant" :disabled="nexxt">Next</div>
    </div>
    <footerComponent/>
</template>

<script>
import navbarComponent from '../components/navbar.vue'
import {homeColRef} from '../firebase' 
import {getDocs,query, where,} from "firebase/firestore"
import footerComponent from '../components/footer.vue'
export default {
    name:'achat',
    components:{
        navbarComponent,
        footerComponent
    },

    data(){
        return{
            sale:[],
            aucun:"",
            previous:false,
            nexxt:false
        }
    },


    methods:{
        details(id){
          console.log("monnnid",id);
          this.$router.replace(`/details/${id}`)
        },

         check (index,pagination){
            const prev=document.querySelector(".precedent");
        const next=document.querySelector(".suivant");
            console.log('checl',pagination, index);
            if(index==pagination){
               this.nexxt = true
            }
            else{
                this.nexxt = true
            }

            if(index==1){
                this.previous= true
            }
            else{
                this.previous= true
            }
        },
        showItems(sale) {
            console.log('xhox',sale);
                for(let i=0;i<sale.length; i++){
                    console.log('fqdhqg',sale[i]);
                sale[i].classList.remove("show");
                sale[i].classList.add("hide");


                if(i>=(index*maxItem)-maxItem && i<index*maxItem){
               sale[i].classList.remove("hide");
               sale[i].classList.add("show");
                }
                page.innerHTML=index;
            }
            
          
        }
      
    },



    setup() {

   
      

      

        window.onload=function(){
            console.log('okkk');
         
        }
        
        
    },


   
    async mounted(){



      

            const q = query(homeColRef, where("cate", "==", "A vendre"));
            //  console.log("ddddd",q);
             const snapSnapshot = await getDocs(q);
            //  console.log("ta",snapSnapshot);
            if(snapSnapshot.docs.length > 0){
                let sale = [];
                    // console.log("ssssss",snapSnapshot);
                    snapSnapshot.forEach((doc) => {
                        let homedata = doc.data()
                        homedata.id = doc.id;
                        sale.push(homedata);
                        let monid = doc.id
                    //  console.log("azerrtt",monid, " => ", homedata);
                });
                this.sale = sale;
            }
            else{
                this.aucun = "gfvghdfhdfhjdkjf"
            }
       
         console.log("pagination",this.sale)  
         let pag = this.sale
        const prev=document.querySelector(".precedent");
        const next=document.querySelector(".suivant");
        const page=document.querySelector(".page-num");
        const maxItem=4;
        let index=1;
        const pagination=Math.ceil(pag.length/maxItem);
        console.log("pppppp",pagination);
           

        prev.addEventListener("click",function(){
        index--;
        this.check(index,pagination);
        this.showItems(pag);
        })
        next.addEventListener("click",function(){
            index++;
            this.check(index,pagination);
             this.showItems(pag);
        })

       this.check(index,pagination);
          this.showItems(pag);
        

       
    },
    setup(){
        let textes = document.querySelectorAll('.text')
            console.log("ttttt",textes);
            textes.forEach(monelment =>{
            truncateString(monelment.innerHTML,30,monelment)
            });
            function truncateString(str,num,el) {
                if (str.length <= num) {
                    return el.innerHTML =str;
                } else {
                    return el.innerHTML = str.slice(0,num).concat('...')
                }
            } 
    }
    
}
</script>

<style scoped>
    .precedent:disabled,
   .precedent[disabled]{
        background-color: blueviolet;
        color: #fff;
        cursor: not-allowed;
        pointer-events: all !important;
        border: none;
    }

  .achat{
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
    height: auto;
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
    height: 420px;
    margin-right: 20px;
}
.villa:hover{
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.col_rent{
    position: absolute;
    top:-1%;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    color: blueviolet;
    box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
    font-weight: bold;
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
    opacity: 0.8;
}
.price:hover{
    background-color: blueviolet;
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
.pagination{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
   align-items: center;
}
.footer{
    bottom: 0;
}

.precedent,.suivant{
    width: 62px;
    height: 38px;
    border: none;
    background-color: rgb(23, 194, 190);
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.precedent:hover,.suivant:hover{
    background-color:hsl(240deg 7% 97%) ; 
    color: rgb(23, 194, 190);
    border: 1px solid rgb(23, 194, 190);
    cursor: pointer; 
}

.pagination .precedent.disabled,
.pagination .suivant.disabled{
    pointer-events: none;
    background-color: rgb(1, 228, 224);

}
.page{
    padding: 0 10px;
}
.hide{
	display: none;
}
.show{
	display: block;
	animation: show .5s ease;
}
@keyframes show{
    0%{
    	opacity:0;
    	transform: scale(0.9);
    }
    100%{
    	opacity:1;
    	transform: scale(1);
    }
}
@media (max-width:1024px) {
    .elment{
        height: auto;
    }
}
@media (max-width:768px) {
    .botton{
        text-align: center;
    }
}
@media (max-width:375px) {
    .villa{
        margin-left: -10%;
    }
}
@media (max-width:414px) {
    .villa{
        margin-left: -13%;
    }
}
@media (max-width:320px) {
    .villa{
        margin-left: -20%;
    }
}



 

</style>