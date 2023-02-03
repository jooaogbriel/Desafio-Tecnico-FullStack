import * as C from './styles';

export const Dash = () => {
    return (
      <C.Container>
      <div>
        <main>
            <h2>Se Registre</h2>
            <input placeholder="Nome completo" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Telefone" type="text" />
            <button>Registar</button>
            <h3>Seus Dados:</h3>
            <p>nome:</p>
            <p>email:</p>
            <p>telefone:</p>
        </main>

        <main>
            <h2>Cadastrar contatos</h2>
            <input placeholder="Nome completo" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Telefone" type="text" />
            <button>Cadastrar</button>
            <h3>Seus contatos:</h3>
        </main>

       </div>
       </C.Container>
    )
}