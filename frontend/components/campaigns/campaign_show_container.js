import { connect } from 'react-redux';
import CampaignShow from './campaign_show';
import { fetchCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    campaign: state.campaigns[parseInt(ownProps.params.campaignId)]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
