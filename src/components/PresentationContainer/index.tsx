import Link from 'next/link';
import { Main, PresentationText, GithubLink, LinkedinLink } from './styles';

export default function HeaderContainer() {
  return (
    <Main>
      <PresentationText>
        <h2>Hello world!</h2>
        <p>Meu nome é Vinicius</p>
        <h3>dev Front End em desenvolvimento</h3>
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

      <img src="/assets/svg1.svg" alt="random" />
    </Main>
  );
}
