import Link from 'next/link';
import { useState } from 'react';
import { Header, Content, NavMobile } from './styles';

export default function HeaderContainer() {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Content>
        <p>
          <strong>LOGO</strong>
        </p>
        <nav>
          <ul>
            <li>
              <Link href="#sobre">
                <a> Sobre mim</a>
              </Link>
            </li>
            <li>
              <Link href="#tecnologias">
                <a>Tecnologias</a>
              </Link>
            </li>
            <li>
              <Link href="#projetos">
                <a>Projetos</a>
              </Link>
            </li>
          </ul>
        </nav>
        {open ? '' : <span onClick={() => setOpen(!open)}>☰</span>}
      </Content>
      <NavMobile open={open}>
        <span onClick={() => setOpen(!open)}>&#x274c;</span>

        <ul>
          <li>
            <Link href="#sobre">
              <a> Sobre mim</a>
            </Link>
          </li>
          <li>
            <Link href="#tecnologias">
              <a>Tecnologias</a>
            </Link>
          </li>
          <li>
            <Link href="#projetos">
              <a>Projetos</a>
            </Link>
          </li>
        </ul>
      </NavMobile>
    </Header>
  );
}
