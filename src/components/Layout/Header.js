import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
const Header = () => {
    return (
        <Fragment>
            <header>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} alt="A table full of food!" />
            </div>
        </Fragment>
    );
};

export default Header;