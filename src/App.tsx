import { useState, useEffect } from 'react';
import styles from './App.module.css'
import tw from "tailwind-styled-components"

import {levels, calculateImc, Level} from './helpers/imc'


import leftArrowImage from './assets/leftarrow.png'

import {Header} from './layout/Header'
import {Input} from './components/Input'
import {GridItem} from './components/GridItem'

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showImc, setShowImc] = useState<Level | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function handleCalculateButton(){
      if (heightField && weightField){
      setShowImc(calculateImc(heightField, weightField));
    } else {
      alert("Preencha a altura e peso.")
    }
  }

  function handleBackButton(){
    setShowImc(null);
    setHeightField(0);
    setWeightField(0);
  }

  function toggleDarkMode(){
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode){
        document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

	}, [darkMode]);


  return (
    <div id="appDiv" className="bg-white dark:bg-black min-w-screen min-h-screen flex flex-col">
      <div className="p-5">
        <Header/>

        <button className="absolute px-3 py-1 top-5 right-5 bg-gray-900 text-white rounded-full
          hover:bg-gray-400 hover:text-black
          ease-in-out duration-300"
          onClick={toggleDarkMode}>Dark Mode</button>

        <div className="max-w-4xl flex flex-col m-auto mt-9 
          md:flex-row
        ">


          <div className="md:mr-9 flex-1 text-black dark:text-gray-200"> 
            <h1 className="">Calcule o seu IMC.</h1>
            <p className="mt-2 text-sm font-light text-gray-500 mb-10 dark:text-gray-400"
              >O IMC (Índice de Massa Corporal) é um padrão internacional de cálculo da obesidade de um indivíduo adotado pela OMS (Organização Mundial da Saúde).</p>
  
            <label>Altura:</label>
            <Input 
              type="number"
              placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField : ""}
              onChange={(e) => setHeightField(parseFloat(e.target.value))}
              disabled={!!showImc}
            />

            <label>Peso:</label>
            <Input  
              type="number"
              placeholder="Digite o seu peso. Ex: 75 (em kg)"
              value={weightField > 0 ? weightField : ""}
              onChange={(e) => setWeightField(parseFloat(e.target.value))}
              disabled={!!showImc}
            />

            <button className="mt-0 mb-5 w-full px-5 py-3 text-l cursor-pointer text-white bg-blue-700 font-semibold rounded-full
              hover:bg-blue-500
              focus:outline-none focus:ring-2
              ease-in-out duration-300
              disabled:opacity-50 disabled:transform:none disabled:transition-none disabled:cursor-not-allowed
              "
              disabled={!!showImc}
              onClick={handleCalculateButton}>Calcular</button>
          </div>

          <div className="md:ml-9 flex flex-1">
            {!showImc && 
              <div className="flex-1 grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-5">
                {levels.map((item, index) => (
                  <GridItem key={index} item={item}/>
                ))}
              </div>
            }
            {showImc && 
              <div className="flex flex-1">
                <div className="absolute bg-blue-600  w-16 h-16 flex justify-center items-center cursor-pointer 
                  rounded-lg
                  md:-ml-8 md:mt-32 md:rounded-full
                  hover:bg-blue-500 hover:border-transparent
                  focus:outline-none focus:ring-2
                  ease-in-out duration-300"
                  onClick={handleBackButton}
                >
                  <img src={leftArrowImage} alt="" width={25}/>
                </div>
                <GridItem item={showImc}/>
              </div>
            }
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

