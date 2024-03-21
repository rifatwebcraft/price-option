import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {plan_name, price, features} = option;
    return (
        <div className='bg-blue-500 p-5 rounded-md text-white text-center flex flex-col'>
            <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{plan_name}</h4>
            <div className='pl-7 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature> )
            }
            </div>
            <button className='mt-12 bg-green-700 w-full rounded-lg py-3 text-2xl font-bold hover:bg-green-400'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;