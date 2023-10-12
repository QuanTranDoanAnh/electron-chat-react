import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function ViewTitle() {
	const navigate = useNavigate()
	return (
		<div className="chat-name-container">
			<span className="name">Choose your channel</span>
			<button
				onClick={() => navigate('/')}
				className="btn btn-primary btn-sm back-button">Back</button>
		</div>
	)
}