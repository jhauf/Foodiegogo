import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import { RECEIVE_CATEGORY, BAKED_GOODS, RESTAURANT, ALCOHOLIC, FOR_THE_HOME, PHILANTHROPY} from "../../actions/category_actions";
import SearchContainer from '../search/search_container';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div>
      <h1 className="header">Campaigns</h1>
      <div className="categories">
        <button onClick={this.props.applyFilter(BAKED_GOODS)} > Baked Goods </button>
        <button onClick={this.props.applyFilter(RESTAURANT)}> Restaurants </button>
        <button onClick={this.props.applyFilter(ALCOHOLIC)}> Alcohol </button>
        <button onClick={this.props.applyFilter(FOR_THE_HOME)}> For the Home </button>
        <button onClick={this.props.applyFilter(PHILANTHROPY)}> Philanthropy </button>
        <button onClick={this.props.applyFilter("")}> All Campaigns </button>
      </div>
      <SearchContainer/>
      <ul className="campaignIndex">
        {
          this.props.campaigns.map(campaign => (
            <CampaignIndexItem
              key={campaign.id}
              campaign={campaign} />
          ))}
        </ul>
      </div>;
  }
}





export default CampaignIndex;
