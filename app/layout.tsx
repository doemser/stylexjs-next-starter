import "./globals.css";

export const metadata = {
  title: "StyleX next.js Starter",
  description: "A doemser experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
