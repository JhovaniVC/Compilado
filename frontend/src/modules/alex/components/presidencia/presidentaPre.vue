<template>
    <v-container class="mt-16">
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section class=" mb-15">
                    <v-card class="mx-auto pa-3 mt-12"
                        max-width="1200">
                        <v-img 
                        height="150"
                        width="150"
                        class="mx-auto mt-3 rounded-circle"
                        :src= "require('@/assets/alex/MaryHernandezP.jpg')"
                        ></v-img>
                        <div class="text-center">
                            <h1 class=" mt-5 title"> Mary Hernández Solís </h1>
                            <p class="font-weight-medium" >Presidenta Municipal de Felipe Carrillo Puerto, Quintana Roo</p>
                            <div class="text-justify">
                                <p>Con mis 27 años representó a la juventud y a las mujeres, soy la única militante que logró una candidatura en el estado, estoy buscando retomar la originalidad retomar el proyecto del Movimiento de Regeneración Nacional, (Morena), es muy lamentable que en este proceso electoral no se hayan podido ver los cuadros políticos que Morena ha estado haciendo. Mi meta más grande y que nunca imagine tener, fueron el ser Presidenta del Municipio de Felipe Carrillo Puerto, todo esto lo agradezco a mis seguidores y a los militantes de Morena, quienes integraron la coalición "Juntos Haremos Historia de Quintana Roo".</p>
                                <p>Soy egresada de la Universidad Interamericana para el Desarrollo (UNID) Chetumal, estudie Licenciatura en Ciencias de la Comunicación, igualmente tengo una certificación profesional de inglés por parte de TOEIC, empece trabajando en el Hotel "El faisán y el venado" como administradora, mi segundo empleo fue Radiodifusora XENKA en locución y administración fonotecaria, por último mi trabajo antes de ser Presidenta fue Poder joven radio y fui locutora y coordinadora municipal.</p>
                            </div>
                            <div>
                                <h1 class="font-weight-bold ma-5 ">Mis redes sociales</h1>
                                    <v-row class="justify-center pa-4">
                                        <div class="facebook ma-1">
                                            <a href="https://www.facebook.com/MaryHernandezFCP" target="_blank"><v-icon color="white">mdi-facebook</v-icon></a>
                                        </div>
                                        <div class="instagram ma-1">
                                            <a href="https://instagram.com/ma.ryhernandez?igshid=YmMyMTA2M2Y=" target="_blank"><v-icon color="white">mdi-instagram</v-icon></a>
                                        </div>
                                        <div v-if="$route.path == '/'">
                                        <sheet-page class="pt-9"></sheet-page>
                                        </div>
                                        <router-view max-height="1000" />
                                    </v-row>
                            </div>
                        </div>

                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default{
        name:'presidentaPre',
        data(){
            return{
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
    
    .facebook
{
    background: #3b5998;
    padding: 20px 30px;
    color: #fff;
    outline: none;
    text-decoration:none
}
.instagram
{
    background: #d6164df4;
    padding: 20px 30px;
    color: #fff;
    outline: none;
    text-decoration:none;
}
</style>