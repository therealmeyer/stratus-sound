import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class UserInfo extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.props.fetchUser(nextProps.userId);
    }
  }

  render () {
    const user = this.props.user;
    if (user.id !== this.props.userId) return (<div></div>);

    return (
      <Link to={`users/${user.id}`}>
        <div className="info">
            <img src={user.photo_url} />
            <h5>{user.username}</h5>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
