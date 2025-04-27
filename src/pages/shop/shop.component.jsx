import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import {Route, Routes} from 'react-router-dom';
import CollectionPage from "../category/collection.component.jsx";


const ShopPage = ( ) => (
    <div className="shop-page">
        <Routes>
        <Route index element={<CollectionOverview />} />
        <Route path="/:collectionId" element={<CollectionPage/>}/>
        </Routes>
    </div>
);

export default ShopPage;