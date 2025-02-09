import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"

export function Info({id, label, placeholder, labelSize = 65, type, isEditing, 
    displayError = {display: false, message: ""}, inputValues, handleInputValues}) {
  const [inputValue, setInputValue] = useState("")

  const saveInputValue = (value) => {
    handleInputValues({...inputValues, [id]: value})
    setInputValue(value)
  }

  let value = inputValue
  if (type === "date") {
    const dateArray = value.split("-")
    dateArray.reverse()
    value = dateArray.join("/")
  }

  return (
    <div>
      {isEditing 
        ? <InfoInput 
            label={label} 
            labelSize={labelSize}
            placeholder={placeholder}
            type={type} 
            value={inputValue} 
            handleChange={saveInputValue}
            displayError={displayError}
          />
        : <InfoShow label={label} value={value}/>}
    </div>
  )
}