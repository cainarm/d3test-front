import React from 'react';
import HfSection from './HfSection';
import Navbar from './Navbar';
import RoundButton from './RoundButton';
import ButtonSwitch from './ButtonSwitch';
import PageSection from './PageSection';

const Home = props =>
  <div>
    <header>
      <HfSection
        leftText="EXP_"
        rightText="Karol com 5K_"
      />
    </header>
    
    <div className="text-center">
      <h1 style={{fontWeight: 'bold'}}>Cadastro</h1>
    </div>

    <Navbar 
      numbers={4}
      active={4}
    />
    
    <div className="content">
      <h3>Pagamento</h3>
    
      <PageSection
        title="Endereço de entrega"
      > 
        <ButtonSwitch 
          firstOption="É o mesmo endereço de entrega"
          secondOption="É diferente da entrega"
          onToggle = {() => null}
        />
      </PageSection>
      
      <PageSection
        title="Qual o seu CEP de cobrança ?"
      >

      </PageSection>
    </div>

    <footer>
      <HfSection
        leftText="EXP_"
        rightText="Karol com 5K_"
        reverse
      />
    </footer>
  </div>;


export default Home;
