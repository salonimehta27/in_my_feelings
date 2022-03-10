import React from "react"
import { NavLink } from "react-router-dom"

function PageSwitcher() {
	return (
		<>
			<div className="pageSwitcher">
				<NavLink exact to="/signin" className="pageSwitcherItem">
					Sign In
				</NavLink>
				<NavLink exact to="/signup" className="pageSwitcherItem">
					Sign Up
				</NavLink>
			</div>
		</>
	)
}

export default PageSwitcher
