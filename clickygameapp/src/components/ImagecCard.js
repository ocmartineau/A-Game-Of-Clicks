import React from "react";
import propTypes from "prop-types";
import "./imagecard.css";

class ImageCard extends React.Component {

    render () {

        const { image, id, clicked } = this.props
        return (
            <div className="card">
                <div className="img-container">
                    <img alt={id} src={image} />
                </div>
            </div>
        )
    }
    
}

ImageCard.propTypes = {
    id: propTypes.string,
    image: propTypes.string,
    clicked: propTypes.string
}

export default ImageCard;