<template>
    <!-- <div class="espace"></div> -->
    <div>
        <modalComponent :modalite ="modalite" :modale="modale"/>
        <div class="clique">
            <button @click="modale">Ajouter une maison</button>
        </div>
        <h2>LA LISTE DES BIENS POSTÉS</h2>
        <div class="letableau" ref="tableau">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Images</th>
                        <th scope="col">Nom du bien</th>
                        <th scope="col">Status</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Ville</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="doc in liste" :key="doc.id">
                        <td class="images"><img :src="doc.images[0]" alt=""></td>
                        <td>{{doc.nom}}</td>
                        <td>{{doc.cate}}</td>
                        <td>{{doc.prix}}</td>
                        <td>{{doc.pays}}</td>
                        <td>{{doc.ville}}</td>
                       <td class="lien">
                            <router-link to="`/modifie/${doc.id}`"><i class="fa-sharp fa-solid fa-pen-to-square"></i></router-link>
                            <!-- <router-link to=""><i class="fa-solid fa-trash" ></i></router-link> -->
                            <span @click.prevent="supprime(doc.id)"><i class="fa-solid fa-trash" ></i></span>
                        </td>
                    </tr>   
                </tbody>
            </table>
        </div>
        
       
    </div>
        
</template>

<script>
import modalComponent from '../components/modal.vue'
import {homeColRef,storage} from '../firebase' 
import {addDoc, getDocs,doc, deleteDoc} from "firebase/firestore"
import {ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
export default {
    name:"liste2Component",
    props:[],
    components:{
        modalComponent
    },
    data(){
        return{
            modalite:false,
            liste:[],
            
        }
    },
   
    methods:{
        modale(){
            this.modalite = !this.modalite
        },
       
        adminstrateur(){
            let element={
                cate:this.cate,
                nom:this.nom,
                prix:this.prix,
                chambre:this.chambre,
                pays:this.pays,
                bain:this.bain,
                ville:this.ville,
                adresse:this.adresse,
                superficie:this.superficie,
                message:this.message,
                images:this.image,
                type:this.type
               
            }

            console.log('element',element);
            addDoc(homeColRef,element).then((adm)=>{
                console.log("res",adm);
                this.$router.replace('/admin')
            })
            .catch((error)=>{
                console.log("rdsxfxdf",error);
                console.log("vous avez mal renseignez vos données");
            })
        },
        async supprime(docId){
            let datasupp = doc(homeColRef,docId)
            await deleteDoc(datasupp) 
            alert("City deleted successully!");
            // this.$router.go();

        },
       
    },
        
    async uploadImage(e){
           let touslesimages =[];
           Object.values(e.target.files).forEach((elem)=>{
            console.log("images",elem.name);
            const file = elem
            const metadata ={
                contentType:"image/jpeg"
            }
            const storageRef = ref(storage,"mesImages/" + file.name)
            touslesimages.push(uploadBytes(storageRef, file , metadata)
            .then(uploadResult =>{
                return getDownloadURL(uploadResult.ref)
            })
            )
           })
           const images = await Promise.all(touslesimages)
           this.image =images
           console.log("azertyuiolkjhgfds",this.image);

    },
    async mounted(){
            const querySnapshot = await getDocs(homeColRef);
            console.log("lllllll",querySnapshot);
            let liste =[]
                querySnapshot.forEach((doc) => {
                    let listedata = doc.data()
                    listedata.id = doc.id;
                    liste.push(listedata);
                console.log(doc.id, " => ", doc.data());
            }) 
            this.liste = liste 



        this.$refs.tableau.scrollTop= this.$refs.tableau.scrollHeight
        this.$refs.tableau.scrollTo= (0,document.body.scrollHeight)
    }

}
</script>

<style scoped>
   .letableau{
       height: 75vh;
       overflow-y: scroll;
   }
    button{
        margin: 20px;
        padding: 10px;
        background-color: blueviolet;
        border: none;
        border-radius: 10px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    button:hover{
        color: blueviolet;
        border: 2px solid blueviolet;
        background-color: #fff;
        transition: 0.5s all;
    }
    h2{
        text-align: center;
        font-size: 50px;
    }
    table{
        width: 100%;
        /* margin: 50px 20px 0 50px; */
    }
    th{
        font-size: 20px;
        background-color: rgb(195, 141, 244);
        font-weight: bold;
        text-align: center;
        color: #fff;
        /* position: fixed; */
    }
    td{
        text-align: center;
        font-weight: bold;
    }
    .images img{
        height: 50px;
        width: 150px;
        object-fit: cover;
    }
    .lien{
        text-align: center;
    }
    .lien a{
        margin-right:20px;
        
    }
    .lien i{
        font-size: 30px;
    }
    .lien span{
        background: none;
        cursor: pointer;
    }
    .fa-trash{
        color: red;
    }

</style>