import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex items-center'> <AiFillCheckCircle className='mr-5 text-green-500'/> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;