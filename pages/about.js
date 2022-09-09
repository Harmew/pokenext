import Image from "next/image";

import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        repudiandae exercitationem autem id quisquam voluptatum asperiores
        accusantium, quod odit, doloribus commodi beatae. Eius consequatur amet
        eligendi maxime sed doloremque! Iusto!
      </p>
      <Image
        src="/images/charizard.png"
        alt="Charizard"
        width={300}
        height={300}
      />
    </div>
  );
}

export default About;
