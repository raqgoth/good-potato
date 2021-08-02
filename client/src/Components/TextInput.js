import React from 'react'

const TextInput = (props) =>
  props.fieldType === 'textfield' ? (
    <textarea
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      placeholder={props.placeholder}
      required
    />
  ) : (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      placeholder={props.placeholder}
      autoComplete="false"
      required
    />
  )
export default TextInput