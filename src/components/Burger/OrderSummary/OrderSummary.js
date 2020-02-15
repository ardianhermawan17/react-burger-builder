import React , {Component} from 'react';

import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a functional component , doesn't have to be class
    componentDidUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] WillUpdate');
    }; //Bisa memelih pakai componentDidUpdate atau componentWillUpdate

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to CheckOut?</p>
                <Button
                    btnType='Danger'
                    clicked={this.props.purchaseCanceled}
                >BATALKAN</Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseContinue}
                >TERUSKAN</Button>
            </Aux>
        );
    }

}

export default OrderSummary;