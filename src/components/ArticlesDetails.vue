<template>
  <div class="articles-details">
    <img class="articles-details__img" :src="require(`@/assets/${image}`)" :alt="name" />
    <span class="articles-details__name cel">{{ name }}</span>
    <span class="articles-details__price cel">{{ price }}€</span>
    <span
      v-on:click="deleteArticle(), (this.$store.state.totalCost -= price)"
      class="articles-details__btn-delete cel"
      >Supprimer</span
    >
  </div>
</template>

<script>
export default {
  name: "articlesDetails",
  props: ["id", "name", "price", "image", "index"],
  methods: {
    deleteArticle() {
      this.$store.state.cartContent.forEach((element, index) => {
        let remove = false;
        if (this.index == index && remove == false) {
          this.$store.state.cartContent.splice(index, 1);
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.articles-details {
  display: flex;
  height: 70px;
  justify-content: space-between;
  background: #f7f7f7;
  margin-bottom: 20px;
  &__img {
    width: 20%;
    object-fit: cover;
  }
  &__img {
    width: 20%;
    object-fit: cover;
  }
  &__btn-delete {
    color: rgb(242, 32, 32) !important;
    cursor: pointer;
  }
}

.cel {
  width: 20%;
  display: flex;
  align-items: center;
  font-weight: 500;
  text-align: center;
  justify-content: center;
}
</style>
