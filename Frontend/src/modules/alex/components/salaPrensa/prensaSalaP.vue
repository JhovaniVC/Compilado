<template>
    <v-sheet>
        <v-container class="mt-16">
            <v-theme-provider class="mt-10">
                <v-responsive>
                    <section class="mt-10 mb-15">
                        <CardPrensa v-for="prensac in prensa" :key="prensac.id" :prensac="prensac"></CardPrensa>                        
                    </section>
                </v-responsive>
            </v-theme-provider>
        </v-container>
    </v-sheet>
</template>
<script>
import CardPrensa from './child/cardPrensa.vue';

    export default {
    name: "prensaSalaP",
    data() {
        return {
            show: false,
            prensa: [
                {
                    id: 1,
                    fecha: "2022-12-13",
                    autor: "Ayuntamiento de Felipe Carrillo Puerto",
                    title: "La Presidenta Municipal, Mary Hernández, entrega mobiliario y equipamiento para oficinas a cerca de 20 áreas en la administración del ayuntamiento.",
                    image: require('@/assets/alex/prensa2.jpg'),
                    content: "Con una inversión proveniente del Fondo Para el Desarrollo Institucional Municipal (PRODIM), la Presidenta Municipal, Mary Hernández, entregó mobiliario y equipamiento para oficinas a cerca de 20 áreas en la administración del ayuntamiento. La entrega de mobiliario y equipo es un compromiso con los trabajadores de las distintas áreas con el fin de mejorar la atención y rapidez a  la ciudadanía Carrilloportense.",
                },
                {
                    id: 2,
                    fecha: "2022-12-08",
                    autor: "Mary Hernández",
                    title: "¡Regresamos a casa FELICES y APROBADOS!",
                    image: require('@/assets/alex/prensa1.jpg'),
                    content: "Nuestra propuesta de Ley de Ingresos fue un éxito, mi compromiso siempre ha sido NO AUMENTAR NI CREAR MÁS IMPUESTOS. Siempre he tenido claro que la mejor manera de recaudar es NO ROBAR."
                },
                {
                    id: 3,
                    fecha: "2022-12-08",
                    autor: "Mary Hernández",
                    title: "La Presidenta Municipal Mary Hernández acompañada del Coordinador Estatal de Protección Civil",
                    image: require('@/assets/alex/prensa3.jpg'),
                    content: "La Presidenta Municipal Mary Hernández acompañada del Coordinador Estatal de Protección Civil, Guillermo Nuñez Leal, dieron el banderazo de inicio del Operativo “Guadalupe - Reyes” la mañana de este Jueves 08 de Diciembre. Mismo operativo buscará proteger y salvaguardar a los peregrinos guadalupanos locales y foráneos que transitan por calles y carreteras federales del municipio, así como a la ciudadanía en general durante estas fechas de convivencia decembrina."
                }
            ]
        };
    },
    created() {
    },
    components: { CardPrensa },
    methods:{

    }
}
</script>
<style scoped>
   
</style>