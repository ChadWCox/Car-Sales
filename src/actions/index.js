

export const ADD_FEATRUE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addFeature = feature => {
    return {
        type: ADD_FEATRUE,
        payload: feature
    }
};

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
};

export const mapStateToProps = state => {
    return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
    }
  }