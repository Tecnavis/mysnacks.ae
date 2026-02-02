
export default function Navbar(){
  return (
    <nav className="p-5 bg-white shadow flex justify-between">
      <h1 className="text-xl font-bold text-orange-600">MySnacks.ae</h1>
      <div className="space-x-4">
        <a>Products</a><a>Locations</a><a>Partner</a>
      </div>
    </nav>
  )
}
