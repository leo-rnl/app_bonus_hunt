import { createStore } from "vuex";

export default createStore({
  state: {
    boardModal: false,
    boards: [
      {
        id: "1",
        name: "Super Board",
      },
      {
        id: "2",
        name: "Nice Board 1",
      },
      {
        id: "3",
        name: "Fireeee",
      },
    ],
  },
  mutations: {
    // Change modal boolean for board pannel
    BOARD_MODAL_CONTROL(state) {
      state.boardModal = !state.boardModal;
    },

    // Add new board
    ADD_NEW_BOARD(state, board = {}) {
      state.boards.push(board);
    },
  },
  actions: {
    // toggle v-show modal board
    toggleBoardModal({ commit }) {
      commit("BOARD_MODAL_CONTROL");
    },
  },
  modules: {},
});
