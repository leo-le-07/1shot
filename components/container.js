export default function Container({children}) {
  return (
    <div className="container max-w-screen-lg mx-auto px-10">
      {children}
    </div>
  )
}
