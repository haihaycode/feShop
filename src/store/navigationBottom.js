
import Cookies from 'js-cookie';

export default {
    state: {
        navigationBottom: JSON.parse(Cookies.get('navigationBottom') || 2),
        mdHidden: JSON.parse(Cookies.get('mdHidden') || false),
    },
    mutations: {
        // Phương thức để cập nhật trạng thái navigationBottom
        updateNavigationBottom(state, value) {
            state.navigationBottom = value;
            Cookies.set('navigationBottom', JSON.stringify(value));
        },
        updatemdHidden(state, value) {
            state.mdHidden = value;
            Cookies.set('mdHidden', JSON.stringify(value));
        },
    },
    actions: {
        // Phương thức để cập nhật trạng thái navigationBottom
        updateNavigationBottom({ commit }, value) {
            commit('updateNavigationBottom', value);
        },
        updatemdHidden({ commit }, value) {
            commit('updatemdHidden', value);
        },
    },
    getters: {
        // Phương thức để lấy trạng thái navigationBottom
        getNavigationBottom(state) {
            return state.navigationBottom;
        },
        getMdHidden(state) {
            return state.mdHidden;
        },
    },
}

