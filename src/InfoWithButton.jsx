import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"
import { SaveButton } from "./SaveButton"
import { isEmpty, hasLengthBiggerThan, isValidEmail, isValidPhone } from "./input-validations"

export function InfoWithButton({label, defalutValue, type}) {
  const [isEditing, setIsEditing] = useState(true)
  const [inputValue, setInputValue] = useState(defalutValue)
  const [displayError, setDisplayError] = useState({display: false, message: ""})

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {
    const inputTrimmed = inputValue.trim()
    if (isEmpty(inputTrimmed) || !hasLengthBiggerThan(inputTrimmed, 3)) {
      setDisplayError({display: true, message: "Must have 3 or more characters"})
      return 
    }

    if (type === "email" && !isValidEmail(inputTrimmed)) {
      setDisplayError({display: true, message: "Must be a valid email"})
      return
    }

    if (type === "tel" && !isValidPhone(inputTrimmed)) {
      setDisplayError({display: true, message: "Must be a valid phone number"})
      return
    }
    
    setDisplayError({display: false, message: ""})
    setInputValue(inputTrimmed)
    setIsEditing(false)
  }
  const saveInputValue = (value) => {setInputValue(value)}

  return (
    <div className="flex align-end">
      {isEditing 
        ? <>  
            <InfoInput 
              label={label} 
              type={type} 
              value={inputValue} 
              handleChange={saveInputValue}
              displayError={displayError}
            />
            <SaveButton style={"ml-auto"} handleClick={disableEditing}/>
          </>
        : <>
            <InfoShow label={label} value={inputValue} handleClick={enableEditing}/>
            <button className="ml-auto" onClick={enableEditing}>Edit</button>
          </>
      }
    </div>
  )
}