<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-img max-width="50px" :src="currentFlag"></v-img>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(language, index) in languages" :key="index" @click="changeLanguage(language.code)">
        <router-link :to="language.path">
          <v-img max-width="50px" :src="language.flag"></v-img>
          <v-list-item-title>{{ language.name }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
  
<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      languages: [
        { code: 'en', name: 'English', flag: '/flags/us.svg', path: '/en' },
        { code: 'pt', name: 'Português', flag: '/flags/br.svg', path: '/pt' },
        { code: 'zh', name: '中文', flag: '/flags/cn.svg', path: '/zh' },
        { code: 'hi', name: 'हिन्दी', flag: '/flags/in.svg', path: '/hi' },
        { code: 'ja', name: '日本語', flag: '/flags/jp.svg', path: '/ja' },
      ],
    };
  },
  computed: {
    currentFlag() {
      const language = this.languages.find((lang) => lang.code === this.$i18n.locale);
      return language ? language.flag : '';
    },
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>
  