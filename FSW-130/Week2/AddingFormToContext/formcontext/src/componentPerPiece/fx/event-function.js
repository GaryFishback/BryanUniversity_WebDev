handleClick = e => {
  this.state.textArea.length <= 3 ||
  this.state.FirstName.length <= 3 ||
  this.state.LastName.length <= 3 ||
  this.state.Email.length <= 3 ||
  this.state.PlaceofBirth.length <= 3 ||
  this.state.Phone.length <= 9 ||
  this.state.FavoriteFood.length <= 3
    ? (ifDisabled = true)
    : (ifDisabled = false);

  e.preventDefault();

  return ifDisabled === true ? null : this.creatingBadge();
};
handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};
