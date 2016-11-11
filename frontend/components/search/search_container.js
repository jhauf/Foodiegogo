import { connect } from 'react-redux';
import Search from './search.jsx';
import { queryDatabase } from '../../actions/campaign_actions';

const mapDispatchToProps = dispatch => ({
  queryDatabase: query => dispatch(queryDatabase(query))
});


export default connect(
  null,
  mapDispatchToProps
)(Search);
