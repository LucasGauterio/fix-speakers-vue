<template>
  <v-app-bar app color="primary">
    <v-app-bar-title>{{ $t('title') }}</v-app-bar-title>
    
    <language-selector></language-selector>
  </v-app-bar>
</template>

<script setup>
import LanguageSelector from '../../components/LanguageSelector.vue';

</script>
