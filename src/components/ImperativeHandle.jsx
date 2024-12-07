import { Button } from "./Button"
import { useRef } from "react";

export const ImperativeHandle=()=>{
    const buttonRef = useRef(null);
    return(
        <div>
            <button onClick={()=>{
                buttonRef.current.altertoggle()
            }}>
                button from parent
            </button>
            <Button ref={buttonRef}/>
        </div>
    )
}

//when we click on parent button of parent component it is alterning the value of the toggle state, even though the state exist inside of the child component.