<template>
    <v-container>
      <v-card>
        <v-card-text>
          <h1>{{ $t('common.title') }}</h1>
        </v-card-text>
      
        <v-card-text v-for="issue in issues" :key="issue.title">
          <h2>{{ $t(issue.title) }}</h2>
          <p>{{ $t(issue.description) }}</p>
        </v-card-text>
  
        <v-card-text>
          <h2>{{ $t('common.preventionTitle') }}</h2>
          <p v-for="prevention in preventions" :key="prevention">
            - {{ $t(prevention) }}
          </p>
        </v-card-text>
          
          
    </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SmartphoneIssues',
    data() {
      return {
        issues: [
          {
            title: 'common.issue1Title',
            description: 'common.issue1Description'
          },
          {
            title: 'common.issue2Title',
            description: 'common.issue2Description'
          },
          {
            title: 'common.issue3Title',
            description: 'common.issue3Description'
          },
          {
            title: 'common.issue4Title',
            description: 'common.issue4Description'
          },
          {
            title: 'common.issue5Title',
            description: 'common.issue5Description'
          }
        ],
        preventions: [
          'common.prevention1',
          'common.prevention2',
          'common.prevention3',
          'common.prevention4'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here */
  </style>