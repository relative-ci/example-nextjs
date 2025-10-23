import 'antd/dist/reset.css';
import { Layout } from '../layout';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
