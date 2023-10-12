import React from "react"
import { Link } from "react-router-dom"

export default function ViewTitle() {
	return (
		<div className="chat-name-container">
			<span className="name">Choose your channel</span>
			<Link
				href="/"
				className="btn btn-primary btn-sm back-button">Back</Link>
		</div>
	)
}