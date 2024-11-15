import React, { FormEvent, useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef<HTMLInputElement>(null);
    const handleFocus = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        inputElement.current!.focus();

    }
    return (
    <div>
        <form onSubmit={handleFocus}>
            <input type="text" placeholder='Enter ur name' ref={inputElement} />
            <button type='submit'>Click here to focus on input field</button>
        </form>
    </div>
  )
}

export default FocusInput