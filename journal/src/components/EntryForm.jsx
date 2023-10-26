// eslint-disable-next-line react/prop-types
export function EntryForm({ formName, textAreaName, buttonName }) {
  return (
    <form>
      <label htmlFor={formName}>{formName} </label>
      <input type="text" name={formName} id={formName}></input>
      <label htmlFor={textAreaName}>{textAreaName} </label>
      <textarea name={textAreaName} id="" cols="30" rows="10"></textarea>
      <button type="button">{buttonName}</button>
    </form>
  );
}
