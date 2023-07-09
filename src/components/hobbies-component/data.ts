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
      title: 'Naruto Classico',
      description:
        'Naruto, um jovem ninja desajeitado e hiperativo, busca se tornar o Hokage da sua vila, enfrentando desafios, fazendo amizades e descobrindo segredos obscuros sobre seu passado.',
      state: 'assistido',
      image: '/images/animes/naruto-classico.jpeg',
      alt: 'naruto-classico',
      link: '',
    },
    { name: 'Naruto', description: '', state: 'Assistido', image: '', link: '' },
    { name: 'Naruto', description: '', state: 'Assistido', image: '', link: '' },
  ],

  filmes: [
    { name: 'Naruto', description: '', state: 'Assistido', image: '', link: '' },
    { name: 'Naruto', description: '', state: 'Assistido', image: '', link: '' },
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
      { name: 'Valete', submenu: 'Artistas' },
      { name: 'Halloween', submenu: 'Artistas' },
      { name: 'Halloween', submenu: 'Generos' },
    ],
    generos: [],
  },
}
