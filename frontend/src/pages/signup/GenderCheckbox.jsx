export const GenderCheckBox = () => {
  return (
    <div className="flex border input input-bordered h-10 w-full justify-start">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />  
        </label>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">FeMale</span>
          <input type="checkbox" className="checkbox border-slate-900" />  
        </label>
    </div>
  )
}