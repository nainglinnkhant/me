export default function Footer() {
    return (
        <footer className='flex items-center justify-center pb-8'>
            <p className='text-sm'>
                Crafted by <span className='font-semibold'>Naing Linn Khant</span> &copy;{' '}
                {new Date().getFullYear()}
            </p>
        </footer>
    )
}
