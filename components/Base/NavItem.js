import { useRouter } from 'next/router'

export default function NavItem({ children, path, closeMobileMenu, mobile = false }) {
     const router = useRouter()

     let currentPage = path === router.asPath
     if (router.asPath.startsWith('/blog') && path === '/blog') currentPage = true

     const classes = `${currentPage ? 'border-b-3 border-black dark:border-gray-200' : ''} pb-2`

     if (mobile) {
          return (
               <li>
                    <span className={classes} onClick={closeMobileMenu}>
                         {children}
                    </span>
               </li>
          )
     }

     return <li className={classes}>{children}</li>
}
