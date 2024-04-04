<template>
  <!-- Login field -->

  <div id="headerText">
    <h1>Assortment Catalog</h1>
    <h2>Find your favorite beer!</h2>
    <p>
      Welcome to the world of Punk IPAs, where taste and rebellious spirit meet
      to create an experience that challenges tradition and stimulates the
      senses. We believe that beer should be so much more than just a drink – it
      should be an experience, a journey through flavors and aromas that ignite
      passion and bring to life the most adventurous sides of our senses. Punk
      IPA is our tribute to the vibrant punk culture, where conventions are
      broken and creativity flows freely. This rebellious attitude permeates
      every drop of our IPA, from its bold hop profile to its distinctive aromas
      that take you on a journey far beyond the expected.
    </p>
    <p>
      We are proud to be part of the growing movement of craft breweries that
      refuse to compromise on quality and passion. Every bottle of Punk IPA is
      an expression of our dedication to creating high-quality beers that not
      only satisfy your taste buds but also inspire you to embrace your inner
      rebel and explore the world around you. So let's raise our glasses and
      toast to the revolutionary taste of Punk IPA – a beer that breaks rules,
      challenges expectations, and takes you on a journey towards the unknown.
      Join the revolution, and let us together create a world where taste and
      passion reign supreme. Cheers!
    </p>
    <h4>Don't forget to log in!</h4>

    <login :greeting="customGreeting" type="text" />
  </div>

  <header>
    <div id="bothFields">
      <div id="headerNumberField">
        <h3>Show number of beers</h3>

        <!-- Choose number of items -->

        <input
          id="fieldOne"
          v-model="beerNumber"
          type="number"
          @click="fetchBeer"
          min="0"
          placeholder="Number + enter"
        />
      </div>

      <!-- Search items -->
      <div id="headerTextField">
        <h3>Search for a name</h3>
        <input
          id="fieldTwo"
          v-model="beerName"
          type="text"
          @keydown="fetchBeerName"
          placeholder="'Mixtape 8'"
        />
      </div>
    </div>
  </header>

  <!-- Cards -->

  <div id="grid-container">
    <v-row
      v-if="beerNumber > 0 || beerName !== ''"
      id="beerList"
      justify="center"
    >
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="beer in beers"
        :key="beer.id"
      >
        <v-card
          class="mx-auto my-8 equal-height-cards"
          max-width="344"
          elevation="16"
        >
          <v-card-item>
            <img :src="beer.image_url" class="beerImage" alt="Beer Image" />
            <v-card-title> {{ beer.name }} </v-card-title>
            <v-card-subtitle>{{ beer.tagline }} </v-card-subtitle>
          </v-card-item>
          <v-card-text class="card-content">
            {{ beer.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
/* fetch */
import axios from "axios";
import login from "../components/login.vue";

export default {
  name: "App",
  components: {
    login,
  },
  data() {
    return {
      customGreeting: "",
      beerNumber: "",
      beers: [],
      beerName: "",
    };
  },
  created() {
    this.fetchBeer();
  },
  watch: {
    beerNumber() {
      this.fetchBeer();
    },
    beerName() {
      this.fetchBeerName();
    },
  },
  methods: {
    /* Get beer by number */
    fetchBeer() {
      axios
        .get(`https://api.punkapi.com/v2/beers?per_page=${this.beerNumber}`)
        .then((response) => {
          this.beers = response.data;
        })
        .catch((error) => {
          console.error("Error", error);
        });
    },
    /* Get beer by name */
    fetchBeerName() {
      axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${this.beerName}`)
        .then((response) => {
          this.beers = response.data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
