<template>
  <div id="landingPage">
    <div id="landingPageHeader">
      <product-info></product-info>
      <h1>Welcome!</h1>
      <h2>Confirm your age to access our assortment.</h2>
      <div id="ageRequestDiv">
        <h2>Are you over 20 years old?</h2>

        <div id="ageRequestBtnDiv">
          <!-- Yes or no buttons -->
          <button class="ageRequestBtn" @click="navigateToFetch">Yes</button>
          <button class="ageRequestBtn" @click="accessDenied">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /* If no */
    accessDenied() {
      alert("Unfortunately, you cannot access our assortment.");
    },
    /* If yes */
    navigateToFetch() {
      this.$router.push("/fetch");
    },
  },
};
</script>
