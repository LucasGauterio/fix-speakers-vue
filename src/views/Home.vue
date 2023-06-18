<template>
  <v-container fluid class="content">
    <explanation></explanation>
    <player></player>
  </v-container>
</template>
<style scoped>
.content {
  max-width: 800px;
}
</style>
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