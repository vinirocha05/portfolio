import Link from 'next/link';
import { Main, PresentationText, GithubLink, LinkedinLink } from './styles';

export default function HeaderContainer() {
  return (
    <Main>
      <PresentationText>
        <h2>Hello world!</h2>
        <p>My name is Vini</p>
        <h3>a Front End dev in development</h3>
        <Link href="https://github.com/vinirocha05">
          <GithubLink>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
            />
            <a>Github</a>
          </GithubLink>
        </Link>
        <Link href="https://www.linkedin.com/in/vinicius-aquino-rocha-54b93716a/">
          <LinkedinLink>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt=""
            />
            <a>Linkedin</a>
          </LinkedinLink>
        </Link>
      </PresentationText>

      <img
        src="https://source.unsplash.com/random/800x600

"
        alt="random"
      />
    </Main>
  );
}
