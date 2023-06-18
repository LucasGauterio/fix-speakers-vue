<template>
    <v-card class="ma-2">
      <v-card-title>{{ $t('howItWorks') }}</v-card-title>
      <v-card-text>{{ $t('explanation') }}</v-card-text>
    </v-card>
    <v-card color="red" class="ma-2">
      <v-card-text>{{ $t('warning') }}</v-card-text>
    </v-card>
    <v-card class="ma-2">
      <v-card-text>{{ $t('turnup') }}</v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'Explanation',
  };
  </script>
  