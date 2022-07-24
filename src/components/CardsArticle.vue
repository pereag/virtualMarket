<template>
  <div class="cardArticle">
    <img class="cardArticle__image" v-bind:src="require(`@/assets/${image}`)" alt="Image" />
    <div class="cardArticle__middle">
      <span class="cardArticle__price">{{ price }}€ TTC</span>
      <h3 class="cardArticle__title">{{ name }}</h3>
    </div>
    <div
      v-on:click="addToCart(id, name, price, image); this.$store.state.totalCost += price"
      class="cardArticle__btn-add"
    >
      Ajouter au panier
    </div>
  </div>
</template>

<script>
export default {
  name: "cardArticle",
  props: ["image", "price", "name", "id"],
  methods: {
    addToCart: function (id, name, price, image) {
      let article = {
        name: name,
        price: price,
        image: image,
        id: id,
      };
      this.$store.state.cartContent.push(article);
    },
  },
};
</script>

<style lang="scss" scoped>
.cardArticle {
  position: relative;
  width: calc(100% / 4 - 15px);
  margin-bottom: 15px;
  @media screen and (max-width: 1250px) {
    width: calc(100% / 2 - 15px);
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  &__price {
    background-color: #c0b1f1;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    padding: 0.8em 1.2em;
    top: -47px;
    right: 0;
    border-radius: 20px 0px 0px 0px;
  }
  &__image {
    bottom: -3px;
    position: relative;
    width: 100%;
    height: 250px;
    object-fit: cover;
    @media screen and (max-width: 1250px) {
      height: 400px;
    }
    @media screen and (max-width: 992px) {
      height: 400px;
    }
  }
  &__middle {
    position: relative;
    background: #f7f7f7;
    padding: 15px;
    height: 78px;
  }
  &__title {
    font-size: 20px;
    font-weight: 900;
    text-align: left;
    margin: 0;
  }
  &__btn-add {
    background-color: black;
    color: white;
    padding: 0.8em;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>