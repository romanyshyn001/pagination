import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { setCurrentPagetAC, setUsersAC, setTotalUserstAC, toogleIsFetchingAC } from "../redux/userReducer"
import User from "./User"


class UserContainer extends React.Component {
  componentDidMount(){
    //  debugger
    let url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.setPage}`
    axios.get(url)
      .then(response => {
        console.log(response.data.items)
        
        this.props.setUsersAC(response.data.items)
      })
  }

  onPageChange = (pageNumber) => {
    // debugger
    
    this.props.setCurrentPagetAC(pageNumber)
    this.props.toogleIsFetchingAC(true)
    let url = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.setPage}`

      axios.get(url)
        .then(response => {
          this.props.setUsersAC(response.data.items)
        })
  }


  render(){
    // debugger
    return <User onPageChange={this.onPageChange}
                 totalUsers={this.props.totalUsers}
                 setPage={this.props.setPage}
                 currentPage={this.props.currentPage}
                 users={this.props.users}
    />
  }
}

let mapStateToProps = (state) => {
  // debugger
  return{
    users: state.userPage.users,
    totalUsers: state.userPage.totalUsers,
    currentPage: state.userPage.currentPage,
    setPage: state.userPage.setPage
}}

export default connect(mapStateToProps, {setUsersAC, setTotalUserstAC, setCurrentPagetAC, toogleIsFetchingAC})(UserContainer)
