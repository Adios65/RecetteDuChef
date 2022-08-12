<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
             <ion-back-button @click="this.router.back()"></ion-back-button>
        </ion-buttons>
        <ion-title>Seafood</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>    
      <div id="ion-text-center">
        <ion-item v-for="(item, index) in this.maListe" :key="index" :value="item.id">
          <ion-avatar> <ion-img :src="item.image"></ion-img> </ion-avatar>
          <ion-button @click="() => router.push('/DetailsRecette/'+item.id)"><ion-label>&nbsp;&nbsp;{{item.nom}}</ion-label></ion-button>
        </ion-item>
      </div>
    </ion-content>

    <ion-footer>
        <ion-toolbar color="secondary">
            <ion-title></ion-title>
        </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButtons, IonBackButton, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonButtons, 
    IonBackButton,
  },
  setup(){
    const route = useRoute();
    const router = useRouter();
    return {route,router};
  },
  data(){
    return {
        maListe:[{}],
    }
  },

  ionViewDidEnter() {
    this.getCategory();
  },

  methods:{
    async getCategory() {
        let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp: object[] = [];
            for (let i=0; i < data.meals.length; i++) {
                temp.push({id: data.meals[i].idMeal, nom: data.meals[i].strMeal, image: data.meals[i].strMealThumb});
            }
            this.maListe = temp;
        })
    }
  }
});
</script>

<style scoped>
.milieu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
