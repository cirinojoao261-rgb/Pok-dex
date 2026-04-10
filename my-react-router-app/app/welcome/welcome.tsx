
export function Welcome() {



  return (
  <main className="min-h-screen bg-linear-to-br from-orange-188 to-pink-200">
    <div className="flex h-16w-full items-center bg-linear to-r/oklch from-red-500 to bg-orange-500" >
    <h1 className="p-4 text-4xl font-bold text-white">Pokédex</h1>
    <h1 className="pl-290 front-bold text-white">home</h1>
    <h1 className="pl-5 front-bold text-white">Pokemons</h1>
    <h1 className="pl-3 front-bold text-white">Tipos</h1>
    </div>
    <div className="flex h-20 items-cemter bg-white mx10 my-10 rounded-lg px-5  shadow-md"> 
      <form className="w-fullrelative"> 
        <input type="text" className="w-330 p-3 pb- pl-10 border-b border-gray-200 focus:outline-none" />
        <button className="absolute right-2 bottom2 bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"> buscar</button></form>
      
    </div>
    <div className="flex flex-wrap gap-8 p-10">
    <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-yellow-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="" alt="Pikachu" className="w-24 h-24 translate-y-1 "></img>
        <h1 className="text-2x3 text-black text-center font-bold">Pikachu</h1>
        <span className="bg-orange-300 text-white px-4 py-1.5 rounded-full inline-block mt-2">Eletrico</span>
      </div>
      
    
    q<div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-green-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="" alt="Pikachu" className="w-24 h-24 translate-y-1 "></img>
        <h1 className="text-2x3 text-black text-center font-bold">Pikachu</h1>
        <span className="bg-green-400 text-white px-4 py-1.5 rounded-full inline-block mt-2">Eletrico</span>
      </div>

      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-red-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="" alt="Pikachu" className="w-24 h-24 translate-y-1 "></img>
        <h1 className="text-2x3 text-black text-center font-bold">Pikachu</h1>
        <span className="bg-red-400 text-white px-4 py-1.5 rounded-full inline-block mt-2">Eletrico</span>
      </div>

      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-blue-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="" alt="Pikachu" className="w-24 h-24 translate-y-1 "></img>
        <h1 className="text-2x3 text-black text-center font-bold">Pikachu</h1>
        <span className="bg-blue-400 text-white px-4 py-1.5 rounded-full inline-block mt-2">Eletrico</span>
              </div>
    </div>  
  </main>
  );
}

