import React from 'react';
import { useLoaderData } from 'react-router-dom';

const InventoryDetails = () => {
    const { _id, name, description, img, price, quantity, supplierName } =
        useLoaderData();
    console.log(name);
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default InventoryDetails;
