// components/PulsatingDot.tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

type PulsatingDotProps = {
  message?: string;
  positionClass?: string; // Customize position if needed (e.g., top-4 left-4)
};

export default function PulsatingDot({ message = "Click here", positionClass = "top-4 left-4" }: PulsatingDotProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`absolute ${positionClass} flex items-center justify-center`}>
            {/* Outer Pulsing Effect */}
            <div className="relative h-4 w-4 rounded-full bg-blue-600 animate-pulse">
              {/* Stronger Pulse */}
              <span className="absolute inline-flex w-full h-full rounded-full bg-blue-500 opacity-75 animate-ping duration-1000"></span>
              {/* Inner Dot */}
              <span className="relative inline-flex h-4 w-4 rounded-full bg-blue-700"></span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-background text-foreground p-2 rounded-md shadow-md text-sm">
          {message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
