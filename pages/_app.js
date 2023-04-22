// layouts
import { MainLayout } from 'layouts/Main'
// styles
import 'styles/globals.scss'

export default ({ Component, pageProps }) => {

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  ) 
}