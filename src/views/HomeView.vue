<template>
  <div class="container">
     <h1 class="big-title">Bienvenue sur notre magasin en ligne de contenu téléchargeable.</h1>
      <cardsMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import cardsMenu from "@/components/CardsMenu.vue";

export default {
  name: "HomeView",
  components: {
    cardsMenu,
  },
};
</script>
