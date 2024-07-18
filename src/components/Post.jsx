import { Avatar } from "./Avatar";
import { Comment } from "./Comments";
import styles from "./Post.module.css";

export function Post() {
  <div>
    return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/joaovitordesp.png"
          />
          <div className={styles.authorInfor}>
            <strong>João Vitor</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="05 de Maio às 08:55" dateTime="2024-05-08 08:55:11">
          Publicado há{" "}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa v👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
          v🚀
        </p>

        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> 
          <a href="">#jvs</a>{" "}
          <a href="">#JVS Company</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
    )
  </div>;
}

export default Post;
