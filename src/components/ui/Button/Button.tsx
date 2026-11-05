import styles from "./Button.module.css";

interface Proptypes {
  type?: 'button' | 'submit' | 'reset';
  children: string;
  onClick?: () => void;
  classname?: string;
  color?: 'primary' | 'secondary';
}

const Button = (props: Proptypes) => {
  const { type= 'button', children, color= 'primary', classname } = props;
  return (
    <button className={`${styles.button} ${styles[`button-${color}`]} ${classname}`} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button;