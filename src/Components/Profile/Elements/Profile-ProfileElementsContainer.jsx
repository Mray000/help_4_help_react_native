import { connect } from "react-redux";
import ProfileElements from "./Profile-ProfileElements";
import {
  UpdateStatus,
  // UpdatePhoto,
} from "../../../Redux/Reducers/ProfileReducer";
import { compose } from "redux";
const mapStateToProps = (state) => ({
  profile: state.Profile.profile,
  myId: state.Auth.id,
});

const ProfileElementsContainer = compose(
  connect(mapStateToProps, { UpdateStatus })
)(ProfileElements);

export default ProfileElementsContainer;
