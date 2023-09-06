import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const CardPokemon = ({name, sprite}) => {
    return <>
     <Card className="mt-1 w-60 max-w-60 h-64 max-h-64 flex justify-center items-center hover:scale-110 transition-all 1s">
      <CardHeader className="bg-primary w-52 flex justify-center items-center">
        <img
          src={sprite}
          alt="card-image"
          className="w-44"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 px-0 w-52">
        <Button className="bg-gray-dark w-full">More Details</Button>
        
      </CardFooter>
    </Card>
    </>

}

export default CardPokemon;