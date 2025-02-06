import Card from "./components/card";
import um from "./assets/1.jpg";
import tres from "./assets/3.jpg";
import quatro from "./assets/4.jpg";
import seis from "./assets/6.jpg";
import sete from "./assets/7.jpg";
import nove from "./assets/9.jpg";
import quatorze from "./assets/14.jpeg";
import quinze from "./assets/15.jpg";
import dezesseis from "./assets/16.jpeg";
import dezoito from "./assets/18.jpeg";
import dezenove from "./assets/19.jpeg";

export default function Home() {
  const cardsData = [
    { title: "O apoio que você sempre me deu", imageUrl: um },
    {
      title: "Sempre acreditou em mim",
      subtitle: "incentivou tudo que eu quis fazer",
    },
    { title: "Tem os dentinhos mais lindos do mundo", imageUrl: tres },
    { title: "Seu cabelo é cheiroso", imageUrl: quatro },
    { title: "Faz eu me sentir um homem bom" },
    {
      title: "Ama bichinhos",
      subtitle: "gato, chorro, poico, pivara, etc",
      imageUrl: seis,
    },
    { title: "Amo seu estilo", subtitle: "Você é incrível", imageUrl: sete },
    { title: "Completa meu senso de humor", subtitle: "é boboca" },
    {
      title: "Gosta de ir no cinema",
      subtitle: "nosso encontro",
      imageUrl: nove,
    },
    { title: "Presta atenção nas coisas que eu mostro" },
    {
      title: "Adoro as roupas e presentes que me dá",
      subtitle: "me deixa muito bonito",
    },
    { title: "Amo a sua CÚlinaria" },
    {
      title: "Sempre propõe coisas novas",
      subtitle: "me tira da zona de conforto",
    },
    { title: "Nosso amor é único", imageUrl: quatorze },
    { title: "Me aguenta há 5 anos", subtitle: "bobões", imageUrl: quinze },
    { title: "É MUITO gostosa", subtitle: "tesuda", imageUrl: dezesseis },
    { title: "Fica linda de cabelo roxo" },
    { title: "Parece a Lady Gaga", imageUrl: dezoito },
    { title: "É a melhor mãe que existe", imageUrl: dezenove },
    { title: "Nosso sexo" },
    { title: "Meu destino é te amar", subtitle: "vou cumprir ele" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-pink-100 text-pink-900">
      <div className="my-10 text-4xl font-bold text-center animate-fadeIn">
        <h1 className="bg-gradient-to-r from-pink-500 to-red-500 text-white inline-block px-6 py-2 rounded-lg shadow-lg">
          Oi, meu amor! 💖
        </h1>
        <p className="text-center text-lg mt-4 px-4 font-medium">
          Decidi usar minhas &quot;habilidades&quot; para tentar tornar seu dia
          um pouco mais especial. Aqui vão apenas 21 motivos dos milhões que eu
          tenho para te amar.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-4 animate-fadeInUp">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <p className="text-center text-lg mt-4 mb-4 px-4 font-semibold">
        Espero que essas lembranças façam você se sentir tão incrível quanto
        você realmente é. Feliz aniversário Renata! Eu te amo muito e pra
        sempre. 💘
      </p>
    </div>
  );
}
