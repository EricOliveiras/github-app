import { Layout } from './components/layout'
import { Profile } from './components/profile'
import { GlobalStyle } from './global/globalStayles'

export const App = () => {
  return (
    <main>
    <GlobalStyle />
      <Layout>
        <Profile />
      </Layout>
    </main>
  )
}

export default App
