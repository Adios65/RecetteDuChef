<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Recette du moment</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="mainContainer">
        <div id="imageContainer">
          <ion-img class="rounded" :src="this.maListe[0].image"></ion-img>
        </div>

        <br />
        <br />
        <ion-label class="titleOne">{{ this.maListe[0].nom }}</ion-label>

        <br />
        <br />
        <div id="detailContainer">
          <ion-label class="bubbleDiv">Origine: {{ this.maListe[0].origine }}</ion-label>
          <ion-label class="bubbleDiv">Catégorie: {{ this.maListe[0].categorie }}</ion-label>
        </div>

        <br />
        <br />
        <br />
        <br />
        <ion-label class="titleOne">Ingrédients</ion-label><br />

        <!-- <ul id="ingredientsList">
          <li v-for="index in 10" :key="index">
            <p>{{ this.maListe[0].ingredients[0] }}</p>
          </li>
        </ul> -->
        <br />
        <br />
        <br />
        <br />

        <div class="testt">
          <div class="test1">
            <ul id="ingredientsList" v-for="item in this.maListe[0].measure" :key="item">
              <span v-if="item.length > 1"> {{ item }}....... </span>
            </ul>
          </div>

          <div class="test2">
            <ul id="ingredientsList" v-for="item in this.maListe[0].ingredients" :key="item">
              <span v-if="item.length > 1">{{ item }}</span>
            </ul>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg, IonLabel } from "@ionic/vue";
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
    IonMenuButton,
    IonImg,
    IonLabel,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
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
      let url = "https://www.themealdb.com/api/json/v1/1/random.php";

      await fetch(url)
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
            measure: [
              data.meals[0].strMeasure1,
              data.meals[0].strMeasure2,
              data.meals[0].strMeasure3,
              data.meals[0].strMeasure4,
              data.meals[0].strMeasure5,
              data.meals[0].strMeasure6,
              data.meals[0].strMeasure7,
              data.meals[0].strMeasure8,
              data.meals[0].strMeasure9,
              data.meals[0].strMeasure10,
              data.meals[0].strMeasure11,
              data.meals[0].strMeasure12,
              data.meals[0].strMeasure13,
              data.meals[0].strMeasure14,
              data.meals[0].strMeasure15,
              data.meals[0].strMeasure16,
              data.meals[0].strMeasure17,
              data.meals[0].strMeasure18,
              data.meals[0].strMeasure19,
              data.meals[0].strMeasure20,
            ],
          });

          this.maListe = temp;
          console.log(this.maListe);
        });
    },
  },
});
</script>

<style scoped>
/* Added CSS*/

#mainContainer {
  margin: auto;
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: 0px) {
  #imageContainer {
    margin: auto;
    border-radius: 75px;
    overflow: hidden;
    width: 50%;
  }
}

@media screen and (min-width: 1000px) {
  #imageContainer {
    margin: auto;
    border-radius: 75px;
    overflow: hidden;
    width: 351px;
  }
}

#detailContainer {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 30%;
  text-align: center;
}

#ingredientContainer {
  border: 2px solid red;
}

.center {
  margin: auto;
  width: 50%;
}

.titleOne {
  font-size: xx-large;
  font-family: "Times New Roman", Times, serif;
}

.bubbleDiv {
  border: 2px solid blue;
  border-radius: 25px;
  padding: 10px;
}

.testt {
  display: flex;
  margin: auto;
  width: 50%;
  border: 2px solid red;
}

.test1 {
  flex: 1;
  text-align: right;
  border: 2px solid yellow;
}

.test2 {
  flex: 1;
  text-align: left;
  padding-left: 0px;
  border: 2px solid yellow;
}
</style>
