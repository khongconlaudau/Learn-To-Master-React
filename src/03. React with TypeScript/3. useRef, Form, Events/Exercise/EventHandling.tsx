import React from 'react'

const EventHandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log("Button Clicked! ",e.target);
    }

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) =>{
        console.log("Mouse Over ", e.currentTarget);
        
    }
  return (
    <div onMouseOver={handleMouseOver}>
        <h2>Event Handling Example</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling