import tw from "tailwind-styled-components"
import { Level } from "../helpers/imc";

import upImage from '../assets/up.png'
import downImage from '../assets/down.png'


type Props = {
    item: Level
};


const GridIcon = tw.div`
    w-16
    h-16
    rounded-full
    flex
    justify-center
    items-center
    bg-black/10
`;


const GridInfo = tw.div`

`;



export const GridItem = ( { item }: Props) => {
    
    return (
        <div className="flex flex-1 rounded-lg bg-black justify-center items-center flex-col text-white p-3"
            style={ {backgroundColor: item.color} }>
            <GridIcon>
                <img src={item.icon === "up" ? upImage : downImage} alt="" style={ {width: "40%", height: "40%"} }/>
            </GridIcon>
            <div className="text-2xl bold mt-1">
                {item.title}
            </div>

            {item.yourImc && 
                <div className="text-lg mt-3 mb-5">
                    Seu IMC é de {item.yourImc} kg/m²
                </div>
            }

            <div className="text-xs mt-2">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}