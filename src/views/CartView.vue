<template>
  <div class="cart">
    <div class="container">
      <h1 class="big-title">Votre panier</h1>

      <articlesDetails
        v-for="(article, index) in this.$store.state.cartContent"
        :key="article.id"
        v-bind:price="article.price"
        v-bind:name="article.name"
        v-bind:id="article.id"
        v-bind:index="index"
        v-bind:image="article.image"
      ></articlesDetails>
      <span
        class="cart__message"
        v-if="this.$store.state.cartContent.length == 0"
        >Votre panier est vide.</span
      >
      <div class="cart__details">
        <div class="cart__result">
          <span class="cart__label-result">Total</span>
          <span class="cart__total-result"
            >{{ this.$store.state.totalCost }} TTC</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesDetails from "@/components/ArticlesDetails.vue";

export default {
  components: {
    articlesDetails,
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__details {
    background: #000000;
    width: calc(100% - 30px);
    color: white;
    padding: 15px;
  }
  &__result {
    display: flex;
    justify-content: space-between;
  }
  &__label-result {
    font-size: 20px;
    font-weight: 900;
  }
  &__total-result {
    font-weight: 600;
  }
  &__message {
    margin-bottom: 20px;
    display: inline-block;
  }
}

.container {
  max-width: 750px;
}
</style>
