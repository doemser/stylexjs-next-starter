import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    minWidth: 100,
    minHeight: 50,
    padding: 15,
    backgroundColor: {
      default: "transparent",
      ":hover": "rgba(0,0,0,0.2)",
      ":active": "rgba(0,0,0,0.4)",
    },
    borderStyle: "none",
    cursor: "pointer",
  },
  outlined: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
  contained: {
    backgroundColor: {
      default: "black",
      ":hover": "rgba(0,0,0,0.8)",
      ":active": "rgba(0,0,0,0.6)",
    },
    color: "white",
  },
});

export default function Button({
  children,
  variant,
}: {
  children: string;
  variant?: "outlined" | "contained";
}) {
  return (
    <button {...stylex.props(styles.button, variant && styles[variant])}>
      {children.toUpperCase()}
    </button>
  );
}
