import {QueryClientProvider, QueryClient} from 'react-query'
import './main.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
  </>
  )
}

export default MyApp
