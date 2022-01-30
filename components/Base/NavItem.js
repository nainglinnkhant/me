import { useRouter } from 'next/router'

export default function NavItem({ children, path, mobile = false }) {
     const router = useRouter()

     let currentPage = path === router.asPath
     if (router.asPath.startsWith('/blog') && path === '/blog') currentPage = true

     const classes = mobile
          ? `${currentPage ? 'text-gray-500' : ''}`
          : `${currentPage ? 'border-b-3 border-black dark:border-gray-200' : ''} pb-2`

     return <li className={classes}>{children}</li>
}
