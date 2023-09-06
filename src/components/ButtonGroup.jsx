import { Button, Typography } from "@material-tailwind/react"

const ButtonGroup = () => {
    return <>

    <div className="pt-10 px-10">
    <div className="flex justify-center items-center bg-white p-5">
        <Button className="w-full xl:w-6/12 bg-yellow rounded-none hover:bg-primary "><Typography>All Pokemons</Typography></Button>
        <Button className="w-full xl:w-6/12 bg-yellow rounded-none hover:bg-primary "><Typography>My Favourites</Typography></Button>
    </div>
    </div>
    
    </>

}

export default ButtonGroup;