import React from 'react'

interface Props {
    label: string;
    color?: string;
    href: string;
    textColor?: string;
}

const Button = ({label, color, href, textColor}: Props) => {
  return (
    <a href={href} className={`${color ? 'bg-'+ color : 'bg-purple'} ${textColor ? 'text-' + textColor : 'text-white'} px-8 py-2 rounded-full text-white cursor-pointer `}>{label}</a>
  )
}

export default Button