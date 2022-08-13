<template>
  <ion-app>
    <ion-split-pane content-id="main-content" when="md">
      <ion-menu id="menuBar" content-id="main-content" type="overlay">
        <ion-content>
          <div>
            <ion-list>
              <ion-list-header>Mes recettes</ion-list-header>
              <ion-menu-toggle :auto-hide="false">
                <ion-item router-link="/home">
                  <ion-icon slot="start" :ios="storefront" :md="storefront"></ion-icon>
                  <ion-label>Accueil</ion-label>
                </ion-item>
                <ion-item router-link="/liste/chicken">
                  <ion-icon slot="start" :ios="logoTwitter" :md="logoTwitter"></ion-icon>
                  <ion-label>Chicken</ion-label>
                </ion-item>
                <ion-item router-link="/liste/seafood">
                  <ion-icon slot="start" :ios="fish" :md="fish"></ion-icon>
                  <ion-label>Seafood</ion-label>
                </ion-item>
                <ion-item router-link="/liste/dessert">
                  <ion-icon slot="start" :ios="iceCream" :md="iceCream"></ion-icon>
                  <ion-label>Dessert</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </div>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"> </ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonIcon,
  IonSplitPane,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { storefront, logoTwitter, fish, iceCream } from "ionicons/icons";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonIcon,
    IonSplitPane,
  },
  setup() {
    return {
      storefront,
      logoTwitter,
      fish,
      iceCream,
    };
  },
});
</script>

<style scoped>
#menuBar {
  width: 100%;
}
</style>
