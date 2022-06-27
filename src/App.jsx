import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <aside>
            <Sidebar />
          </aside>

          <main>

            <Post />
            <Post />
          </main>

        </div>
      </div>
    </>

  )
}

export default App
