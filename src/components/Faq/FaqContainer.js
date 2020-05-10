import {connect} from 'react-redux';
import Faq from './Faq';

const mapStateToProps = state => ({
  title: state.app.title,
  image: state.app.image,
});

export default connect(mapStateToProps)(Faq);