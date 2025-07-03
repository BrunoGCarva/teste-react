import './App.css'
import { FaCat } from "react-icons/fa";
function App() {
  return (

    <form action="https://getform.io/f/aqomwlka" method="POST">
      <div className="flex flex-col justify-center items-center h-screen bg-fuchsia-200">
        <header className="w-full h-15 bg-white text-purple-800 p-4 text-center">
          <h1 className="text-xl font-bold inline-flex items-center justify-center">
            <FaCat className="text-2xl mr-2" />
            DudaSys
            <FaCat className="text-2xl ml-2" />
          </h1>
        </header>

        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h1 className="text-center  mb-4 text-xl">Entrar na sua Conta</h1>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                className="p-2 border  rounded w-full border-neutral-400 focus:outline-violet-500"
                placeholder="Digite o email"
              />
              <input
                type="password"
                name="senha"
                className="py-2 px-4 border rounded w-full  border-neutral-400 focus:outline-violet-500"
                placeholder="Digite a senha"
              />
              <button
                type="submit"
                className="bg-fuchsia-800 mt-4 p-2 rounded-lg text-white w-full hover:cursor-pointer hover:bg-fuchsia-900 ">
                Entrar
              </button>
            </div>

          </div>


        </div>
      </div>
    </form>
  );
}


export default App

