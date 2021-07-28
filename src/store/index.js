import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    boardModal: false,
    boards: [],
    errors: [],
    currentBoard: null,
    huntList: [],
    slotList: [],
    machinesList: [],
    machineSelectList: [],
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

    // Actualize store with last boards data
    PUSH_FETCH_BOARDS(state, data) {
      state.boards = data;
    },

    PUSH_FETCH_HUNTLIST(state, data) {
      state.huntList = data;
    },

    PUSH_MACHINES_LIST(state, data) {
      state.machinesList = data;
    },

    ACTUALIZE_SLOT_LIST(state) {
      state.huntList.forEach((hunt) => {
        state.slotList.push(hunt.machine_id);
      });
    },

    ACTUALIZE_MACHINES_SELECT_LIST(state) {
      console.log("actualize select list ...");
      state.machinesList.forEach((machine) => {
        state.machineSelectList.push({
          value: machine.id,
          label: machine.name,
        });
      });
    },

    //Selected board
    SELECT_BOARD(state, id) {
      state.currentBoard = id;
    },
  },
  actions: {
    // toggle v-show modal board
    toggleBoardModal({ commit }) {
      commit("BOARD_MODAL_CONTROL");
    },

    // API call boards list
    async fetchBoards({ commit }) {
      try {
        const response = await axios.get(`/api/boards`);
        commit("PUSH_FETCH_BOARDS", response.data);
      } catch (e) {
        this.state.errors.push(e);
      }
    },

    selectBoard({ commit }, id) {
      commit("SELECT_BOARD", id);
    },

    async fetchHuntList({ commit }, id) {
      try {
        const response = await axios.get(`/api/boards/${id}`);
        commit("PUSH_FETCH_HUNTLIST", response.data);
        commit("ACTUALIZE_SLOT_LIST");
      } catch (e) {
        this.errors.push(e);
      }
    },

    async updateHuntList(currentBoard, huntList) {
      try {
        await axios.post(`/api/huntlists/${currentBoard}`, huntList);
      } catch (e) {
        this.errors.push(e);
      }
    },

    // Fetch all machines
    async fetchMachinesList({ commit }) {
      try {
        const response = await axios.get(`/api/machines`);
        commit("PUSH_MACHINES_LIST", response.data);
        commit("ACTUALIZE_MACHINES_SELECT_LIST");
      } catch (e) {
        this.state.errors.push(e);
      }
    },
  },
  modules: {},
});
