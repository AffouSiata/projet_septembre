<template>
    <!-- <div class="espace"></div> -->
    <div>
        <modalComponent :modalite ="modalite" :modale="modale"/>
        <modifieComponent :mod ="mod" :modification="modification" :id="id"  :user="user"/>
        <div class="clique">
            <button @click="modale" class="ajout">Ajouter une maison</button>
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
                        <td class="images"><img :src="doc.images" alt=""></td>
                        <td>{{doc.nom}}</td>
                        <td>{{doc.cate}}</td>
                        <td>{{doc.prix}} FCFA</td>
                        <td>{{doc.pays}}</td>
                        <td>{{doc.ville}}</td>
                       <td class="lien">
                            <router-link to=""><i class="fa-sharp fa-solid fa-pen-to-square" @click="modification(doc.id)"></i></router-link>
                            <!-- <router-link to=""><i class="fa-solid fa-trash" ></i></router-link> -->
                            <router-link to=""><i class="fa-solid fa-trash" @click="supprime(doc.id)"  data-mdb-toggle="modal" data-mdb-target="#exampleModal"></i></router-link> 
                            <!-- <span ><i class="fa-solid fa-trash" ></i></span> -->
                        </td>
                    </tr>   
                </tbody>
            </table>
        </div>
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Supprimer un donné</h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="err">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>Cette action entraîne la suppression définitive de cette  donnée.</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btns" data-mdb-dismiss="modal">Annuler</button>
                        <button type="button" @click.prevent="suppresse" class="btne">Supprimer</button>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
        
       
    </div>
        
</template>

<script>
import modifieComponent from '../components/modalModi.vue'
import {homeColRef,storage} from '../firebase'
import modalComponent from '../components/modal.vue'
import {addDoc, getDocs,getDoc,doc, deleteDoc} from "firebase/firestore"


export default {
    name:"liste2Component",
    props:[],
    components:{
        modalComponent,
        modifieComponent
    },
    data(){
        return{
            modalite:false,
            mod:false,
            liste:[],
            id:"",
            user:""
            
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
                // this.$router.go()
            })
            .catch((error)=>{
                console.log("rdsxfxdf",error);
                console.log("vous avez mal renseignez vos données");
            })
        },
        async supprime(docId){
            this.id=docId
            // alert("City deleted successully!");
            // this.$router.go();

        },
        async suppresse(){
             let datasupp = doc(homeColRef,this.id)
            console.log("sip",this.id);
             await deleteDoc(datasupp) 
             this.$router.go()
        },
        async modification(docId){
            this.mod = !this.mod
            this.id =docId
            console.log("recccc",this.id);
            const docRef = await doc(homeColRef,this.id);
            console.log("redddddddd",docRef);
            const docSnap = await getDoc(docRef);
            this.user = docSnap.data()
            console.log("ffff",docSnap.data());
           

        }
       
    },
        
    // async uploadImage(e){
    //        let touslesimages =[];
    //        Object.values(e.target.files).forEach((elem)=>{
    //         console.log("images",elem.name);
    //         const file = elem
    //         const metadata ={
    //             contentType:"image/jpeg"
    //         }
    //         const storageRef = ref(storage,"images/" + file.name)
    //         touslesimages.push(uploadBytes(storageRef, file , metadata)
    //         .then(uploadResult =>{
    //             return getDownloadURL(uploadResult.ref)
    //         })
    //         )
    //        })
    //        const images = await Promise.all(touslesimages)
    //        this.image =images
    //        console.log("azertyuiolkjhgfds",this.image);

    // },
    async mounted(){
            const querySnapshot = await getDocs(homeColRef);
            let liste =[]
                querySnapshot.forEach((doc) => {
                    let listedata = doc.data()
                    listedata.id = doc.id;
                    liste.push(listedata);
                // console.log(doc.id, " => ", doc.data());
            }) 
            this.liste = liste 
            // console.log("ellleee",liste);



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
    button.ajout:hover{
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
    .btns{
        background-color: rgb(240, 236, 236);
        padding: 10px;
        border: none;
        color: #000;
        border-radius: 10px;
    }
    .btne{
        background-color: red;
        padding: 10px;
        border: none;
        color: #fff;
        border-radius: 10px;
    }
    .err{
        width: 43vh;
        display: flex;
        padding: 10px 0px 0 10px;
        border: 1px solid rgb(224, 224, 230);
        height: 60px;
        background-color: rgb(239, 148, 148);
        margin-right: 15px;
        border-radius: 10px;
    }
    .err i{
       color: red; 
       margin-right: 15px;
    }
    .err p{
        font-size: 14px;
        color: #fff;
    }

</style>