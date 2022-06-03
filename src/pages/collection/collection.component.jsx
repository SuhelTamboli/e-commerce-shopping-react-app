import React from 'react';
//import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = () => {

  const { collectionId } = useParams();
  console.log(collectionId);
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;
