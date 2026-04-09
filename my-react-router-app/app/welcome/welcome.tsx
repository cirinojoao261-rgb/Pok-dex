
export function Welcome() {



  return (
  <main className="min-h-screen bg-linear-to-br from-orange-188 to-pink-200">
    <div className="flex h-16w-full items-center bg-linear to-r/oklch from-red-500 to bg-orange-500" >
    <h1 className="p-4 text-4xl font-bold text-white">Pokédex</h1>
    <h1 className="pl 300 front-bold text-white">home</h1>
    <h1 className="pl-5 front-bold text-white">Pokemons</h1>
    <h1 className="pl-3 front-bold text-white">Tipos</h1>
    </div>
    <div className="flex h-20 items-cemter bg-white mx10 my-10 rounded-lg px-5  shadow-md"> 
      <form className="w-fullrelative"> 
        <input type="text" className="w-330 p-3 pb- pl-10 border-b border-gray-200 focus:outline-none" />
        <button className="absolute right-2 bottom2 bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"> buscar</button></form>
      
    </div>
    <div className="">

    </div>
  </main>
  );
}

