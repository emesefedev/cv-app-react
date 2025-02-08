export function InfoInput({id, label, labelSize = 55, type = "text", value, handleChange, 
  displayError = {display: false, message: ""} }) {

  return (
    <div className="flex flex-col">
      {displayError.display && <p className={`input-error-message left-${labelSize + 8}`}>{displayError.message}</p>}
      <div className="flex align-center gap-8">
        <label className={`label-${labelSize} text-bold`} htmlFor={id}>{label}: </label> 
        <input 
          className={displayError.display ? "input-error" : ""}
          id={id}
          type={type} 
          placeholder={value}
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
    </div>
  )
}