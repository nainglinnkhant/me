import Link from 'next/link'
import * as Avatar from '@radix-ui/react-avatar'
import Tooltip from './Tooltip'

const GitHubAvatar = ({ avatar }) => {
    return (
        <Link href='/' passHref>
            <a className='flex h-[42px] w-[42px] translate-y-[-5px] items-center justify-center rounded-full bg-white shadow-md before:absolute before:z-[-10] before:h-[40px] before:w-[40px] before:animate-[spin_3s_linear_infinite] before:rounded-full before:bg-[length:300%] before:content-[""] before:[background:linear-gradient(45deg,#e4e4e7,#e4e4e7,#e4e4e7,#e4e4e7,#a1a1aa,#52525b)]'>
                <Avatar.Root>
                    <Tooltip content="Naing Linn Khant's GitHub Avatar" sideOffset={7}>
                        <Avatar.Image
                            src={avatar}
                            alt="Naing Linn Khant's GitHub Avatar"
                            width={35}
                            height={35}
                            className='rounded-full'
                        />
                    </Tooltip>

                    <Avatar.Fallback className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white'>
                        NK
                    </Avatar.Fallback>
                </Avatar.Root>
            </a>
        </Link>
    )
}

export default GitHubAvatar
