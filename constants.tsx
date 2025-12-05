import { Content, Language } from './types';

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
    hero: {
      title: "Learning for Life",
      subtitle: "A place where every child blooms through curiosity, values, and connection.",
    },
    principles: {
      sectionTitle: "Guiding Principles",
      intro: "Our curricular proposal is founded on four essential pillars:",
      items: [
        {
          title: "Connection to Reality",
          description: "Learning starts from active listening to children, their experiences, interests, and social context, promoting real bonds between content and their lives.",
          iconName: "Globe"
        },
        {
          title: "Christian Values",
          description: "Christian values—such as love, respect, empathy, cooperation, generosity, forgiveness, and justice—are lived daily as the ethical foundation of coexistence, without religious imposition.",
          iconName: "Heart"
        },
        {
          title: "Autonomy of Thought and Creation",
          description: "Children are seen as thinking, curious, and creative subjects. They are encouraged to make decisions, experiment, solve problems, and express their ideas freely and respectfully.",
          iconName: "Lightbulb"
        },
        {
          title: "Meaningful Experiences",
          description: "Learning happens in a concrete and contextualized way through play, nature, art, the body, relationships, and sensory and affective experiences.",
          iconName: "Sparkles"
        }
      ]
    },
    references: {
      sectionTitle: "Pedagogical References",
      items: [
        {
          name: "Reggio Emilia",
          description: "Influence on valuing active listening, the environment as an educator, documenting the process, and building projects based on children's interests."
        },
        {
          name: "Emmi Pikler",
          description: "Founded on respect for the child's time, freedom of movement, affective interactions, and care as an integral part of development."
        }
      ]
    },
    curriculum: {
      sectionTitle: "Areas of Human Behavior",
      intro: "Learning is promoted through projects that organically articulate the main areas of human behavior, providing global development:",
      areas: [
        {
          title: "Cognitive Area",
          points: [
            "Stimulation of reasoning, language, problem-solving, and knowledge construction (math, nature, science, etc.).",
            "Activities such as experimentation, investigation, object and phenomenon exploration, storytelling, logic, and language games."
          ],
          iconName: "Brain",
          color: "bg-blue-100 text-blue-700 border-blue-200"
        },
        {
          title: "Socio-emotional Area",
          points: [
            "Development of empathy, self-regulation, respect for others, and identity construction.",
            "Experiences involving care for others, cooperation, active listening, expressing feelings, and conflict resolution."
          ],
          iconName: "Users",
          color: "bg-yellow-100 text-yellow-700 border-yellow-200"
        },
        {
          title: "Expressive & Creative Area",
          points: [
            "Stimulation of artistic, bodily, musical, and symbolic expression.",
            "Proposals with diverse materials, visual arts, music, dance, dramatization, and free symbolic language."
          ],
          iconName: "Palette",
          color: "bg-purple-100 text-purple-700 border-purple-200"
        },
        {
          title: "Motor Area",
          points: [
            "Development of gross and fine motor coordination, balance, rhythm, body awareness, and physical autonomy.",
            "Activities with free movement, circuits, object manipulation, outdoor play, and self-care practices."
          ],
          iconName: "Activity",
          color: "bg-green-100 text-green-700 border-green-200"
        },
        {
          title: "Ethical-Spiritual Area",
          points: [
            "Formation of values based on the teachings of Jesus, adapted to children's language and with a universal focus.",
            "Stories, conversation circles, symbolic celebrations, acts of care, listening, and dialogue about good, love, and respect."
          ],
          iconName: "Sun",
          color: "bg-red-100 text-red-700 border-red-200"
        }
      ]
    },
    projects: {
      sectionTitle: "Project Organization",
      items: {
        title: "How we work",
        points: [
          "Projects are built from the children's real interests, daily situations, or themes proposed by the school community.",
          "Each project is based on a guiding question and evolves with investigations, records, hypothesis creation, and productions.",
          "Project activities integrate all the areas mentioned above and are documented to reflect the learning process."
        ]
      }
    },
    evaluation: {
      sectionTitle: "Evaluation",
      items: {
        title: "Our Assessment Approach",
        points: [
          "Evaluation is qualitative, continuous, and based on attentive observation, sensitive listening, and pedagogical documentation.",
          "It focuses on the development process and individual and collective achievements, without comparisons or grades."
        ]
      }
    },
    footer: {
      contact: "Contact us",
      rights: "All rights reserved."
    }
  },
  pt: {
    hero: {
      title: "Aprendizagem para a Vida",
      subtitle: "Um lugar onde cada criança floresce através da curiosidade, valores e conexão.",
    },
    principles: {
      sectionTitle: "Princípios Norteadores",
      intro: "A proposta curricular está fundamentada em quatro pilares essenciais:",
      items: [
        {
          title: "Conexão com a realidade",
          description: "A aprendizagem parte da escuta ativa das crianças, suas experiências, interesses e contexto social, promovendo vínculos reais entre o conteúdo e suas vidas.",
          iconName: "Globe"
        },
        {
          title: "Valores cristãos",
          description: "Os valores do cristianismo — como amor, respeito, empatia, cooperação, generosidade, perdão e justiça — são vividos no dia a dia como fundamento ético da convivência, sem imposição religiosa.",
          iconName: "Heart"
        },
        {
          title: "Autonomia de pensamento e criação",
          description: "As crianças são vistas como sujeitos pensantes, curiosos e criativos. São incentivadas a tomar decisões, experimentar, resolver problemas e expressar suas ideias de forma livre e respeitosa.",
          iconName: "Lightbulb"
        },
        {
          title: "Vivências significativas",
          description: "A aprendizagem acontece de forma concreta e contextualizada, por meio do brincar, da natureza, da arte, do corpo, das relações e das experiências sensoriais e afetivas.",
          iconName: "Sparkles"
        }
      ]
    },
    references: {
      sectionTitle: "Referenciais Pedagógicos",
      items: [
        {
          name: "Reggio Emilia",
          description: "Influência na valorização da escuta ativa, no ambiente como educador, na documentação do processo e na construção de projetos a partir dos interesses das crianças."
        },
        {
          name: "Emmi Pikler",
          description: "Fundamentação no respeito ao tempo da criança, na liberdade de movimento, nas interações afetivas e no cuidado como parte integral do desenvolvimento."
        }
      ]
    },
    curriculum: {
      sectionTitle: "Áreas do Comportamento Humano",
      intro: "A aprendizagem será promovida por meio de projetos que articulem de forma orgânica as principais áreas do comportamento humano:",
      areas: [
        {
          title: "Área Cognitiva",
          points: [
            "Estímulo ao raciocínio, à linguagem, à solução de problemas e à construção de conhecimentos diversos (matemática, natureza, ciência, etc.).",
            "Atividades como experimentações, investigação, exploração de objetos e fenômenos, narração de histórias, jogos de lógica e linguagem."
          ],
          iconName: "Brain",
          color: "bg-blue-100 text-blue-700 border-blue-200"
        },
        {
          title: "Área Socioemocional",
          points: [
            "Desenvolvimento da empatia, da autorregulação, do respeito ao outro e da construção de identidade.",
            "Vivências que envolvem o cuidado com o outro, cooperação, escuta ativa, expressão de sentimentos, resolução de conflitos."
          ],
          iconName: "Users",
          color: "bg-yellow-100 text-yellow-700 border-yellow-200"
        },
        {
          title: "Área Expressiva e Criativa",
          points: [
            "Estímulo à expressão artística, corporal, musical e simbólica.",
            "Propostas com materiais diversos, artes visuais, música, dança, dramatização e linguagem simbólica livre."
          ],
          iconName: "Palette",
          color: "bg-purple-100 text-purple-700 border-purple-200"
        },
        {
          title: "Área Motora",
          points: [
            "Desenvolvimento da coordenação motora ampla e fina, equilíbrio, ritmo, consciência corporal e autonomia física.",
            "Atividades com movimento livre, circuitos, manipulação de objetos, brincadeiras ao ar livre e práticas de autocuidado."
          ],
          iconName: "Activity",
          color: "bg-green-100 text-green-700 border-green-200"
        },
        {
          title: "Área Ético-Espiritual",
          points: [
            "Formação de valores a partir da vivência dos ensinamentos de Jesus, adaptados à linguagem infantil e com enfoque universal.",
            "Histórias, rodas de conversa, celebrações simbólicas, ações de cuidado, escuta e diálogo sobre o bem, o amor e o respeito."
          ],
          iconName: "Sun",
          color: "bg-red-100 text-red-700 border-red-200"
        }
      ]
    },
    projects: {
      sectionTitle: "Organização por Projetos",
      items: {
        title: "Nossa Metodologia",
        points: [
          "Os projetos são construídos a partir de interesses reais das crianças, situações do cotidiano ou temas propostos pela comunidade escolar.",
          "Cada projeto tem como base uma pergunta norteadora e evolui com investigações, registros, criação de hipóteses e produções.",
          "As atividades dos projetos integram todas as áreas acima e são documentadas para refletir o processo de aprendizagem."
        ]
      }
    },
    evaluation: {
      sectionTitle: "Avaliação",
      items: {
        title: "Nossa forma de avaliar",
        points: [
          "A avaliação é qualitativa, contínua e baseada na observação atenta, na escuta sensível e na documentação pedagógica.",
          "Foca-se no processo de desenvolvimento e nas conquistas individuais e coletivas, sem comparações ou notas."
        ]
      }
    },
    footer: {
      contact: "Fale conosco",
      rights: "Todos os direitos reservados."
    }
  },
  es: {
    hero: {
      title: "Aprendizaje para la Vida",
      subtitle: "Un lugar donde cada niño florece a través de la curiosidad, los valores y la conexión.",
    },
    principles: {
      sectionTitle: "Principios Rectores",
      intro: "La propuesta curricular se fundamenta en cuatro pilares esenciales:",
      items: [
        {
          title: "Conexión con la realidad",
          description: "El aprendizaje parte de la escucha activa de los niños, sus experiencias, intereses y contexto social, promoviendo vínculos reales entre el contenido y sus vidas.",
          iconName: "Globe"
        },
        {
          title: "Valores Cristianos",
          description: "Los valores del cristianismo — como amor, respeto, empatía, cooperación, generosidad, perdón y justicia — se viven día a día como fundamento ético de la convivencia, sin imposición religiosa.",
          iconName: "Heart"
        },
        {
          title: "Autonomía de pensamiento y creación",
          description: "Los niños son vistos como sujetos pensantes, curiosos y creativos. Se les anima a tomar decisiones, experimentar, resolver problemas y expresar sus ideas de forma libre y respetuosa.",
          iconName: "Lightbulb"
        },
        {
          title: "Vivencias Significativas",
          description: "El aprendizaje ocurre de forma concreta y contextualizada, a través del juego, la naturaleza, el arte, el cuerpo, las relaciones y las experiencias sensoriales y afectivas.",
          iconName: "Sparkles"
        }
      ]
    },
    references: {
      sectionTitle: "Referentes Pedagógicos",
      items: [
        {
          name: "Reggio Emilia",
          description: "Influencia en la valoración de la escucha activa, el ambiente como educador, la documentación del proceso y la construcción de proyectos a partir de los intereses de los niños."
        },
        {
          name: "Emmi Pikler",
          description: "Fundamentado en el respeto al tiempo del niño, la libertad de movimiento, las interacciones afectivas y el cuidado como parte integral del desarrollo."
        }
      ]
    },
    curriculum: {
      sectionTitle: "Áreas del Comportamiento Humano",
      intro: "El aprendizaje será promovido por medio de proyectos que articulen de forma orgánica las principales áreas del comportamiento humano:",
      areas: [
        {
          title: "Área Cognitiva",
          points: [
            "Estímulo al razonamiento, lenguaje, solución de problemas y construcción de conocimientos diversos (matemáticas, naturaleza, ciencia, etc.).",
            "Actividades como experimentaciones, investigación, exploración de objetos y fenómenos, narración de historias, juegos de lógica y lenguaje."
          ],
          iconName: "Brain",
          color: "bg-blue-100 text-blue-700 border-blue-200"
        },
        {
          title: "Área Socioemocional",
          points: [
            "Desarrollo de la empatía, la autorregulación, el respeto al otro y la construcción de la identidad.",
            "Vivencias que involucran el cuidado del otro, cooperación, escucha activa, expresión de sentimientos, resolución de conflictos."
          ],
          iconName: "Users",
          color: "bg-yellow-100 text-yellow-700 border-yellow-200"
        },
        {
          title: "Área Expresiva y Creativa",
          points: [
            "Estímulo a la expresión artística, corporal, musical y simbólica.",
            "Propuestas con materiales diversos, artes visuales, música, danza, dramatización y lenguaje simbólico libre."
          ],
          iconName: "Palette",
          color: "bg-purple-100 text-purple-700 border-purple-200"
        },
        {
          title: "Área Motora",
          points: [
            "Desarrollo de la coordinación motora amplia y fina, equilibrio, ritmo, conciencia corporal y autonomía física.",
            "Actividades con movimiento libre, circuitos, manipulación de objetos, juegos al aire libre y prácticas de autocuidado."
          ],
          iconName: "Activity",
          color: "bg-green-100 text-green-700 border-green-200"
        },
        {
          title: "Área Ético-Espiritual",
          points: [
            "Formación de valores a partir de la vivencia de las enseñanzas de Jesús, adaptados al lenguaje infantil y con enfoque universal.",
            "Historias, círculos de conversación, celebraciones simbólicas, acciones de cuidado, escucha y diálogo sobre el bien, el amor y el respeto."
          ],
          iconName: "Sun",
          color: "bg-red-100 text-red-700 border-red-200"
        }
      ]
    },
    projects: {
      sectionTitle: "Organización por Proyectos",
      items: {
        title: "Metodología",
        points: [
          "Los proyectos se construyen a partir de intereses reales de los niños, situaciones cotidianas o temas propuestos por la comunidad escolar.",
          "Cada proyecto tiene como base una pregunta orientadora y evoluciona con investigaciones, registros, creación de hipótesis y producciones.",
          "Las actividades de los proyectos integran todas las áreas anteriores y se documentan para reflejar el proceso de aprendizaje."
        ]
      }
    },
    evaluation: {
      sectionTitle: "Evaluación",
      items: {
        title: "Enfoque de Evaluación",
        points: [
          "La evaluación es cualitativa, continua y basada en la observación atenta, la escucha sensible y la documentación pedagógica.",
          "Se enfoca en el proceso de desarrollo y en los logros individuales y colectivos, sin comparaciones ni notas."
        ]
      }
    },
    footer: {
      contact: "Contáctanos",
      rights: "Todos los derechos reservados."
    }
  }
};