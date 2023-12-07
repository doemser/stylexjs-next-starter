import stylex from "@stylexjs/stylex";
import Button from "@/components/Button";

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    minHeight: 200,
    padding: 20,
    backgroundColor: "lightgrey",
  },
  animated: {
    animationName: fadeIn,
    animationDuration: "1s",
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.main, styles.animated)}>
      <Button>Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </main>
  );
}
