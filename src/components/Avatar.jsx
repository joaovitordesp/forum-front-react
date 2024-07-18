import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) { //desestruturação de objeto
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}