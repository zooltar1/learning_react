import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch} from '../../redux/cardsRedux';
import {createActionChange} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createActionChange(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);