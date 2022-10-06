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
            <div class="villa" v-for="doc in sale" :key="doc.id" v-else>
                <div class="villa1">
                    <img :src="doc.images[0]" alt="">
                    <div class="col_rent">{{doc.cate}}</div> 
                </div>
                <div class="villa2">
                    <h2>{{doc.nom}}</h2>
                    <p>{{doc.message}}</p>
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
        <div class="precedent" >Prev</div>
        <div class="page">Page <span class="page-num"></span></div>
        <div class="suivant">Next</div>
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
            aucun:""
        }
    },
    methods:{
        details(id){
          console.log("monnnid",id);
          this.$router.replace(`/details/${id}`)
        },

        // long(tab){
        //     let i = 1
        //  while (tab[i] != undefined) {
        //         i++
                
        //     }
        //     console.log("dwf",i);
        //     return i      
        // }
      
    },
    async mounted(){

        const q = query(homeColRef, where("cate", "==", "A vendre"));
             console.log("ddddd",q);
             const snapSnapshot = await getDocs(q);
             console.log("ta",snapSnapshot);
            if(snapSnapshot.docs.length > 0){
                let sale = [];
                    console.log("ssssss",snapSnapshot);
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

        let pam = document.querySelector('.element')
        console.log("pagination",pam.length)  
        const prev=document.querySelector(".precedent");
        const next=document.querySelector(".suivant");
        const page=document.querySelector(".page-num");
        const maxItem=3;
        let index=1;
        const pagination=Math.ceil(pam.length/maxItem);
        const pagine =pam.length/maxItem;
        console.log("pppppp",pagination);
        console.log("vvvvv",pagine);
           

        prev.addEventListener("click",function(){
        index--;
        check();
        showItems();
        })
        next.addEventListener("click",function(){
            index++;
            check();
        showItems();  
        })

        function check(){
            if(index==pagination){
                next.classList.add("disabled");
            }
            else{
                next.classList.remove("disabled");	
            }

            if(index==1){
                prev.classList.add("disabled");
            }
            else{
                prev.classList.remove("disabled");	
            }
        }
        function showItems() {
        for(let i=0;i<pam.length; i++){
         pam[i].classList.remove("show");
         pam[i].classList.add("hide");


        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
           pam[i].classList.remove("hide");
           pam[i].classList.add("show");
        }
        page.innerHTML=index;
      }

          
 }

       
    },
}
</script>

<style scoped>
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
height: 100vh;
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
}
.footer{
    bottom: 0;
}
.pagination{
    display: flex;
    width: 100%;
   /* border: 1px solid red; */
   align-items: center;
    justify-content: center;
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
 

</style>