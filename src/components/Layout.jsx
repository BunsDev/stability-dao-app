import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import Sidebar from './Sidebar'
import Modals from '@/src/components/modal/modals'
import { useRouter } from 'next/router'

function Layout({ children }) {
    const [Mode, setMode] = useState(null)
    const [mounted, setMounted] = useState(false);
    const [Title, setTitle] = useState('')
    const { pathname } = useRouter();
    useEffect(() => {
        const scroolTOP = document.getElementById('scroolTOP')
        if (scroolTOP) {
            scroolTOP.scrollTop = 0;
        }
    }, [pathname])
    useEffect(() => {
        let route = pathname.replace('/', '')
        setTitle(route ? route[0].toUpperCase() + route.slice(1) : '')
    }, [pathname])
    useEffect(() => {
        setMounted(true)
        const mode = localStorage.getItem("mode")
        if (!mode) {
            setMode(true)
        }
        else {
            setMode(JSON.parse(mode))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(Mode))
    }, [Mode])
    function getLibrary(provider) {
        return new Web3(provider);
    }

    if (!mounted) return (
        <div className='flex justify-center items-center mr-6 h-screen w-screen bg-indigo-900'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-white'>
            </div>
        </div>
    )
    return (
        <Web3ReactProvider getLibrary={getLibrary} >
            <main className={Mode ? "dark" : "" + "overflow-y-hidden h-screen"} >
                <Head>
                    <title>{Title ? `${Title} - ` : ""}Stability</title>
                    <meta name="description" content="Profit generating DeFi protocol" />
                    <link rel="icon" href="/logo_nolines_256.png" />
                </Head>
                <div className="flex flex-row">
                    <Sidebar Mode={Mode} />
                    <div id="scroolTOP" className="w-full h-screen overflow-y-auto">
                        <main className="dark:bg-gradient-to-br dark:from-black dark:via-space dark:to-black dark:text-white">
                            <Navbar Mode={mode => setMode(mode)} />
                            {children}
                        </main>
                    </div>
                </div>
                <Modals />
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={"colored"} icon={false} />
            </main>
        </Web3ReactProvider>
    )
}

export default Layout
