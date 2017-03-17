import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

const LoginInput = props => (
  <div className="form-group">
    <input {...props.input} {...props} />
  </div>
)

const LoginForm = (props) => {
  const submitLogin = (values) => {
    props.login(values.username, values.password)
  }
  return (
    <div className="login-form">
      <form onSubmit={props.handleSubmit(submitLogin)}>
        <div className="login-label">
          Log in with your username
        </div>
        <Field name="username" component={LoginInput} type="text" className="form-control" placeholder="Username" />
        <Field name="password" component={LoginInput} type="password" className="form-control" placeholder="Password" />
        <div className="form-group text-right">
          <button className="btn btn-default">Log in</button>
        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
})

export default connect(null, mapDispatchToProps)(LoginReduxForm)
// or export default connect(null, { login})(LoginReduxForm)) and don't have to have mapStateToProps