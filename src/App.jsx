import { Layout } from './components/layout'
import { Profile } from './components/profile'
import { Repositories } from './components/repositories'
import { GlobalStyle } from './global/globalStayles'

export const App = () => {
  return (
    <main>
    <GlobalStyle />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  )
}

export default App
