import { connect } from 'react-redux';
import Feedback from './Feedback';
import { getFeedback } from '../../../redux/feedbackRedux';

const mapStateToProps = state => ({
  feedback: getFeedback(state),
});

export default connect(mapStateToProps)(Feedback);
