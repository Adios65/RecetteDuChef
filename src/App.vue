<template>
  <ion-app>
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list>
            <ion-list-header>Mes recettes</ion-list-header>
            <ion-menu-toggle :auto-hide="false">
              <ion-item router-link="/home">
                <ion-icon slot="start" :ios="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Accueil</ion-label>
              </ion-item>
              <ion-item router-link="/ChickenList">
                <ion-icon slot="start" :ios="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Chicken</ion-label>
              </ion-item>
              <ion-item router-link="/SeafoodList">
                <ion-icon slot="start" :ios="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Seafood</ion-label>
              </ion-item>
              <ion-item router-link="/DessertList">
                <ion-icon slot="start" :ios="logoTux" :md="logoTux"></ion-icon>
                <ion-label>Dessert</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content">
      </ion-router-outlet>
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
 } from '@ionic/vue';
import { defineComponent } from 'vue';
import { logoTux } from 'ionicons/icons';
export default defineComponent({
  name: 'App',
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
  setup(){
    return {
      logoTux
    }
  }
});
</script>