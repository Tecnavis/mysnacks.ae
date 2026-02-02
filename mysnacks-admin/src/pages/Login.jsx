
export default function Login(){
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input placeholder="Email" className="border p-2 mb-2 w-full"/>
        <input placeholder="Password" type="password" className="border p-2 mb-4 w-full"/>
        <button className="bg-orange-600 text-white px-4 py-2 w-full">Login</button>
      </div>
    </div>
  )
}
