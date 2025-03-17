import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};
