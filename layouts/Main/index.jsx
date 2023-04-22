import Head from 'next/head'

// components
import { Footer } from 'components/Footer'
import { About } from 'components/About'
import {Projects} from 'components/Projects'

export const MainLayout = () => {
    return (
        <div>
        <div className='main'>
            <div className='main__container'>
            <Head>
                <title>Тестовое задание</title>
            </Head>

           
            <About/>
            
            </div>
        </div>
        <div className='main__container'>
        <Projects/>
        <Footer /></div></div>
    )
}