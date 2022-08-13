<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button @click="this.router.back()"></ion-back-button>
        </ion-buttons>
        <ion-title>Recette</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-item>
        <ion-img :src="this.maListe[0].image"></ion-img> </ion-item
      ><br />
      <ion-label id="meal-title">{{ this.maListe[0].nom }}</ion-label
      ><br /><br />
      <ion-label id="ion-label">Origine: {{ this.maListe[0].origine }}</ion-label
      ><br />
      <ion-label id="ion-label">Catégorie: {{ this.maListe[0].categorie }}</ion-label
      ><br /><br />
      <ion-label id="title2">Ingrédients</ion-label><br />
      <ul id="ingredientsList" v-for="item in this.maListe[0].ingredients" :key="item">
        <li v-if="item.length > 1">
          <small>{{ item }}</small>
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    return { route, router, id };
  },
  data() {
    return {
      maListe: [{}],
    };
  },

  ionViewDidEnter() {
    this.getJSON();
  },

  methods: {
    async getJSON() {
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + this.id;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let temp: object[] = [];
          temp.push({
            id: data.meals[0].idMeal,
            nom: data.meals[0].strMeal,
            origine: data.meals[0].strArea,
            categorie: data.meals[0].strCategory,
            image: data.meals[0].strMealThumb,
            ingredients: [
              data.meals[0].strIngredient1,
              data.meals[0].strIngredient2,
              data.meals[0].strIngredient3,
              data.meals[0].strIngredient4,
              data.meals[0].strIngredient5,
              data.meals[0].strIngredient6,
              data.meals[0].strIngredient7,
              data.meals[0].strIngredient8,
              data.meals[0].strIngredient9,
              data.meals[0].strIngredient10,
              data.meals[0].strIngredient11,
              data.meals[0].strIngredient12,
              data.meals[0].strIngredient13,
              data.meals[0].strIngredient14,
              data.meals[0].strIngredient15,
              data.meals[0].strIngredient16,
              data.meals[0].strIngredient17,
              data.meals[0].strIngredient18,
              data.meals[0].strIngredient19,
              data.meals[0].strIngredient20,
            ],
          });

          this.maListe = temp;
        });
    },
  },
});
</script>

<style scoped>
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

#meal-title {
  font-size: x-large;
  padding-left: 20px;
}
#title2 {
  font-size: large;
  padding-left: 20px;
}

#ion-label {
  font-size: small;
  color: #8c8c8c;
  padding-left: 20px;
}

#ingredientsList {
  padding-left: 55px;
  line-height: 0px;
  color: #8c8c8c;
}
</style>
