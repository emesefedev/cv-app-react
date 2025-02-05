import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"
import { SaveButton } from "./SaveButton"

export function InfoWithButton({label, defalutValue, type}) {
  const [isEditing, setIsEditing] = useState(true)
  const [inputValue, setInputValue] = useState(defalutValue)

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {setIsEditing(false)}
  const saveInputValue = (value) => {setInputValue(value)}

  return (
    <div className="flex align-center">
      {isEditing 
        ? <>
            <InfoInput 
              label={label} 
              type={type} 
              value={inputValue} 
              handleChange={saveInputValue}
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