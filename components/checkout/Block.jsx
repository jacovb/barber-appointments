export default function Block ({ children }) {
  return (
    <div className="has-tooltip relative w-96 h-fit bg-neumorph shadow-neumorphInset text-white p-4 m-4 rounded-lg">
      {children}
    </div>
  )
} 