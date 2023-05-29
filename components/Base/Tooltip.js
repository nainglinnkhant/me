import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const Tooltip = ({ children, content, ...props }) => {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        className='z-50 ml-4 select-none rounded bg-white px-2.5 py-2 text-xs text-slate-600 shadow-md'
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
