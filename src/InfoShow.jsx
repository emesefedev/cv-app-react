export function InfoShow({label, value, handleClick}) {

  return (
    <div className="flex align-center gap-8">
      <p className="label text-bold">{label}: </p>
      <p>{value}</p>
      <button className="ml-auto" onClick={handleClick}>Edit</button>
    </div>
  )
}