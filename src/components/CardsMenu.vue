<template>
  <section class="cardsMenu">
    <router-link class="cardsMenu__btn cardsMenu__btn-windows" to="/store/windows"
      ><h2 class="cardsMenu__btn-title">
        Licences <strong>Windows</strong>
      </h2></router-link
    >
    <router-link class="cardsMenu__btn cardsMenu__btn-playstation" to="/store/playstation"
      ><h2 class="cardsMenu__btn-title">
        Cartes <strong>Playstation</strong>
      </h2></router-link
    >
    <router-link class="cardsMenu__btn cardsMenu__btn-xbox" to="/store/xbox"
      ><h2 class="cardsMenu__btn-title">
        Cartes <strong>Xbox</strong>
      </h2></router-link
    >
  </section>
</template>

<script>
export default {
  name: "cardsMenu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardsMenu {
  background: #f7f7f7;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 522px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  &__btn {
    width: calc(100% / 3 - 15px);
    text-decoration: none;
    display: flex;
    @media screen and (max-width: 992px) {
      width: 100%;
      height: 400px;
      margin-bottom: 20px;
    }
  }
  &__btn-xbox {
    background: url("~/src/assets/xbox-btn.jpg") center center no-repeat;
    background-size: cover;
    @media screen and (max-width: 992px) {
      margin-bottom: 0;
    }
  }
  &__btn-playstation {
    background: url("~/src/assets/psn-btn.jpg") center center no-repeat;
    background-size: cover;
  }
  &__btn-windows {
    background: url("~/src/assets/windows-btn.jpg") center center no-repeat;
    background-size: cover;
  }
  &__btn-title {
    font-size: 28px;
    margin: auto auto 0px auto;
    padding: 20px;
    color: white;
    text-transform: uppercase;
    strong {
      font-weight: 900;
    }
  }
  &__img-windows {
    width: 100%;
    height: 100%;
  }
}
</style>
