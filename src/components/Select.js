const Select = ({value, onChange, values}) => (
    <select value={value} onChange={onChange}>
    {values.map((item) => (
      <option value={item}>{item}</option>
    ))}
  </select>
);
export default Select;