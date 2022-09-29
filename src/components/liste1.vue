<template>
    <div>
        <h3>LA LISTE DES UTILISTATEURS</h3>
        <div class="letableau">
            <table class="table table-bordered">
               
                <thead >
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">email</th>
                        <th scope="col">Numero</th>
                        <th scope="col" class="text-center">Actions</th>
                    </tr>
                </thead> 
                <div v-if="aucun" class="aucune">
                    {{aucun}}
                </div>
                
                <tbody v-else>
                    <tr v-for="doc in mesliste" :key="doc.id" >
                        <td>{{doc.nom}}</td>
                        <td>{{doc.prenom}}</td>
                        <td>{{doc.email}}</td>
                        <td>{{doc.numero}}</td>
                        <td class="lien">
                            <router-link to=""><i class="fa-solid fa-trash" @click="supmodale(doc.id)"  data-mdb-toggle="modal" data-mdb-target="#exampleModal"></i></router-link> 
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
                        <button type="button" @click.prevent="suppression" class="btne">Supprimer</button>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import {homeColRefs} from '../firebase' 
import {getDocs,doc, deleteDoc} from "firebase/firestore"
export default {
    name:"liste1Component",
    component:{
    },
    data(){
        return{
            mesliste:[],
            aucun:"",
            id:""
        }
    },
    methods:{
        async supmodale(docId){
            this.id=docId

        },
        async suppression(){
            let supp = doc(homeColRefs,this.id)
            console.log("suppression",supp);
            await deleteDoc(supp) 
            this.$router.go()

        },

    },
    async mounted(){
            const querySnapshot = await getDocs(homeColRefs);
            console.log("lllllll",querySnapshot);
            if(querySnapshot.docs.length > 0){
                let mesliste =[]
                querySnapshot.forEach((doc) => {
                    let meslistedata = doc.data()
                    meslistedata.id = doc.id;
                    mesliste.push(meslistedata);
                console.log(doc.id, " => ", doc.data());
                }) 
                this.mesliste = mesliste 
            }
            else{
                this.aucun ="Aucun utilisateur Inscrire "
                console.log("ccfvcvgcfgvfbg");
            }
    },
    
}
</script>

<style scoped>
    table{
        width: 95%;
        margin: 50px 40px 0 50px;
    }
    th{
        font-size: 20px;
        background-color: rgb(195, 141, 244);
        font-weight: bold;
        text-align: center;
        color: #fff;
    }
    td{
        text-align: center;
        font-weight: bold;
    }
    h3{
        text-align: center;
        font-size: 70px;
    }
    .sup{
        border: 2px solid black;
        width: 100px;
        margin:50px ;
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
    .fa-trash{
        color: red;
    }
    .aucune{
        border: 2px solid blueviolet;
        padding: 20px;
        height: 200px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160vh;
        position: absolute;
        font-size: 50px;
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