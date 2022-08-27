export const handleSubmit = (evt, data, changeData) => {
  evt.preventDefault();
  changeData(`/gif/${data}`);
};
export const handleChange = (evt, changeData) => {
  changeData(evt.target.value);
};
