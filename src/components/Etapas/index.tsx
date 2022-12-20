import { Content, Grid } from './styles';

export default function Etapas() {
  return (
    <Content id="etapas">
      <h2>Etapas</h2> <br />
      <h3>Para criar sua site nós vamos usar essas 4 etaps</h3>
      <Grid>
        <div>
          <h3>1. Ideação</h3>
          <img src="/assets/ideia.png" alt="ideacao" />
          <p>
            É aqui onde tudo começa, nessa etapa vamos organizar as ideaias.
            Teremos alguns encontromos para que eu entenda a essência da sua
            marca e qual tipo de site melhor se adequa à sua necessidade.
          </p>
        </div>
        <div>
          <h3>2. Protótipo</h3>
          <img src="/assets/prototipo.png" alt="prototipo" />
          <p>
            É aqui que seu site começa a ganhar vida, com os insumos da parte 1
            eu começo a construir o site com a cara da sua empresa.
          </p>
        </div>
        <div>
          <h3>3. Lapidação</h3>
          <img src="/assets/diamante.png" alt="ideacao" />
          <p>
            Sei que você está ansioso para ver o resultado e é nessa etapa que
            vou apresentar a primeira versão do site. Aqui ainda cabem
            alterações para deixar o site do jeito que você deseja.
          </p>
        </div>
        <div>
          <h3>4. Entrega</h3>
          <img src="/assets/handshake.png" alt="ideacao" />
          <p>
            Agora que o site já foi validado eu termino de apertar os últimos
            parafusos e te entego o projeto finalizado.
          </p>
        </div>
      </Grid>
    </Content>
  );
}
