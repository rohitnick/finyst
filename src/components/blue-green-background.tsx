import clsx from 'clsx'

export function BlueGreenBackground({
  className,
  ...props
}: {
  className?: string
}) {

  return (
    <div
      className={clsx(
        "invisible dark:visible absolute z-0 top-0 left-0 w-full h-full blur-[150px] md:blur-[450px] bg-cover bg-[url('/background.svg')]",
        className
      )}
      {...props}
    />
  )
}
