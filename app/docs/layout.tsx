export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative px-6 text-start">{children}</div>;
}
