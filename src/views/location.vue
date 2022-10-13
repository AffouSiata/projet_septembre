<template>
    <div class="location">
        <navbarComponent/>
    </div>
    
    <div class="contenu">
        <div class="element" ref="ss">
             <div class="villa" v-for="doc in local" :key="doc.id">
                 <div class="villa1">
                     <img :src="doc.images[0]" alt="">
                     <div class="col_rent">{{doc.cate}}</div> 
                     <div class="price">{{doc.prix}} FCFA</div>
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
    </div>
    <!-- <nav aria-label="Page navigation example">
		<ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
                    
				</li>
				<li class="page-item">
					<button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+4)" :key="pageNumber"  @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
		</ul>
	</nav>	 -->



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
     name:'location',
     components:{
         navbarComponent,
         footerComponent
     },
     data(){
         return{
            local:[],
            current: 1,
            paginate: 7,
            paginate_total: 0,
            search_filter: '',
            status_filter: ''
			// page: 1,
			// perPage: 4,
            // pages: []
         
            
         }
     },
    methods:{
        detailsplus(id){
        //   console.log("nid",id);
          this.$router.replace(`/details/${id}`)
        },
        setPaginate: function (i) {
            if (this.current == 1) {
                return i < this.paginate;
            }
            else {
                return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
            }
        },
        setStatus: function (status) {
            this.status_filter = status;
            this.$nextTick(function () {
                this.updatePaginate();
            });
        },
        updateCurrent: function (i) {
            this.current = i;
        },
        updatePaginate: function () {
            this.current = 1;
            this.paginate_total = Math.ceil(document.querySelectorAll('.villa').length/this.paginate);
        }



        // getLocal() {

        //     console.log("mmmmm",this.local);
        
        //     let data = [];
        //     for(let i = 0; i < this.local; i++){
                
        //         this.local.push();
        //     }  
		// },
        // setPages() {
		// 	let numberOfPages = Math.ceil(16 / this.perPage);
		// 	for (let index = 1; index <= numberOfPages; index++) {
		// 		this.pages.push(index);
		// 	}
		// },
		// paginate(local) {
		// 	let page = this.page;
		// 	let perPage = this.perPage;
		// 	let from = (page * perPage) - perPage;
		// 	let to = (page * perPage);
		// 	return local.slice(from, to);
		// }


    },
    async mounted(){
         const q = query(homeColRef, where("cate", "==", "A louer"));
              console.log("ddddd",q);
              const snapSnapshot = await getDocs(q);
              let local = [];
              console.log("ssssss",snapSnapshot);
              snapSnapshot.forEach((doc) => {
                 let homedata = doc.data()
                 homedata.id = doc.id;
                 local.push(homedata);
            //   console.log(doc.id, " => ", homedata);
            
         });
         this.local = local;
         this.setStatus()
         this.updateCurrent()
         this.updatePaginate()

    },
    created() {
     this.paginate_total = this.local.length/this.paginate;
   },
    // computed: {
	// 	displayedPosts () {
	// 		return this.paginate(this.local);
	// 	}
	// },
    // watch: {
	// 	local () {
	// 		this.setPages();
	// 	}
	// },
    // created(){
	// 	this.getLocal();
	// },
    // filters: {
	// 	trimWords(value){
	// 		return value.split(" ").slice(0,4).join(" ") + '...';
	// 	}
	// }
   
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

button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
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
 /* height: 1900px; */
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

.precedent{
    width: 62px;
    height: 38px;
    border: none;
    background-color: blueviolet;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.suivant{
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
@media (max-width:1600px) {
    .elment{
        height: auto;
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