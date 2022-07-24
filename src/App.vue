<template>
  <header class="header">
    <nav class="header__container container">
      <router-link to="/">
        <img class="header__logo" src="@/assets/logo.svg" alt="Logo"/>
      </router-link>
      <router-link  class="header__btn-basket-link" to="/cart">
        <img class="header__btn-basket" src="@/assets/btn-basket.svg" alt="Panier"/>
        <div v-if="this.$store.state.cartContent.length != 0" class="header__btn-basket-Counter">
          {{ this.$store.state.cartContent.length }}
        </div>
      </router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<style lang="scss">

// RESET CSS 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// GENERAL 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}
main {
  padding: 70px 0;
}

header,
.header {
  background-color: #f7f7f7;
  padding: 20px 0px;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__btn-basket-Counter {
    color: black;
    padding:13px;
    width: min-content;
    border-radius: 30px;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -20px;
    left: -30px;
    font-weight: 600;
  }
  &__btn-basket-link {
    position: relative;
  }
}

.container {
    max-width: 1366px;
    margin: auto;
    padding: 0px 15px;
    @media screen and (max-width: 1250px) {
      max-width: 993px;
    }
    @media screen and (max-width: 992px) {
      max-width: 600px;
    }
}

.big-title {
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 0.8em;
  @media screen and (max-width: 992px) {
    font-size: 30px;
  }
}
</style>
