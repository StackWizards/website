import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-2 sm:px-4 lg:px-6', className)}
      {...props}
    />
  )
}
