function IssueObject(name, username, birthdate, password) {
  (this.name = name),
    (this.username = username),
    (this.birthdate = birthdate),
    (this.password = password);
}

module.exports = IssueObject;
