import {forwardRef, useImperativeHandle, useState} from 'react';
export const Button =forwardRef((props, ref)=>{
    const [toggle, settoggle] = useState(false);
    useImperativeHandle(ref,()=>({
      altertoggle(){
        settoggle(!toggle);
      }
    }))
    return(
        <div>
              <button>
                button from child 
              </button>
              {toggle && <span>hidden text</span>}
        </div>
    )
});