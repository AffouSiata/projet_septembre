<template>
    <div>
        <h1>Nos services</h1>
            <div class="containe">
                <div class="cards">
                    <div class="card" v-for="donne in donnes" :key="donne.id">
                        <div class="container">
                            <img src="../assets/maison1.jpg" alt="">
                            <div class="col_rent">{{donne.vente}}</div>
                            <div class="price">{{donne.price}} USD</div>
                        </div>
                        <div class="details">
                            <h2>{{donne.nom}}</h2>
                            <p>{{donne.description}}</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:{{donne.bed}} </span></i>
                                <i class="fa fa-shower"><span> Bath: {{donne.bath}} </span></i>
                                <i class="fa fa-th"><span>   {{donne.th}} SF </span></i>
                                
                            </div>
                        </div>
                    </div>
                    <div class="card" v-for="donne in donnes" :key="donne.id">
                        <div class="container">
                            <img src="../assets/maison1.jpg" alt="">
                            <div class="col_rent">{{donne.vente}}</div>
                            <div class="price">{{donne.price}} USD</div>
                        </div>
                        <div class="details">
                            <h2>{{donne.nom}}</h2>
                            <p>{{donne.description}}</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:{{donne.bed}} </span></i>
                                <i class="fa fa-shower"><span> Bath: {{donne.bath}} </span></i>
                                <i class="fa fa-th"><span>   {{donne.th}} SF </span></i>
                                
                            </div>
                        </div>
                    </div>
                    <div class="card" v-for="donne in donnes" :key="donne.id">
                        <div class="container">
                            <img src="../assets/maison1.jpg" alt="">
                            <div class="col_rent">{{donne.vente}}</div>
                            <div class="price">{{donne.price}} USD</div>
                        </div>
                        <div class="details">
                            <h2>{{donne.nom}}</h2>
                            <p>{{donne.description}}</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:{{donne.bed}} </span></i>
                                <i class="fa fa-shower"><span> Bath: {{donne.bath}} </span></i>
                                <i class="fa fa-th"><span>   {{donne.th}} SF </span></i>
                                
                            </div>
                        </div>
                    </div>
                    <div class="card" v-for="donne in donnes" :key="donne.id">
                        <div class="container">
                            <img src="../assets/maison1.jpg" alt="">
                            <div class="col_rent">{{donne.vente}}</div>
                            <div class="price">{{donne.price}} USD</div>
                        </div>
                        <div class="details">
                            <h2>{{donne.nom}}</h2>
                            <p>{{donne.description}}</p>
                            <div class="villa21">
                                <i class="fa fa-bed"><span> Bed:{{donne.bed}} </span></i>
                                <i class="fa fa-shower"><span> Bath: {{donne.bath}} </span></i>
                                <i class="fa fa-th"><span>   {{donne.th}} SF </span></i>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"cadresComponent",data(){
        return{
            donnes:[
                {
                    id:1,
                    images:'../assets/maison1.jpg',
                    vente:'For Rent',
                    location:'For Sale',
                    price:2000,
                    nom:'Centennial Drive',
                    description:'Taking transformation mapping and above all, create synergy....',
                    bed: 4,
                    bath: 4,
                    th: 2750
                }
            ]

        }
    }
}
</script>

<style scoped>


h1{
        text-align: center;
        text-transform: uppercase;
        color: black;
        font-size: 50px;
        padding: 30px;
    }
    .containe{
        width: 510px;
        height: 430px;
        display: grid;
    }
    .cards{
        display: flex;
        
        grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
        padding: 20px;
        grid-gap:40px;
        
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
        top:-1%;
        background-color:black;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
    }  
    .price{
        position: absolute;
        top:45%;
        background-color: black;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        box-shadow: 2px 2px 2px 2px rgb(79, 77, 77);
        opacity: 0.6;
    }
    .card{
        border-radius: 20px;
        box-shadow: 0 0 30px rgba(0,0,0,0.18);
        padding-left:-30px
    }
    .container img{
        width: 455px;
        display: block;
         
    }



</style>