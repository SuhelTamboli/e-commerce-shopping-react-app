import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {

  const collections = useSelector(selectCollectionsForPreview);
  
  return(
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview
// });

export default CollectionsOverview;
