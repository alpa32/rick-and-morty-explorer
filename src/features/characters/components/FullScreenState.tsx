import styles from "./FullScreen.module.css";
interface Props {
    children: React.ReactNode;
    variant?: "loading" | "error";
  }


  
  export function FullScreenState({ children, variant = "loading" }: Props) {
    return (
      <div
        className={`${styles.stateWrapper} ${
          variant === "error" ? styles.error : styles.loading
        }`}
      >
        {children}
      </div>
    );
  }
  