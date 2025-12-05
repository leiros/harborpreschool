import { Brain, Heart, Palette, Activity, HandHeart, Sparkles, Sprout, Users, Globe } from 'lucide-react';
import { ContentData, Language } from './types';

export const APP_CONTENT: Record<Language, ContentData> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      principles: "Principles",
      references: "References",
      curriculum: "Curriculum",
      projects: "Projects",
      assessment: "Assessment",
      contact: "Contact"
    },
    hero: {
      title: "Growing Together",
      subtitle: "A space for curiosity, creativity, and connection."
    },
    principles: {
      sectionTitle: "Guiding Principles",
      intro: "Our curricular proposal is founded on four essential pillars:",
      items: [
        {
          title: "Connection with the child's reality",
          description: "Learning starts from active listening to children, their experiences, interests, and social context, promoting real bonds between content and their lives.",
          icon: "globe"
        },
        {
          title: "Christian Values",
          description: "Christian values—such as love, respect, empathy, cooperation, generosity, forgiveness, and justice—are lived daily as the ethical foundation of coexistence, without religious imposition.",
          icon: "heart"
        },
        {
          title: "Autonomy of thought and creation",
          description: "Children are seen as thinking, curious, and creative subjects. They are encouraged to make decisions, experiment, solve problems, and express their ideas freely and respectfully.",
          icon: "sparkles"
        },
        {
          title: "Meaningful experiences",
          description: "Learning happens in a concrete and contextualized way through play, nature, art, the body, relationships, and sensory and affective experiences.",
          icon: "sprout"
        }
      ]
    },
    references: {
      sectionTitle: "Pedagogical References",
      items: [
        {
          name: "Reggio Emilia",
          description: "Influential in valuing active listening, the environment as an educator, documenting the process, and building projects based on children's interests."
        },
        {
          name: "Emmi Pikler",
          description: "Based on respect for the child's time, freedom of movement, affective interactions, and care as an integral part of development."
        }
      ]
    },
    curriculum: {
      sectionTitle: "Areas of Human Behavior",
      intro: "Learning is promoted through projects that organically articulate the main areas of human behavior, providing global development:",
      items: [
        {
          title: "Cognitive Area",
          icon: Brain,
          color: "bg-blue-100 text-blue-800",
          points: [
            "Stimulation of reasoning, language, problem-solving, and diverse knowledge construction (math, nature, science, etc.).",
            "Activities such as experimentation, investigation, exploration of objects and phenomena, storytelling, logic games, and language."
          ]
        },
        {
          title: "Socio-emotional Area",
          icon: Users,
          color: "bg-pink-100 text-pink-800",
          points: [
            "Development of empathy, self-regulation, respect for others, and identity construction.",
            "Experiences involving care for others, cooperation, active listening, expression of feelings, and conflict resolution."
          ]
        },
        {
          title: "Expressive & Creative Area",
          icon: Palette,
          color: "bg-purple-100 text-purple-800",
          points: [
            "Stimulation of artistic, bodily, musical, and symbolic expression.",
            "Proposals with diverse materials, visual arts, music, dance, dramatization, and free symbolic language."
          ]
        },
        {
          title: "Motor Area",
          icon: Activity,
          color: "bg-green-100 text-green-800",
          points: [
            "Development of gross and fine motor coordination, balance, rhythm, body awareness, and physical autonomy.",
            "Activities with free movement, circuits, object manipulation, outdoor play, and self-care practices."
          ]
        },
        {
          title: "Ethical-Spiritual Area",
          icon: HandHeart,
          color: "bg-amber-100 text-amber-800",
          points: [
            "Formation of values based on living the teachings of Jesus, adapted to children's language with a universal focus.",
            "Stories, conversation circles, symbolic celebrations, actions of care, listening, and dialogue about good, love, and respect."
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Project Organization",
      items: [
        "Projects are built from the real interests of children, everyday situations, or themes proposed by the school community.",
        "Each project is based on a guiding question and evolves with investigations, records, hypothesis creation, and productions.",
        "Project activities integrate all the areas above and are documented to reflect the learning process."
      ]
    },
    assessment: {
      sectionTitle: "Assessment",
      items: [
        "Assessment is qualitative, continuous, and based on attentive observation, sensitive listening, and pedagogical documentation.",
        "It focuses on the development process and individual and collective achievements, without comparisons or grades."
      ]
    },
    footer: {
      text: "© 2024 Primary School Education. All rights reserved."
    }
  },
  [Language.PT]: {
    nav: {
      home: "Início",
      principles: "Princípios",
      references: "Referências",
      curriculum: "Currículo",
      projects: "Projetos",
      assessment: "Avaliação",
      contact: "Contato"
    },
    hero: {
      title: "Crescendo Juntos",
      subtitle: "Um espaço de curiosidade, criatividade e conexão."
    },
    principles: {
      sectionTitle: "Princípios Norteadores",
      intro: "A proposta curricular está fundamentada em quatro pilares essenciais:",
      items: [
        {
          title: "Conexão com a realidade de mundo da criança",
          description: "A aprendizagem parte da escuta ativa das crianças, suas experiências, interesses e contexto social, promovendo vínculos reais entre o conteúdo e suas vidas.",
          icon: "globe"
        },
        {
          title: "Valores cristãos",
          description: "Os valores do cristianismo — como amor, respeito, empatia, cooperação, generosidade, perdão e justiça — são vividos no dia a dia como fundamento ético da convivência, sem imposição religiosa.",
          icon: "heart"
        },
        {
          title: "Autonomia de pensamento e criação",
          description: "As crianças são vistas como sujeitos pensantes, curiosos e criativos. São incentivadas a tomar decisões, experimentar, resolver problemas e expressar suas ideias de forma livre e respeitosa.",
          icon: "sparkles"
        },
        {
          title: "Vivências significativas",
          description: "A aprendizagem acontece de forma concreta e contextualizada, por meio do brincar, da natureza, da arte, do corpo, das relações e das experiências sensoriais e afetivas.",
          icon: "sprout"
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
      items: [
        {
          title: "Área Cognitiva",
          icon: Brain,
          color: "bg-blue-100 text-blue-800",
          points: [
            "Estímulo ao raciocínio, à linguagem, à solução de problemas e à construção de conhecimentos diversos (matemática, natureza, ciência, etc.).",
            "Atividades como experimentações, investigação, exploração de objetos e fenômenos, narração de histórias, jogos de lógica e linguagem."
          ]
        },
        {
          title: "Área Socioemocional",
          icon: Users,
          color: "bg-pink-100 text-pink-800",
          points: [
            "Desenvolvimento da empatia, da autorregulação, do respeito ao outro e da construção de identidade.",
            "Vivências que envolvem o cuidado com o outro, cooperação, escuta ativa, expressão de sentimentos, resolução de conflitos."
          ]
        },
        {
          title: "Área Expressiva e Criativa",
          icon: Palette,
          color: "bg-purple-100 text-purple-800",
          points: [
            "Estímulo à expressão artística, corporal, musical e simbólica.",
            "Propostas com materiais diversos, artes visuais, música, dança, dramatização e linguagem simbólica livre."
          ]
        },
        {
          title: "Área Motora",
          icon: Activity,
          color: "bg-green-100 text-green-800",
          points: [
            "Desenvolvimento da coordenação motora ampla e fina, equilíbrio, ritmo, consciência corporal e autonomia física.",
            "Atividades com movimento livre, circuitos, manipulação de objetos, brincadeiras ao ar livre e práticas de autocuidado."
          ]
        },
        {
          title: "Área Ético-Espiritual",
          icon: HandHeart,
          color: "bg-amber-100 text-amber-800",
          points: [
            "Formação de valores a partir da vivência dos ensinamentos de Jesus, adaptados à linguagem infantil e com enfoque universal.",
            "Histórias, rodas de conversa, celebrações simbólicas, ações de cuidado, escuta e diálogo sobre o bem, o amor e o respeito."
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Organização por Projetos",
      items: [
        "Os projetos são construídos a partir de interesses reais das crianças, situações do cotidiano ou temas propostos pela comunidade escolar.",
        "Cada projeto tem como base uma pergunta norteadora e evolui com investigações, registros, criação de hipóteses e produções.",
        "As atividades dos projetos integram todas as áreas acima e são documentadas para refletir o processo de aprendizagem."
      ]
    },
    assessment: {
      sectionTitle: "Avaliação",
      items: [
        "A avaliação é qualitativa, contínua e baseada na observação atenta, na escuta sensível e na documentação pedagógica.",
        "Foca-se no processo de desenvolvimento e nas conquistas individuais e coletivas, sem comparações ou notas."
      ]
    },
    footer: {
      text: "© 2024 Educação Primária. Todos os direitos reservados."
    }
  }
};