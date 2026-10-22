import { useId } from 'react'

type Props = {
  top?: string
  line1?: string
  line2?: string
  className?: string
}

export default function RubberStamp({
  top = 'ADVENTURES AROUND THE WORLD ✦ ',
  line1 = 'COMING',
  line2 = 'SOON',
  className = '',
}: Props) {
  const id = 'rs' + useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={`${line1} ${line2}`}
      style={{ mixBlendMode: 'multiply' }}
    >
      <defs>
        <path id={id} d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
      </defs>
      <g fill="none" stroke="currentColor">
        <circle cx="100" cy="100" r="93" strokeWidth="4" />
        <circle cx="100" cy="100" r="86" strokeWidth="1.4" />
        <circle cx="100" cy="100" r="50" strokeWidth="1.4" />
      </g>
      <text fill="currentColor" fontSize="14.5" fontWeight="700" fontFamily="Instrument Sans, sans-serif">
        <textPath href={`#${id}`} textLength="438" lengthAdjust="spacing">
          {top}
        </textPath>
      </text>
      <g fill="currentColor" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="800">
        <text x="100" y="94" fontSize="23">{line1}</text>
        <text x="100" y="119" fontSize="23">{line2}</text>
      </g>
    </svg>
  )
}
