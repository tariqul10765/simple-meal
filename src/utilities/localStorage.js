const addDataToLocalStorage = (id) => {
    const exist = localStorage.getItem('orders');

    let orders = {};
    if(!exist){
        orders[id] = 1;
    }
    else {
        orders = JSON.parse(exist);
        if(orders[id]) orders[id] += 1;
        else orders[id] = 1;
    }

    localStorage.setItem('orders', JSON.stringify(orders));
}

const getDataToLocalStorage = (key) => {
    const getData = localStorage.getItem(key);
    return getData;
}

export {addDataToLocalStorage, getDataToLocalStorage};