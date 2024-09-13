import { CheckIcon } from "@radix-ui/react-icons"

export default function UsersTypes() {
  const userTypes = [
    'INVESTORS',
    'INVESTMENT FIRMS',
    'FINANCIAL PROFESSIONALS',
    'INVESTMENT ADVISORS',
    'EDUCATORS'
  ]

  const opacityClass: any = {
    0: 'opacity-30',
    1: 'opacity-60',
    2: 'opacity-95',
    3: 'opacity-60',
    4: 'opacity-30'
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-3">
        <div className="flex-4 flex flex-row grow items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
              AI for Financial <br/>Workflows.
            </h1>
            <p className="text-lg md:text-xl text-left">
              Join us today and experience the power of AI-powered financial <br/> operations.
            </p>
          </div>
        </div>
        <div className="flex-3">
          <div className="grid gap-3">
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
    </div>
  )
}