export function InfoShow({label, value}) {

  return (
    <div className="flex align-center gap-8">
      <p className="label text-bold">{label}: </p>
      <p>{value}</p>
    </div>
  )
}