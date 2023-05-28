import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const Tooltip = ({ children, content, ...props }) => {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        className='ml-4 z-50 text-xs bg-white rounded shadow-md px-2.5 py-2 text-slate-600 select-none'
                        {...props}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className='fill-white' />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}

export default Tooltip
