import Link from 'next/link';
import { Header, Content } from './styles';

export default function HeaderContainer() {
  return (
    <Header>
      <Content>
        <p>
          <strong>LOGO</strong>
        </p>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a> Sobre mim</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Tecnologias</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Exercícios</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Header>
  );
}
