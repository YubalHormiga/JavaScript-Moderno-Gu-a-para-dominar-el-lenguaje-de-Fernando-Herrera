import { loadUsersByPage } from "../use-cases/load-users-by-page"



const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage + 1)
}

const loadPreviosPage = async () => {
    throw new Error('No implementado')

}


const OnUserChange = () => {
    throw new Error('No implementado')

}

const reloadPage = async () => {
    throw new Error('No implementado')

}
export default {
    loadNextPage,
    loadPreviosPage,
    OnUserChange,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}
