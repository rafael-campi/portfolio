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
  
  <style scoped>
  .language-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
  }
  
  .language-button {
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid transparent;
    border-radius: 50px; /* Borda arredondada para um visual moderno */
    background-color: transparent;
    color: #fff; /* Cor do texto branca */
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    font-family: 'Roboto', sans-serif; /* Fonte moderna */
  }
  
  .language-button:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Fundo semi-transparente ao passar o mouse */
    border-color: #fff; /* Borda branca ao passar o mouse */
  }
  
  .language-button:focus {
    outline: none; /* Remove a borda de foco padrão */
  }
  </style>
  