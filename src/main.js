// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import './assets/styles/main.scss';
/* import messages from 'i18n.js'; */
const messages = {
  en: {
    welcome: "Welcome",
    about: "About Us",
    titleApresentation: "Full Stack Developer, PHP, Laravel, Python Enthusiast",
    contact: "Contact Us",  
  },
  pt: {
    welcome: "Bem-vindo",
    titleApresentation: "Desenvolvedor Full Stack, Entusiasta de PHP, Laravel, Python",
    about: "Sobre nós",
    contact: "Fale conosco",
  },
};

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "pt",
  messages,
});

const app = createApp(App);
app.use(i18n); 
app.mount("#app");
