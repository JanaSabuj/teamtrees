import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Generic from "../../components/Spinner/Generic"
import SubExp from "./SubExp";
import {Alert} from "reactstrap"

const Details = ({ data }) => {
  console.log(data);
  if (!isLoaded(data)) return <Generic />;
  if (!(data && data.length > 0)) return <Alert color="danger"> No records to show! </Alert>;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((x) => <SubExp data={x} key={x.id} />)}
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.exp;
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
      collection: "exp",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Details);

// export default Tasks;
