import React, {useEffect, useState} from 'react';
import { getData } from './api';

const CartFact = () => {

    const [facts, setFacts] = useState([]);
   
    useEffect(() => {

        const controller = new AbortController();

        getData(controller.signal)
        .then((response) => setFacts(response))
        .catch((error) => alert(error));

        return () => {
            controller.abort();
        }
    }, [])

    return (
        //<div>{facts}</div>
        <div>
            {
                facts.map((fact) => {
                    return (
                        <div>
                            {fact.fact} - {fact.length}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartFact
