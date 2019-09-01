import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})

export default connect(mapStateToProps)(CollectionsOverview)