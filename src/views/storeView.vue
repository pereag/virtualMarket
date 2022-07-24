<template>
  <section class="store">
    <div class="container">
      <h1 class="big-title">Notre magazin {{ title }}</h1>
      <div class="windows__articles">
        <cardArticle
          v-for="article in this.articles"
          :key="article.id"
          v-bind:name="article.name"
          v-bind:price="article.price"
          v-bind:image="article.image"
          v-bind:id="article.id"
        ></cardArticle>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import cardArticle from "@/components/CardsArticle.vue";

export default {
  name: "WindowView",
  components: {
    cardArticle,
  },
  data() {
    return {
      articles: [],
      title: "",
    };
  },
  beforeMount() {
    if (this.$route.path == "/store/windows") {
      this.title = "Windows";
      this.getArticlesList("windows");
    } else if (this.$route.path == "/store/playstation") {
      this.title = "Playstation";
      this.getArticlesList("playstation");
    } else if (this.$route.path == "/store/xbox") {
      this.title = "Xbox";
      this.getArticlesList("xbox");
    }
  },
  methods: {
    getArticlesList: function (categories) {
      if (categories == "windows") {
        this.articles = [
          {
            name: "Clès Windows 10 famille",
            price: 10.0,
            image: "windows-btn.jpg",
            id: 1,
          },
          {
            name: "Clès Windows 10 pro",
            price: 14.0,
            image: "windows-btn.jpg",
            id: 2,
          },
          {
            name: "Clès Windows 11 famille",
            price: 10.0,
            image: "windows-btn.jpg",
            id: 3,
          },
          {
            name: "Clès Windows 11 pro",
            price: 11.0,
            image: "windows-btn.jpg",
            id: 4,
          },
          {
            name: "Clès Windows 7 famille",
            price: 8.0,
            image: "windows-btn.jpg",
            id: 5,
          },
        ];
      } else if (categories == "playstation") {
        this.articles = [
          {
            name: "Abonnement PS plus 1 mois",
            price: 9.0,
            image: "psn-btn.jpg",
            id: 6,
          },
          {
            name: "Abonnement PS plus 3 mois",
            price: 24.0,
            image: "psn-btn.jpg",
            id: 7,
          },
          {
            name: "Abonnement PS plus 6 mois",
            price: 34.0,
            image: "psn-btn.jpg",
            id: 8,
          },
          {
            name: "Abonnement PS plus 12 mois",
            price: 70.0,
            image: "psn-btn.jpg",
            id: 9,
          }
        ];
      } else if (categories == "xbox") {
        this.articles = [
          {
            name: "Abonnement Xbox gamePass 1 mois",
            price: 9.0,
            image: "xbox-btn.jpg",
            id: 10,
          },
          {
            name: "Abonnement Xbox gamePass 3 mois",
            price: 24.0,
            image: "xbox-btn.jpg",
            id: 11,
          },
          {
            name: "Abonnement Xbox gamePass 6 mois",
            price: 44.0,
            image: "xbox-btn.jpg",
            id: 13,
          },
          {
            name: "Abonnement Xbox gamePass 12 mois",
            price: 64.0,
            image: "xbox-btn.jpg",
            id: 14,
          },
        ];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.windows {
  &__articles {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
}
</style>

