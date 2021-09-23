import React, { useEffect, useState } from 'react';
import { getDataToLocalStorage } from '../../utilities/localStorage';
import './Order.css';

const Order = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = JSON.parse(getDataToLocalStorage('orders'));
        if(getData){
            const result = Object.keys(getData).map((key) => [String(key), getData[key]]);
            setData(result);
        }
    }, []);

    const orders = (
        <table>
            <tr>
                <th>name</th>
                <th>quantity</th>
            </tr>
                {
                    data.map(d => {
                        return (
                            <tr>
                                <td>{d[0]}</td>
                                <td>{d[1]}</td>
                            </tr>
                        );
                    })
                }
        </table>
    )
    return (
        <div className="order">
            <h1>Oders!!</h1>
            <div>
                {
                    data.length? orders : 'You have no order yet'
                }
            </div>
        </div>
    );
};

export default Order;