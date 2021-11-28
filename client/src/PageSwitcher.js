import React from 'react'
import {NavLink} from 'react-router-dom'

function PageSwitcher() {
    return (
       <>
                 {/* <div className="appAside" /> */}
            <div className="pageSwitcher">
              <NavLink
                exact to="/signin"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
        </>
    )
}

export default PageSwitcher
