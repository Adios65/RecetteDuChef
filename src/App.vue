<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="reveal">
        <ion-content>
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
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"> </ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonMenu, IonMenuToggle, IonIcon } from "@ionic/vue";
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
