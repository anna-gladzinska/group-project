import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import {
  getNew,
  handleFavoriteProducts,
  actionCompareProducts,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  handleFavoriteProducts: id => dispatch(handleFavoriteProducts(id)),
  actionCompareProducts: id => dispatch(actionCompareProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
