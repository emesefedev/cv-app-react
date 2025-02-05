export function InfoInput({label, type = "text", value, handleChange }) {

  return (
    <div className="flex align-center gap-8">
      <label className="label text-bold">{label}: </label> 
      <input 
        type={type} 
        placeholder={value}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  )
}