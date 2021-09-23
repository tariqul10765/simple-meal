import React, { useEffect, useState } from 'react';
import { getDataToLocalStorage } from '../../utilities/localStorage';
import './Order.css';

const Order = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('This is from order initial load');
        const getData = JSON.parse(getDataToLocalStorage('orders'));
        if(getData){
            const result = Object.keys(getData).map((key) => [String(key), getData[key]]);
            console.log(result);
            setData(result);
        }
    }, []);
    return (
        <div className="order">
            <h1>Oder!!</h1>
            <div>
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
                
            </div>
        </div>
    );
};

export default Order;