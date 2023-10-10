import React from "react";

export default function App() {
  const title = "Hello World AAA "
  const enhancedTitle = title + ' - React App'

  const sendNotification = () => {
    window.sendNotification('My custom message')
  }

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
    
  )
}