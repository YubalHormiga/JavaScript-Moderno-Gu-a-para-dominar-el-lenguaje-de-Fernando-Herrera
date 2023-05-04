import { loadUsersByPage } from "../use-cases/load-users-by-page"




const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1)
    if (users.length === 0) return
    state.users = users
    state.currentPage += 1
}

const loadPreviosPage = async () => {
    if (state.currentPage === 1) return
    const users = await loadUsersByPage(state.currentPage - 1)
    state.users = users
    state.currentPage -= 1

}

/**
 * 
 * @param {User} updateUser 
 */
const OnUserChange = (updateUser) => {

    let wasFound = false
    state.users = state.users.map(user => {
        if (user.id === updateUser.id) {
            wasFound = true
            return updateUser
        }
        return user
    })

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updateUser)
    }
}

const reloadPage = async () => {
    const users = await loadUsersByPage(state.currentPage)
    if (users.length === 0) {
        await loadPreviosPage()
        return
    }
    state.users = users
}
export default {
    loadNextPage,
    loadPreviosPage,
    OnUserChange,
    reloadPage,
    /**
     * 
     * @returns {user[]}
     */

    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}
