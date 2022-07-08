
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {

  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam recusandae accusantium impedit neque doloribus, perferendis nemo eum iusto earum nam sit doloremque, assumenda, eaque ullam placeat. Sapiente, maxime dolorem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corporis ipsum perspiciatis explicabo culpa ducimus necessitatibus nesciunt porro optio, animi molestias nemo quia, ab, placeat ex architecto blanditiis repellat? Commodi.</p>
      <Image
        className={styles.image}
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}