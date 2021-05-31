import PropTypes from 'prop-types';

const Card = ( props ) => {

    const { title, image, url, text } = props.values;

    return (
        <div className="card text-center bg-dark  animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={ image } alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{ title ? title : "titulo" }</h4>
                <p className="card-text text-secondary" target="_blank">
                    {
                        text
                            ? text
                            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis repudiandae maxime natus facilis. Dignissimos, laboriosam sequi? Iusto voluptas, ratione deserunt sit dignissimos eos libero at doloremque, quam incidunt ducimus."

                    }
                </p>
                <a href={ url } className="btn btn-outline-secondary rounded-0">
                    Go to { title }
                </a>
            </div>
        </div>
    );
};


// validacion de propiedades obligatorias
Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default Card;
