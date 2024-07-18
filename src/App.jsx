import { Header } from "./components/Header"
import './global.css'
import styles from  "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

export function App() {
  return ( // não pode ter mais de um componente sem um div
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
            <Post
              author="Joao Vitor"
              content="Teste na barreira que virará baile e é isso"
            />

            <Post
              author="Joao Vitor"
              content="Teste na barreira que virará baile e é isso"
            />

        </main>
      </div>
    </div>
  )
}

export default App
