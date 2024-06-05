<template>
    <div class="language-switcher">
      <button @click="switchLanguage('en')" class="language-button">English</button>
      <button @click="switchLanguage('pt')" class="language-button">Português</button>
    </div>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n';
  
  export default {
    name: 'LanguageSwitcher',
    setup() {
      const { locale } = useI18n();
  
      function switchLanguage(lang) {
        locale.value = lang;
      }
  
      return {
        switchLanguage
      };
    }
  }
  </script>
  
  
  