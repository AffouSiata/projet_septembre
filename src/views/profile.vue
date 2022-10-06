<template>
<div class="wrapper">
    <div class="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100">
        <h4>{{homedocSnappe.nom}}</h4>
         <p>Developer Junior</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>{{homedocSnappe.email}}</p>
                    {{}}
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>{{homedocSnappe.numero}}</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
      
        <div class="social_media">
            <ul>
              <li><a href="https://www.facebook.com/campaign/landing.php?&campaign_id=1641144407&extra_1=s%7Cc%7C513002250215%7Ce%7Cfacebook%27%7C&placement=&creative=513002250215&keyword=facebook%27&partner_id=googlesem&extra_2=campaig"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/?lang=fr"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/?hl=fr"><i class="fab fa-instagram"></i></a></li>
          </ul>
          <div class="btne">
              <button class="mod">Modifier</button>
              <button class="sup">Supprimer</button>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import { homeColRefs,auth} from '../firebase' 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
export default {
    name:"profile",
    data(){
        return{
            id:"",
            homedocSnappe:''
        }
    },
    props:['id'],
    methods: {
        
    },
    async mounted() {

        const profille = getAuth();
           await onAuthStateChanged(profille,(user) => {
            if (user) { 
               this.id = user.uid;
                console.log("zzzzzz",this.id  );
                const docReffe =  doc(homeColRefs, this.id);
                const docSnappe =  getDoc(docReffe)

                .then(doc=>{
                    this.homedocSnappe = doc.data()
                    console.log("ddddt",this.homedocSnappe);
                    console.log("edfff",this.id);
                })
                .catch(err=>{
                    console.log(err);
                })
                // if (docSnappe.exists()){
                // this.homedocSnappe= docSnappe
                // console.log("Document data:", this.homedocSnappe);
                // } 
                // else {
                // console.log("No such document!");
                // }
                this.connecte= true
            } else {
              
            }
        });
        

      
       
        
    },
    created() {
        
    },
    setup() {
        
    }

}
</script>

<style scoped>

 .wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1100px;
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
}

.wrapper .left{
  width: 35%;
  background: linear-gradient(to right,#b073d9,#b073d9);
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
}

.wrapper .left img{
    height: 300px;
    width: 300px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.wrapper .left h4{
  margin-bottom: 10px;
  font-size: 30px;
}

.wrapper .left p{
  font-size: 15px;
}

.wrapper .right{
  width: 65%;
  background: #fff;
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.wrapper .right .info,
.wrapper .right .projects{
  margin-bottom: 25px;
}

.wrapper .right .info h3,
.wrapper .right .projects h3{
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e0e0e0;
    color: #353c4e;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.wrapper .right .info_data,
.wrapper .right .projects_data{
  display: flex;
  justify-content: space-between;
}

.wrapper .right .info_data .data,
.wrapper .right .projects_data .data{
  width: 45%;
}

.wrapper .right .info_data .data h4,
.wrapper .right .projects_data .data h4{
    color: #353c4e;
    margin-bottom: 5px;
}

.wrapper .right .info_data .data p,
.wrapper .right .projects_data .data p{
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
}
.social_media {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
}

.wrapper .social_media ul{
  display: flex;
}

.wrapper .social_media ul li{
  width: 45px;
  height: 45px;
  background: linear-gradient(to right,#b073d9,#b073d9);
  margin-right: 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 45px;
}

.wrapper .social_media ul li a{
  color :#fff;
  display: block;
  font-size: 18px;
}
.sup{
    padding: 10px 10px;
    margin: 0px 10px;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 10px;
}
.mod{
    padding: 10px 10px;
    margin: 0px 10px;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 10px;
    background-color: blueviolet;
}
</style>