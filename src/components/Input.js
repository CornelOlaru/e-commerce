const Input = ({value, onChange, name}) => (
    <div>

    <label>{name}:</label>
      <input value={value} onChange={onChange} />
    </div>
)
export default Input;