import React from "react"
import s from './s.module.css'


const User = (props) => {
  let pages = []
  let pageCount = Math.ceil(props.totalUsers / props.setPage)

  for(let i = 1; i <= pageCount; i++){
    pages.push(i)
  }
//  debugger
  return <React.Fragment>
      <div className={s.pageLine}> 
        { pages.map(p => {
          return (<span className={props.currentPage !== p ? props.currentPage : s.page} onClick={(e) => {props.onPageChange(p)}}>{p}</span>
        )})}
      </div>

        {props.users.map(u => <div>
            <span >
              <div>
                <img src={u.photos.small} alt="img" />
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.id}</div>
                <div>{u.status}</div>
              </span>
            </span>
            
        </div>)}
    </React.Fragment>
  
}

export default User