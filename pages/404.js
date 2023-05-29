import Image from 'next/image'
import DocumentHead from '../components/Layout/DocumentHead'
import pageNotFound from '../public/general/page-not-found.svg'

export default function NotFound() {
    return (
        <>
            <DocumentHead title='Page Not Found | Naing Linn Khant' content='Page Not Found!' />

            <main className='wrapper'>
                <div className='flex h-screen w-full flex-col items-center justify-center'>
                    <Image src={pageNotFound} width='400px' height='400px' alt='Page Not Found' />

                    <h2 className='text-xl font-semibold'>Page Not Found!</h2>
                </div>
            </main>
        </>
    )
}
