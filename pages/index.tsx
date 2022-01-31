import Head from 'next/head'
import Header from '../components/Header';
import React from "react";

export default function Home() {
    return (
        <div className='max-w-8xl mx-auto'>
            <Head>
                <title>
                    Medior
                </title>

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />

            <div className='flex justify-between items-center bg-blue-200 border-y border-black py-10 lg:py-0'>
                <div className='px-20 space-y-4'>
                    <h1 className='text-6xl max-w-xl font-serif'>
                        <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect
                    </h1>

                    <h2>
                        It's easy and free to post your thinking on any topic and connect with millions of readers.
                    </h2>

                    <div className='flex items-center pb-5'>
                        <h3 className='text-white bg-green-500 px-4 py-1 rounded-full'>
                            Start Writing
                        </h3>
                    </div>
                </div>

                <div className=''>
                    <img
                        className='hidden md:inline-flex h-32 lg:h-full'
                        src='https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-medium-1.png'
                        alt='Medium'
                    />
                </div>
            </div>
        </div>
    )
}
