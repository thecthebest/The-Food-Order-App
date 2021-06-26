import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
        const cartCtx = useContext(CartContext);
        const { items } = cartCtx;
        const numberOfCartItems = items.reduce((curNumber, item) => {
            return curNumber + item.amount;
        }, 0);
        const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
        const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;
        useEffect(()=>{
            if (items.length === 0) {
                return;
            }
            setBtnIsHighLighted(true);
            const timer = setTimeout(()=>{
                setBtnIsHighLighted(false);
            }, 300);
            return () => {
                clearTimeout(timer);
            }
        }, [items]);
    return (
        <button onClick={props.onClick } className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;