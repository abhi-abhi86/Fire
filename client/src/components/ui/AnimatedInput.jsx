const AnimatedInput = ({ type = 'text', name, placeholder, value, onChange, required }) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 text-white placeholder-transparent bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-accent peer"
        placeholder={placeholder}
      />
      <label
        className="absolute text-gray-400 transition-all duration-300 left-4 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent peer-valid:top-0 peer-valid:text-sm peer-valid:text-accent"
      >
        {placeholder}
      </label>
    </div>
  )
}

export default AnimatedInput
