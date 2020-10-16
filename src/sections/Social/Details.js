import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Generic from "../../components/Spinner/Generic"
import SubSocial from "./SubSocial";

const Details = ({ data }) => {
  console.log(data);
  if (!isLoaded(data)) return <Generic />;
  if(isEmpty(data)) return <div>No records found!</div>;
  if (!(data && data.length > 0)) return null;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((x) => <SubSocial data={x} key={x.id} />)}
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.social;
  const uid = state.firebase.auth.uid;
  return {
    data,
    uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "social",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Details);
