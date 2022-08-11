import Link from 'next/link';
import { FooterContainer } from './styles';

export default function HeaderContainer() {
  return (
    <FooterContainer>
      Desenvolvido com <span>❤</span> <br />
      por
      <Link href="https://github.com/vinirocha05">
        <a> @vinirocha05 </a>
      </Link>
    </FooterContainer>
  );
}
