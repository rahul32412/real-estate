class CreateErr extends error {
  constructor({ msg, statusCode }) {
    super(msg);
    this.statusCode = statusCode;
  }
}

export default CreateErr;
