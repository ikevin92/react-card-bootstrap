
import Card from './Card';
import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import './Cards.css'

// archivo de ejemplos
const cards = [
    {
        id: 1,
        title: "Fazt Web",
        image: image1,
        url: "https://faztweb.com",
    },
    {
        id: 2,
        title: "Fazt Blog",
        image: image2,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Fazt Youtube",
        image: image3,
        url: "https://youtube.com/fazttech",
    },
];


const Cards = () => {

    return (

        <div className="container d-flex justify-content-center align-items-center h-100  " >

            <div className="row">
                {
                    cards.map( ( card ) => (
                        <div className="col-md-4" key={ card.id }>
                            <Card values={ card } />
                        </div>
                    ) )
                }
            </div>

        </div>
    );
};

export default Cards;
