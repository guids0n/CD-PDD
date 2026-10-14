import './styles.css';

export const metadata = { title: 'Calculadora CD' }
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
