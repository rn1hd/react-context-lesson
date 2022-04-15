import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import CollectionsContext from "../../contexts/collections/collections.context";
import { getCollectionsForPreview } from "../../contexts/collections/shop.utils";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const shopData = useContext(CollectionsContext);
  const collections = getCollectionsForPreview(shopData);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
