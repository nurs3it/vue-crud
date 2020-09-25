import Vue from 'vue'
import Vuex from 'vuex'
import products from "../data/products.json"
import brands from "../data/brands.json"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: products,
        brands: brands
    },
    mutations: {
        DELETE_PRODUCT(store, payload) {
            let index = store.data.indexOf(payload)
            store.data.splice(index, 1)
        },
        NEW_PRODUCT(store, payload) {
            store.data.unshift({...payload})
        },
        EDIT_PRODUCT(store, payload) {
            let index = store.data.find((el, index) => {
                return index;
            });
            store.data.splice(index, 1, payload)
        }
    },
    actions: {
        deleteProduct({commit}, arg) {
            commit('DELETE_PRODUCT', arg);
        },
        saveNewItem({commit}, arg) {
            commit('NEW_PRODUCT', arg)
        },
        saveEditItem({commit}, arg) {
            commit('EDIT_PRODUCT', arg)
        }
    },
    getters: {
        products: (state) => {
            return state.data
        },
        lastId: (state) => {
            return Number(state.data[state.data.length-1].artnumber)
        }
    }
})
