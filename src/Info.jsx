import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"

export function Info({id, label, labelSize = 65, defaultValue, type, isEditing, 
    displayError = {display: false, message: ""}, inputValues, handleInputValues}) {
  const [inputValue, setInputValue] = useState(defaultValue)

  const saveInputValue = (value) => {
    handleInputValues({...inputValues, [id]: value})
    setInputValue(value)
  }

  return (
    <div>
      {isEditing 
        ? <InfoInput 
            label={label} 
            labelSize={labelSize}
            type={type} 
            value={inputValue} 
            handleChange={saveInputValue}
            displayError={displayError}
          />
        : <InfoShow label={label} value={inputValue}/>}
    </div>
  )
}