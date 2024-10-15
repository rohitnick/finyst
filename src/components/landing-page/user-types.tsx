import { CheckIcon } from "@radix-ui/react-icons"

export default function UsersTypes() {
  const userTypes = [
    'INVESTORS',
    'INVESTMENT FIRMS',
    'FINANCIAL PROFESSIONALS',
    'INVESTMENT ADVISORS',
    'EDUCATORS'
  ]

  const opacityClass: Record<number, string> = {
    0: 'opacity-30',
    1: 'opacity-60',
    2: 'opacity-95',
    3: 'opacity-60',
    4: 'opacity-30'
  }

  return (
    <div className="mx-auto grid items-center md:grid-cols-2 gap-3 relative">
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="text-3xl lg:text-4xl font-bold md:text-left">
        Designed for All
      </h1>
      <p className="text-lg md:text-xl md:text-left text-muted-foreground">
        Empowering investors, firms, and advisors with the tools for smarter, faster decision-making.
      </p>
    </div>
    <div className="flex justify-end">
        <div className="grid gap-3 w-full md:w-auto">
          {userTypes.map((item, index) => (
            <div
              key={index}
              className={`${opacityClass[index]} opacity-60 bg-card rounded py-4 px-5 flex items-center gap-x-5 transition-transform hover:scale-105`}
            >
              <CheckIcon className="h-6 w-6 flex-shrink-0" />
              <span className="text-lg md:text-xl">{item}</span>
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}