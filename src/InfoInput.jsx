export function InfoInput({id, label, labelSize = 58, type = "text", value, placeholder, handleChange, 
  displayError = {display: false, message: ""} }) {

  const left = labelSize + 8

  return (
    <div className="flex flex-col">
      {
        displayError.display && 
        <p 
          className={`input-error-message`} 
          style={{left}}>
            {displayError.message}
        </p>
      }
      <div className="flex align-center gap-8">
        <label 
          className={`text-bold`} 
          style={{
            minWidth: labelSize
          }}
          htmlFor={id}>
            {label}:&nbsp;
        </label> 
        <input 
          className={displayError.display ? "input-error" : ""}
          id={id}
          type={type} 
          placeholder={placeholder}
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
    </div>
  )
}