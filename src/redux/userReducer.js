const SET_USERS = 'SET_USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_USERS = 'CURRENT_PAGE'

const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING' //можна не робити


const initiateState = {
  users: [],
  totalUsers: 55,
  currentPage: 1,
  setPage: 5,
  isFetching: false //переключаи сторінки
}


const UsersReducer = (state = initiateState, action) => {
  
  switch(action.type){
      case SET_USERS:
        return {
          ...state, users: action.users
        }
      case CURRENT_PAGE:
        return {
          ...state, currentPage: action.currentPage}
      case TOTAL_USERS:
        return {
          ...state, totalUsers: [...action.totalUsers]
        }
      case TOOGLE_IS_FETCHING:
        return {
          ...state, isFetching: action.isFetching
        }
        default: 
        return state
      }
}
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPagetAC = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setTotalUserstAC = (totalUsers) => ({type: TOTAL_USERS, totalUsers})
export const toogleIsFetchingAC = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})

export default UsersReducer