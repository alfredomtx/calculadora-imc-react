import poweredImage from '../assets/powered.png'

export const Header = () => {
    
    return (
        <header>
            <div className="max-w-4xl mx-auto mt-2">
            <img src={poweredImage} alt="" width={150}/>
            </div>
        </header>
    )
}

