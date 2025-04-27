import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../components/preview-collection/collection-preview.component.jsx";
import "./collection-overview.styles.scss";
import { selecetCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections}) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selecetCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview);