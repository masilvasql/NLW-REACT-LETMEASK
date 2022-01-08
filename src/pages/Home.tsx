
import {useHistory} from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/button';

import '../styles/auth.scss';

export function Home(){
  
  const history = useHistory();
  const {signInWithGoogle, user} = useAuth();

  async function HandleCreateRoom(){

    if(!user){
      await signInWithGoogle();
    }

    history.push('rooms/new')
  
  }

  return(
    <div id = "page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração Simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <button className="create-room" onClick={HandleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou Entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit"> 
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}