<template>
    <div>
        <h3>LA LISTE DES UTILISTATEURS</h3>

        
        <div class="letableau">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">email</th>
                        <th scope="col">Numero</th>
                        <th scope="col" class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>azerty</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td class="lien">
                            <router-link to=""><i class="fa-solid fa-trash"></i></router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>azerty</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td class="lien">
                            <router-link to=""><i class="fa-solid fa-trash"></i></router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>azerty</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td class="lien">
                            <router-link to=""><i class="fa-solid fa-trash"></i></router-link>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:"liste1Component"
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
</style>