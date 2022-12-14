<template>
    <v-sheet>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section class="mt-15 mb-15">
                    <v-row class="justify-center">
                        <v-col lg="12" md="8" sm="8" v-for="aviso in avisos" :key="aviso.id">
                            <CardAvisos  :aviso="aviso"></CardAvisos>
                        </v-col>
                    </v-row>
                </section>
            </v-responsive>
        </v-theme-provider>         
    </v-sheet>
</template>
<script>
import CardAvisos from './child/cardAvisos.vue';
// import { requestGET } from '../../../globals/getAxios'

export default {
    name: "avisosSalaP",
    data() {
        return {
            show: false,
            avisos: [
                {
                    id: 1,
                    categoria: "Política",
                    fecha: "2022-12-12",
                    autor: "Ayuntamiento de Felipe Carrillo Puerto",
                    title: "Convenio de mutuo acuerdo junto a la Cámara Nacional del Comercio, Servicios y Turismo de Chetumal Delegación Felipe Carrillo Puerto (CANACO SERVYTUR FCP)",
                    image: require('@/assets/alex/Aviso2.jpg'),
                    content: "La Presidenta Municipal, Mary Hernández, celebra esta tarde un convenio de mutuo acuerdo junto a la Cámara Nacional del Comercio, Servicios y Turismo de Chetumal Delegación Felipe Carrillo Puerto (CANACO SERVYTUR FCP) para otorgar a los agremiados estímulos como: <br> ☑️ Pago de impuesto predial 2023: 50% de descuento del 28 de Noviembre al 30 de Diciembre de 2022 y del 25% de descuento del 02 de Enero al 28 de febrero de 2023.<br>☑️ Cédulas catastrales 2023: 50% de descuento del 28 de Noviembre de 2022 al 28 de febrero de 2023.<br>☑️ Trámite administrativo de licencia de funcionamiento: 50% de descuento del 02 de enero al 28 de febrero de 2023.<br>☑️ Licencia de conducir 2023 (para chofer, automovilista o motociclista): 50% de descuento del 28 de Noviembre de 2022 al 31 de octubre de 2023.<br>☑️ Recoja de basura 2023: 50% de descuento en todos los giros del 02 de enero al 28 de febrero de 2023.<br>☑️ Constancia de protección civil 2023: 50% de descuento en todos los giros del 02 de enero al 28 de febrero de 2023.<br>☑️ Uso de suelo 2023: 50% de descuento del 28 de Noviembre de 2022 al 28 de febrero de 2023. No aplica en bebidas alcohólicas.",                      
                },
                {
                    id: 2,
                    categoria: "Política",
                    fecha: "2022-12-12",
                    autor: "Ayuntamiento de Felipe Carrillo Puerto",
                    title: "DIF entrega sillas de de ruedas y aparatos funcionales a ciudadanas y ciudadanos en situación de vulnerabilidad.",
                    image: require('@/assets/alex/Aviso3.jpg'),
                    content: "La Presidenta Municipal, Mary Hernández, agradeció este Lunes la gestión por parte de la Beneficiencia Pública Nacional, a través de la Administración del Patrimonio de la Beneficiencia Pública del Estado y el apoyo de la Presidenta Honoraria María del Carmen Solís Sánchez y del Sistema DIF Felipe Carrillo Puerto por la entrega sillas de ruedas y aparatos funcionales a ciudadanas y ciudadanos en situación de vulnerabilidad."
                    },
                    {
                    id: 3,
                    categoria: "Sociedad",
                    fecha: "12-12-2022",
                    autor: "Ayuntamiento de Felipe Carrillo Puerto",
                    title: "Comunicado oficial de la junta municipal del servicio militar nacional",
                    image: require('@/assets/alex/Aviso4.jpg'),
                    content: "Se le comunica a todos los enlistados del servicio militar clase 2003 y remisos que tratataron en el año 2021" },
                    {
                    id: 4,
                    categoria: "Política",
                    fecha: "2022-12-09",
                    autor: "Ayuntamiento de Felipe Carrillo Puerto",
                    title: "La Presidenta Municipal Mary Hernández se sumó a una gran alianza que declara a Felipe Carrillo Puerto como Municipio Abierto y de Parlamento Abierto en conjunto con los 10 municipios del Estado.",
                    image: require('@/assets/alex/Aviso5.jpg'),
                    content: "Este Viernes 09 de Diciembre en la ciudad de #Cancún con la Presencia de la Gobernadora del Estado, Mara Lezama, la Presidenta Municipal Mary Hernández se sumó a una gran alianza que declara a Felipe Carrillo Puerto como Municipio Abierto y de Parlamento Abierto en conjunto con los 10 municipios del Estado. Así, QuintanaRoo logra ser el primer Estado de la República Mexicana donde todos sus municipios se adhieren a los principios de honestidad y transparencia." 
                    },
                    {
                    id: 5,
                    categoria: "Cultural",
                    fecha: "2022-12-09",
                    autor: "Pedro Pony",
                    title: "Ruta que tendrá la caravana de antorchistas guadalupanos el 12 de diciembre en nuestro municipio y así como las afectaciones viales que tendrá.",
                    image: require('@/assets/alex/Aviso6.jpg'),
                    content: "Conoce la ruta que tendrá la caravana de antorchistas guadalupanos el 12 de diciembre en nuestro municipio y así como las afectaciones viales que tendrá.<br>El cierre de la vialidad sera a partir de las 07:00 pm. ¡Tome sus precauciones!<br>Punto de reunion de peregrinos: Costado de la escuela normal Recorido: Calle 66 / Av. Lázaro Cárdenas Lugar de llegada: Capilla de la Virgen de Guadalupe."
                    },
                    // {
                    // id: 7,
                    // categoria: "Cultural",
                    // fecha: "31-10-2022",
                    // autor: "Protección Civil Felipe Carrillo Puerto",
                    // title: "Concluyen actividades culturales del Jaanal PIxan 2022 en Felipe Carrillo Puerto",
                    // image: require('@/assets/alex/aviso6.jpg'),
                    // content: "Con el Parque central Ignacio Zaragoza lleno, continuaron las actividades de clausura del Jaanal Pixan 2022, en Felipe Carrillo Puerto. La Orquesta Polifacética Municipal abrió la noche interpretando melodías de su repertorio que animaron a los asistentes a ritmo de cumbias, danzones y jaranas. Vestidos de negro y maquillados de calaveras, integrantes del Ballet Folclórico del Cbtis 72 presentaron una estampa con melodías alusivas a las ausencias, al amor y la muerte. En su participación incluyeron melodías de diferentes estados de la República, en un colorido despliegue de colores y coreografías. El público se entregó con intensidad aplaudiendo al concluir cada pieza interpretada, incluidos turistas extranjeros que presenciaban el espectáculo. La velada transcurrió con las dos enormes figuras de catrinas colocadas en el centro de la plaza: dos simbólicos testigos de esta celebración de Jaanal Pixan. También el Ballet Folclórico Independiente “Uh Yuumilo’ob K’iin” presentó una estampa del estado de Guerrero en la que interpretaron piezas como la Calaca, el Toro rabón y las Amarillas. El cierre de la velada estuvo a cargo del Ballet Folclórico del Instituto Tecnológico, con una rítmica y colorida estampa sinaloense. Bajo el estilo musical de Sinaloa, ejecutaron La Bruja, el Sauce y la Palma, El Toro Mambo y el sinaloense." 
                    // }

                
            ]
            // avisos:[],
        };
    },
    created() {
        // this.getData()
    },
    components: { CardAvisos },
    methods:{
        // async getData(){
        //     const datos = await requestGET("/autho/schema")
        //     this.avisos = datos
        //     console.log(datos);
        // },
    },
}
</script>
<style scoped>

</style>