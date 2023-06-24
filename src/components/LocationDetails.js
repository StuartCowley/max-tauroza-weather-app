import React from "react";

const LocationDetails = ({ city, country, errorMessage }) => {
  LocationDetails.defaultProps = {
    errorMessage: "",
  };
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1>{`${city}, ${country}`}</h1>
  );
};

export default LocationDetails;
