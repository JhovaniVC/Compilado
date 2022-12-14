<template>
    <v-container class="mt-16">
        <v-theme-provider>
            <v-responsive>
                <section class="mt-16">
                  <v-card class="mt-16" >
                        <v-row justify="center">
                        <v-card width="80%">
                            <h1 class="text-center">Autor</h1>
                            <v-container fluid>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                <v-row dense>
                                        <v-text-field label="Nombre" outlined dense v-model="name" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col cols="4">
                                            <v-text-field label="Número" v-mask="'####-##-##'" outlined dense v-model="mobile" ></v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field label="Correo" outlined dense v-model="email" ></v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                          <v-select
                                          outlined
                                          dense
                                          v-model="select"
                                          :items="items"
                                          item-text="type"
                                          label="Tipo"
                                          persistent-hint
                                          return-object
                                          single-line
                                          ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-btn
                                    rounded
                                    color="primary"
                                    @click="guardar"
                                    dark
                                    >
                                    Guardar
                                    </v-btn>
                                </v-form>
                            </v-container>
                        </v-card>
                    </v-row>
                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
 import {  requestPost, requestGet } from "../../../globals/getAxios"
    export default {
        name:'autorLA',
        data(){
            return{
                valid:true,
                items: null,
                select: "",
                type: "",
                name:"",
                mobile: "",
                email: "",

            }
        },
        created(){
          this.inicio()
        },
        methods:{
          async inicio(){
            const lista = await requestGet('landing/Nombra')
            this.items = lista
            console.log(lista);
          },
          async guardar (){
            if (this.$refs.form.validate()){
              console.log(this.name, this.mobile, this.email);
              const res= await requestPost("/landing/SN", [this.name, this.mobile, this.email])
              console.log(res)

            }
            
          }
        },
    }
</script>
<style scoped>
   
</style>