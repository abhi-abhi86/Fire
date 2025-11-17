import { useState } from 'react'

const AnimatedInput = ({ type = 'text', name, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isFocused || value
            ? 'top-0 text-xs text-blue-600 bg-white px-1 transform -translate-y-1/2'
            : 'top-1/2 text-gray-500 transform -translate-y-1/2'
        }`}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default AnimatedInput
