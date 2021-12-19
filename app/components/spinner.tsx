import clsx from 'clsx'

type SpinnerProps = {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <svg
      className={clsx('w-6 h-6 animate-spin', className)}
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        r="35"
        strokeDasharray="170"
      />
    </svg>
  )
}
