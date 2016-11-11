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
      <SearchContainer/>
      <li className="header">What's Popular</li>
      <div className="categories">
      <h1>Categories</h1>
      <button onClick={this.props.applyFilter(BAKED_GOODS)}> Baked Goods </button>
      <button onClick={this.props.applyFilter(RESTAURANT)}> Restaurant</button>
      <button onClick={this.props.applyFilter(ALCOHOLIC)}> Alcoholic Beverages</button>
      <button onClick={this.props.applyFilter(FOR_THE_HOME)}> For the Home</button>
      <button onClick={this.props.applyFilter(PHILANTHROPY)}> Philanthropy </button>
      <button onClick={this.props.applyFilter("")}> All Campaigns </button>
      </div>
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
