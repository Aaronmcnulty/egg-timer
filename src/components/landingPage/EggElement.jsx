import styles from "./cssModules/eggElement.module.css"


function EggElement() {

  return (

    <div>
      <div className={styles.egg}>
        <div className={styles.eggHighlight}></div>
        <div className={styles.yolk}>
          <div className={styles.yolkHighlight}>
            <div className={styles.yolkHighlightInner}>

            </div>
          </div>
          <div className={styles.yolkShadow}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EggElement;