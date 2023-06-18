<template>
  <v-container fluid>
    <explanation></explanation>
    <player></player>
  </v-container>
</template>

<script>
import Player from '../components/Player.vue';
import Explanation from '../components/Explanation.vue';

export default {
  name: 'Home',
  components: {
    Player,
    Explanation,
  },
};
</script>