export function InfoInput({label, type = "text", value, handleClick, handleChange }) {

  return (
    <div className="flex align-center gap-8">
      <label className="label text-bold">{label}: </label> 
      <input 
        type={type} 
        placeholder={value}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
      <button className="ml-auto" onClick={handleClick}>Save</button>
    </div>
  )
}