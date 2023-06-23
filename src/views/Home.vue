<template>
  <v-container fluid class="content">
    <explanation></explanation>
    <player></player>
    <common-issues></common-issues>
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
import CommonIssues from '../components/CommonIssues.vue';

export default {
  name: 'Home',
  components: {
    Player,
    Explanation,
    CommonIssues
  },
};
</script>