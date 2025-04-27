import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CollectionPage =() => {
const { collectionId } = useParams();
const collections = useSelector((state) => selectCollection(collectionId)(state));
// console.log(collections);
const { title, items } = collections;
return(
<div className="collection-page">
    <h2 className="title"> {title} </h2>
    <div className="items">
        {items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
    </div>
</div>  
);
};


export default CollectionPage;


 