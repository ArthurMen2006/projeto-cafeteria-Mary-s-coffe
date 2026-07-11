import '../styles/About.css'
import aboutImage from '../assents/images/aboutImage.png'

function about() {
    return (
        <>
            <div className="about">
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>Sobre a Mary's Coffee</h2>
                        <p>
                            A Mary’s Coffee nasceu do desejo de transformar o
                            simples ato de tomar café em uma experiência especial
                            . Cada detalhe foi pensado para criar um ambiente
                            acolhedor, onde o aroma do café fresco, o cuidado no
                            preparo e o atendimento atencioso se unem para
                            oferecer momentos únicos.
                            Trabalhamos com grãos selecionados e processos que
                            valorizam o sabor, a qualidade e a autenticidade de
                            cada bebida. Mais do que servir café, buscamos criar
                            conexões, incentivar boas conversas e proporcionar
                            uma pausa agradável na rotina.
                        </p>

                    </div>

                    <div className="aboutImage">
                        <img src={aboutImage} alt="Ambiente da cafeteria" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default about