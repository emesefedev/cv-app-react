import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"

export function Info({label, defaultValue, type, isEditing}) {
  const [inputValue, setInputValue] = useState(defaultValue)

  const saveInputValue = (value) => {setInputValue(value)}

  return (
    <div>
      {isEditing 
        ? <InfoInput 
            label={label} 
            type={type} 
            value={inputValue} 
            handleChange={saveInputValue}
          />
        : <InfoShow label={label} value={inputValue}/>}
    </div>
  )
}