import Link from 'next/link'
import * as Avatar from '@radix-ui/react-avatar'
import Tooltip from './Tooltip'

const GitHubAvatar = ({ avatar }) => {
    return (
        <Link href='/' passHref>
            <a className='w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full shadow-md translate-y-[-5px]'>
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

                    <Avatar.Fallback>NK</Avatar.Fallback>
                </Avatar.Root>
            </a>
        </Link>
    )
}

export default GitHubAvatar
