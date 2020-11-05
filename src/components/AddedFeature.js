import React from 'react';
import { removeFeature, mapStateToProps } from '../actions/';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
