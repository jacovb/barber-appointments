export default function FormField({ label, type, name, placeholder, required }) {
  return (
    <div className="flex items-center ml-2 border-t border-solid border-blue-500 first-of-type:border-0">
      <label 
        htmlFor={name} 
        className="w-1/4 min-w-min py-2 overflow-hidden text-base text-ellipsis whitespace-nowrap border-r border-solid border-blue-500"
      >
        {label}
      </label>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        required 
        className="text-base w-3/4 py-2 px-3 bg-transparent border-0" 
        autoComplete="off"
        />
    </div>
  )
}