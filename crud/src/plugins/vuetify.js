import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#607d8b',
                accent: '#673ab7',
                error: '#f44336',
                warning: '#ffc107',
                info: '#cddc39',
                success: '#4caf50'
            }
        },
    },
});
