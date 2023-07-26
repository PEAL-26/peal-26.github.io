import { CartazItemType } from '../cartaz/types'

interface Hobby {
  [key: string]: any
}

export const hobbiesData: Hobby = {
  animes: [
    {
      title: 'Naruto Classico',
      description:
        'Naruto, um jovem ninja desajeitado e hiperativo, busca se tornar o Hokage da sua vila, enfrentando desafios, fazendo amizades e descobrindo segredos obscuros sobre seu passado.',
      state: 'assistido',
      image: '/images/animes/naruto-classico.jpeg',
      alt: 'naruto-classico',
      link: '',
    },
    {
      title: 'Naruto Shippuden',
      description:
        'Naruto Shippuden acompanha Naruto Uzumaki e seus aliados enquanto enfrentam ameaças mais poderosas, incluindo a busca pelo resgate de Sasuke Uchiha. A história explora temas de amadurecimento, redenção e luta contra a escuridão, enquanto Naruto se esforça para proteger seus entes queridos e alcançar seu objetivo de unir e trazer paz ao mundo ninja.',
      state: 'assistido',
      image: '/images/animes/naruto-shippuden.jpeg',
      alt: 'naruto-shippuden',
      link: '',
    },
    {
      title: 'Boruto',
      description: '',
      state: 'assistindo',
      image: '/images/animes/boruto.jpeg',
      alt: 'boruto',
      link: '',
    },
    {
      title: 'Dragon Ball Z',
      description: '',
      state: 'assistido',
      image: '/images/animes/dragon-ball-z.jpeg',
      alt: 'dragon-ball-z',
      link: '',
    },
    {
      title: 'Dragon Ball GT',
      description: '',
      state: 'assistido',
      image: '/images/animes/dragon-ball-gt.jpeg',
      alt: 'dragon-ball-gt',
      link: '',
    },
    {
      title: 'Dragon Ball Super',
      description: '',
      state: 'assistido',
      image: '/images/animes/dragon-ball-super.jpeg',
      alt: 'dragon-ball-super',
      link: '',
    },
  ],

  bonecos: [
    {
      title: 'Sorte',
      description:
        'Em Luck, Sam Greenfield, a pessoa mais sem sorte do mundo, um belo dia encontra a desconhecida Terra da Sorte e vai em busca de um pouquinho de sorte na vida. Mas como humanos não são permitidos, sua única chance é juntar-se às criaturas mágicas que lá vivem. A Sorte e o Azar, duas organizações secretas, atuam há milênios na vida dos seres terrestres. O desvendamento de como essas instituições atuam irá revelar sua influência no nosso cotidiano.enfrentando desafios, fazendo amizades e descobrindo segredos obscuros sobre seu passado.',
      state: 'assistido',
      image: '/images/bonecos/sorte.webp',
      alt: 'sorte',
      link: '',
    },
    {
      title: 'Gato das Botas 2',
      description:
        'O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.',
      state: 'Assistido',
      image: '/images/bonecos/gato-das-botas-2.jpeg',
      alt: 'gato-das-botas-2',
      link: '',
    },
  ],

  filmes: [
    {
      name: 'O Predador: Primeira Presa',
      description:
        'Em 1719, uma habilidosa guerreira Comanche tenta proteger seu povo de um predador alienígena altamente evoluído que caça humanos por esporte. Ela luta contra a natureza, colonizadores perigosos e essa criatura misteriosa para manter sua tribo segura.',
      state: 'Assistido',
      image: '/images/filmes/o-predador.jpeg',
      alt: 'o-predador',
      link: '',
    },
    {
      name: 'Pantera Negra: Wakanda para Sempre',
      description:
        'Uma equipe de elite de mercenários invade um complexo familiar na véspera de Natal, deixando todos reféns. No entanto, eles não estão preparados para um combatente surpresa: Papai Noel está no local.',
      state: 'Assistido',
      image: '/images/filmes/panteira-negra-wakanda-para-sempre.jpeg',
      alt: 'panteira-negra-wakanda-para-sempre',
      link: '',
    },
    {
      name: 'A Mãe',
      description:
        'Uma agente do governo muda de identidade e abandona sua filha recém-nascida para protegê-la de seus inimigos. Anos depois, a garota é sequestrada pelos criminosos, forçando a espiã a sair de seu esconderijo para salvá-la.',
      state: 'Assistido',
      image: '/images/filmes/a-mae.jpeg',
      alt: 'a-mae',
      link: '',
    },
    {
      name: 'Homem-Formiga e a Vespa: Quantumania',
      description:
        'O Homem-Formiga e a Vespa lutam contra Kang, o Conquistador, no reino quântico.',
      state: 'Assistido',
      image: '/images/filmes/home-formiga-e-a-vespa-quantumania.jpeg',
      alt: 'home-formiga-e-a-vespa-quantumania',
      link: '',
    },
  ],

  series: [
    {
      title: 'Black Mirror',
      description: '',
      state: 'assistido',
      image: '/images/series/black-mirror.jpeg',
      alt: 'black-mirror',
      link: '',
    },
    {
      title: 'Control Z',
      description: '',
      state: 'assistido',
      image: '/images/series/control-z.jpeg',
      alt: 'control-z',
      link: '',
    },
    {
      title: 'Gamebros',
      description: '',
      state: 'assistido',
      image: '/images/series/gamebros.jpeg',
      alt: 'gamebros',
      link: '',
    },
    {
      title: 'Scorpion',
      description: '',
      state: 'assistido',
      image: '/images/series/scorpion.jpeg',
      alt: 'scorpion',
      link: '',
    },
    {
      title: 'Silicon Valley',
      description: '',
      state: 'assistido',
      image: '/images/series/silicon-valley.jpeg',
      alt: 'silicon-valley',
      link: '',
    },
    {
      title: 'A Teoria do Big Bang',
      description: '',
      state: 'assistido',
      image: '/images/series/the-big-bang-theory.jpeg',
      alt: 'the-big-bang-theory',
      link: '',
    },
    {
      title: 'Travelers',
      description: '',
      state: 'assistido',
      image: '/images/series/travelers.jpeg',
      alt: 'travelers',
      link: '',
    },
  ],

  musicas: {
    artistas: [
      { name: 'Valete' },
      { name: 'Halloween' },
      { name: 'JRP' },
      { name: 'Henrique Mendonça' },
      { name: '7MZ' },
      { name: 'Cynthia Luz' },
      { name: 'JKZ' },
      { name: 'Bia Marques' },
      { name: 'Meckys' },
      { name: 'AniRap' },
      { name: 'VMZ' },
      { name: 'VG BEats' },
      { name: 'Fanit' },
      { name: 'Froid' },
      { name: 'Tennaz' },
      { name: 'Jonathan Puma' },
      { name: 'Projota' },
      { name: 'OG Vuino' },
      { name: 'Choiise' },
      { name: 'Nenny' },
      { name: 'Xamã' },
      { name: 'Look Cem' },
      { name: 'Ana Joyce' },
      { name: 'Monsta' },
      { name: 'Deezy' },
      { name: 'NGA' },
      { name: 'Don G' },
      { name: 'Masta' },
      { name: 'Prodígio' },
      { name: 'Plutónio' },
      { name: 'Kid MC' },
      { name: 'Sidjay' },
      { name: 'MK Mike' },
      { name: 'L7NNON' },
    ],
    generos: [{ name: 'Rap' }, { name: 'HipHop' }, { name: 'Rap Geek' }, { name: 'R&B' }],
  },

  livros: [
    {
      title: 'Dinheiro: Os segredos de quem tem',
      author: 'Gustavo Cerbasi',
      resume:
        'Neste livro, Gustavo Cerbasi desmistifica a riqueza, mostrando que é resultado de trabalho duro, economia disciplinada e estilo de vida adequado. Ele oferece dicas práticas para equilibrar as finanças, investir e alcançar a independência financeira. O autor destaca a importância de uma postura voltada para a prosperidade e incentiva a tomar decisões financeiras inteligentes para fazer o dinheiro trabalhar a seu favor.',
      state: 'interesse',
      image: '/images/livros/dinheiro-os-segredos-de-quem-tem.jpg',
      alt: 'dinheiro-os-segredos-de-quem-tem',
    },
    {
      title: 'O milionário automático: O Plano Perfeito Para Viver Bem E Ficar Rico',
      author: 'David Bach',
      resume:
        '"O Milionário Automático" conta a história inspiradora de um casal que conquista a independência financeira com um plano automático de pagar a si mesmo. Descubra como enriquecer sem depender de um orçamento e siga o plano proposto pelo autor para garantir seu futuro financeiro de forma automática.',
      state: 'interesse',
      image: '/images/livros/o-milionario-automatico.jpg',
      alt: 'o-milionario-automatico',
    },
    {
      title: 'Quem pensa enriquece',
      author: 'Napoleon Hill',
      resume:
        'Quem Pensa Enriquece" revela o segredo das grandes fortunas através de 15 características comuns. Bestseller atemporal que ajuda pessoas comuns a se tornarem ricas e poderosas.',
      state: 'interesse',
      image: '/images/livros/quem-pensa-enriquece.jpeg',
      alt: 'quem-pensa-enriquece',
    },
    {
      title: 'Trabalhe 4h por semana',
      author: 'Timothy Ferriss',
      resume:
        'Este livro revela os segredos dos novos ricos, que trocaram tempo e mobilidade por estilos de vida luxuosos. Ensina a valorizar o desempenho, cultivar a ignorância seletiva, gerir negócios à distância e criar uma vida plena após abandonar o trabalho convencional.',
      state: 'interesse',
      image: '/images/livros/trabalhe-4-horas-por-semana.jpeg',
      alt: 'trabalhe-4-horas-por-semana',
    },
  ],
}
