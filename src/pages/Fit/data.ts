import { Workout } from "./types"

const peitoral = [
  {
    "id": "supino_reto",
    "name": "Supino Reto",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1605296867304-46d5465b8d48?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/rT7DgCr-3pg"
  },
  {
    "id": "supino_inclinado",
    "name": "Supino Inclinado",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1605296867310-700e627e5d73?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/DbFgADa2PL8"
  },
  {
    "id": "supino_declinado",
    "name": "Supino Declinado",
    "muscle": "Peitoral",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ee471d6f81d2f868f7a74c852b19ebd7bfa9a026.jpg"],
    "video": "https://www.youtube.com/embed/LfyQBUKR8SE"
  },
  {
    "id": "supino_reto_convergente",
    "name": "Supino Reto Convergente",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/SCVCLChPQFY"
  },
  {
    "id": "supino_inclinado_convergente",
    "name": "Supino Inclinado Convergente",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1605296867310-700e627e5d73?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/AYZ6pD4K8hU"
  },
  {
    "id": "supino_reto_maquina",
    "name": "Supino Reto Máquina",
    "muscle": "Peitoral",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ba8c61801117c6d18809ffef02ac44899faaed33.jpg"],
    "video": "https://www.youtube.com/embed/SCVCLChPQFY"
  },
  {
    "id": "supino_inclinado_maquina",
    "name": "Supino Inclinado Máquina",
    "muscle": "Peitoral",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5672f91944bcea29a0eef3d2439ca311441b052a.jpg"],
    "video": "https://www.youtube.com/embed/AYZ6pD4K8hU"
  },
  {
    "id": "supino_vertical",
    "name": "Supino Vertical",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1581129724999-7a6bf24d8e05?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/9fWQ5fJqv0Q"
  },
  {
    "id": "flexao_de_braco",
    "name": "Flexão de Braço",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1533568511934-f9661a4573b8?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/IODxDxX7oi4"
  },
  {
    "id": "crucifixo_reto",
    "name": "Crucifixo Reto",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1605296867304-46d5465b8d48?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/eozdVDA78K0"
  },
  {
    "id": "crucifixo_inclinado",
    "name": "Crucifixo Inclinado",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1605296867310-700e627e5d73?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/SlRSCU0PooU"
  },
  {
    "id": "crucifixo_declinado",
    "name": "Crucifixo Declinado",
    "muscle": "Peitoral",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/21af59cb29029ce7fa3cfba6e5f2a69f1f80c822.jpg"],
    "video": "https://www.youtube.com/embed/3bJ0WQ5w6kE"
  },
  {
    "id": "peck_deck",
    "name": "Peck Deck",
    "muscle": "Peitoral",
    "image": ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&fit=crop"],
    "video": "https://www.youtube.com/embed/Z57CtFmRMxA"
  },
  {
    "id": "crossover",
    "name": "Crossover",
    "muscle": "Peitoral",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/849998913c22ffe8ebf91da06afb7185d5d855d8.jpg"],
    "video": "https://www.youtube.com/embed/taI4XduLpTk"
  }
]

const costas = [
  {
    "id": "puxador_vertical",
    "name": "Puxador Vertical",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c9e74d72933523f4f9e329f5e4f90f2bee3d65cb.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/CAwf7n6Luuc"
  },
  {
    "id": "puxador_convergente",
    "name": "Puxador Convergente",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c9e74d72933523f4f9e329f5e4f90f2bee3d65cb.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/AOpi-p0cJkc"
  },
  {
    "id": "banco_para_remada",
    "name": "Banco Para Remada",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/bac767f2e7796b824cf4171fc0de9c3661d99e94.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/roCP6wCXPqo"
  },
  {
    "id": "remada_baixa",
    "name": "Remada Baixa",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b2ebf12d3aab1898af2d453e005eb460655cb9f1.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/HJSVR_67OlM"
  },
  {
    "id": "remada_curvada",
    "name": "Remada Curvada",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8259608719f79ce3ca50d77911b3703e0f0cb12e.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/vT2GjY_Umpw"
  },
  {
    "id": "remada_unilateral",
    "name": "Remada Unilateral",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/bac767f2e7796b824cf4171fc0de9c3661d99e94.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/pYcpY20QaE8"
  },
  {
    "id": "extensao_de_ombro",
    "name": "Extensão de Ombro",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d198b0335de97b5527bc0eba5b6dba2bd7245451.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/MciSoR-Hfsc"
  },
  {
    "id": "peck_deck_dorsal",
    "name": "Peck Deck Dorsal",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d198b0335de97b5527bc0eba5b6dba2bd7245451.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/JoCRRZ3zRtA"
  },
  {
    "id": "graviton",
    "name": "Graviton",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/54907708d91dff04e275cc227c318ec4dc3980ce.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/HRV5YKKaeVw"
  },
  {
    "id": "barra_fixa",
    "name": "Barra Fixa",
    "muscle": "Costas / Dorsal",
    "image": ["https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b78856e8158a5d2de86fa7189476ddf24ee284ed.jpg?w=600&h=400&fit=crop"],
    "video": "https://www.youtube.com/embed/eGo4IYlbE5g"
  }
]

const ombro = [
  {
    "id": "desenvolvimento_maquina",
    "name": "Desenv. Máquina",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/machine-shoulder-press"],
    "video": "https://www.youtube.com/embed/WvLMauqrnK8"
  },
  {
    "id": "desenvolvimento_halter",
    "name": "Desenv. Halter",
    "muscle": "Ombro",
    "image": ["https://www.muscleandstrength.com/exercises/seated-dumbbell-press"],
    "video": "https://www.youtube.com/embed/qEwKCR5JCog"
  },
  {
    "id": "desenvolvimento_barra_livre",
    "name": "Desenv. Barra Livre",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/barbell-shoulder-press"],
    "video": "https://www.youtube.com/embed/2yjwXTZQDDI"
  },
  {
    "id": "desenvolvimento_arnold",
    "name": "Desenv. Arnold",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/arnold-dumbbell-press"],
    "video": "https://www.youtube.com/embed/6Z15_WdXmVw"
  },
  {
    "id": "desenvolvimento_smith",
    "name": "Desenv. Smith",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/smith-machine-overhead-shoulder-press"],
    "video": "https://www.youtube.com/embed/5yWaNOvgFCM"
  },
  {
    "id": "desenvolvimento_convergente",
    "name": "Desenv. Convergente",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/hammer-strength-shoulder-press"],
    "video": "https://www.youtube.com/embed/Yl6xQd7x5N0"
  },
  {
    "id": "elevacao_lateral",
    "name": "Elevação Lateral",
    "muscle": "Ombro",
    "image": ["https://www.muscleandstrength.com/exercises/side-lateral-raise"],
    "video": "https://www.youtube.com/embed/3VcKaXpzqRo"
  },
  {
    "id": "elevacao_frontal",
    "name": "Elevação Frontal",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/front-dumbbell-raise"],
    "video": "https://www.youtube.com/embed/-t7fuZ0KhDA"
  },
  {
    "id": "elevacao_unilateral_polia",
    "name": "Elevação Uni. Polia",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/one-arm-cable-lateral-raise"],
    "video": "https://www.youtube.com/embed/0s-6z4xWz3I"
  },
  {
    "id": "remada_alta",
    "name": "Remada Alta",
    "muscle": "Ombro",
    "image": ["https://www.muscleandstrength.com/exercises/upright-barbell-row"],
    "video": "https://www.youtube.com/embed/amCU-ziHITM"
  },
  {
    "id": "crucifixo_inverso",
    "name": "Crucifixo Inverso",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/reverse-dumbbell-flyes"],
    "video": "https://www.youtube.com/embed/EA7u4Q_8HQ0"
  },
  {
    "id": "elevacao_escapula",
    "name": "Elevação Escápula",
    "muscle": "Ombro",
    "image": ["https://www.bodybuilding.com/exercises/barbell-shrug"],
    "video": "https://www.youtube.com/embed/cJRVVxmytaM"
  }
]

const biceps = [
  {
    "id": "rosca_scott_maquina",
    "name": "Rosca Scott Máquina",
    "muscle": "Bíceps / Antebraço",
    "image": ["https://static1.minhavida.com.br/articles/a0/79/bd/2f/makatserchykshutterstock-article-1.jpg"],
    "video": "https://www.youtube.com/embed/fIWP-FRFNU0"
  },
  {
    "id": "rosca_scott_banco",
    "name": "Rosca Scott Banco",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-scott-com-halteres.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-scott.gif"
    ],
    "video": "https://www.youtube.com/embed/fIWP-FRFNU0"
  },
  {
    "id": "rosca_direta",
    "name": "Rosca Direta",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/02/barbell-standing-close-grip-curl.gif",
        "https://grupovirtualletras.com.br/wp-content/uploads/2025/06/dumbbell-biceps-curl.gif"
    ],
    "video": "https://www.youtube.com/embed/kwG2ipFRgfo"
  },
  {
    "id": "rosca_martelo",
    "name": "Rosca Martelo",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/cable-hammer-curl-with-rope.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/dumbbell-cross-body-hammer-curl-v-2.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/10/dumbbell-peacher-hammer-curl.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/dumbbell-incline-hammer-curl.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/dumbbell-alternate-seated-hammer-curl.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/dumbbell-hammer-curl-v-2.gif"
    ],
    "video": "https://www.youtube.com/embed/zC3nLlEvin4"
  },
  {
    "id": "rosca_w",
    "name": "Rosca W",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://grupovirtualletras.com.br/wp-content/uploads/2025/06/2edbed_0aac7c2b57cc4a65906159b7be921526mv2-1.gif"
    ],
    "video": "https://www.youtube.com/embed/7jqiYw5dY4k"
  },
  {
    "id": "rosca_inversa",
    "name": "Rosca Inversa",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/03/barbell-reverse-curl.gif",


    ],
    "video": "https://www.youtube.com/embed/nRgxYX2Ve9w"
  },
  {
    "id": "rosca_alternada",
    "name": "Rosca Alternada",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Alternada-com-Halteres.gif"
    ],
    "video": "https://www.youtube.com/embed/sAq_ocpRh_I"
  },
  {
    "id": "rosca_concentrada",
    "name": "Rosca Concentrada",
    "muscle": "Bíceps / Antebraço",
    "image": ["https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-concentrada.gif"],
    "video": "https://www.youtube.com/embed/Jvj2wV0vOYU"
  },
  {
    "id": "flexao_de_punho",
    "name": "Flexão de Punho",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/10/dumbbell-one-arm-wrist-curl.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/rusca-punho-com-barra.gif"
    ],
    "video": "https://www.youtube.com/embed/8g9x6JrZ8xU"
  },
  {
    "id": "extensao_de_punho",
    "name": "Extensão de Punho",
    "muscle": "Bíceps / Antebraço",
    "image": [
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/10/dumbbell-one-arm-revers-wrist-curl.gif",
        "https://www.hipertrofia.org/blog/wp-content/uploads/2024/10/barbell-revers-wrist-curl-v-2.gif"
    ],
    "video": "https://www.youtube.com/embed/E6Qz6QpO9W4"
  }
]

const triceps = [
  {
    "id": "triceps_maquina",
    "name": "Tríceps Máquina",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/machine-triceps-extension"],
    "video": "https://www.youtube.com/embed/2-LAMcpzODU"
  },
  {
    "id": "triceps_pulley",
    "name": "Tríceps Pulley",
    "muscle": "Tríceps",
    "image": ["https://www.muscleandstrength.com/exercises/tricep-pushdown"],
    "video": "https://www.youtube.com/embed/2-LAMcpzODU"
  },
  {
    "id": "triceps_corda",
    "name": "Tríceps Corda",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/rope-push-down"],
    "video": "https://www.youtube.com/embed/vB5OHsJ3EME"
  },
  {
    "id": "triceps_inverso",
    "name": "Tríceps Inverso",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/reverse-grip-triceps-pushdown"],
    "video": "https://www.youtube.com/embed/kiuVAJ9k7bA"
  },
  {
    "id": "triceps_frances",
    "name": "Tríceps Francês",
    "muscle": "Tríceps",
    "image": ["https://www.muscleandstrength.com/exercises/seated-dumbbell-tricep-extension"],
    "video": "https://www.youtube.com/embed/_gsUck-7M74"
  },
  {
    "id": "triceps_testa",
    "name": "Tríceps Testa",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/lying-triceps-press"],
    "video": "https://www.youtube.com/embed/d_KZxkY_0cM"
  },
  {
    "id": "triceps_mergulho",
    "name": "Tríceps Mergulho",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/bench-dips"],
    "video": "https://www.youtube.com/embed/0326dy_-CzM"
  },
  {
    "id": "triceps_testa_maquina",
    "name": "Tríceps Testa Máquina",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/machine-triceps-extension"],
    "video": "https://www.youtube.com/embed/2-LAMcpzODU"
  },
  {
    "id": "triceps_banco",
    "name": "Tríceps Banco",
    "muscle": "Tríceps",
    "image": ["https://www.muscleandstrength.com/exercises/bench-dips"],
    "video": "https://www.youtube.com/embed/0326dy_-CzM"
  },
  {
    "id": "triceps_coice",
    "name": "Tríceps Coice",
    "muscle": "Tríceps",
    "image": ["https://www.bodybuilding.com/exercises/tricep-dumbbell-kickback"],
    "video": "https://www.youtube.com/embed/6SS6K3lAwZ8"
  }
]

const pernas = [
  {
    "id": "leg_45",
    "name": "Leg 45º",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/leg-press"],
    "video": "https://www.youtube.com/embed/IZxyjW7MPJQ"
  },
  {
    "id": "leg_horizontal",
    "name": "Leg Horizontal",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/leg-press"],
    "video": "https://www.youtube.com/embed/IZxyjW7MPJQ"
  },
  {
    "id": "leg_90",
    "name": "Leg 90º",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/leg-press"],
    "video": "https://www.youtube.com/embed/IZxyjW7MPJQ"
  },
  {
    "id": "hack_machine",
    "name": "Hack Machine",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/hack-squat"],
    "video": "https://www.youtube.com/embed/EdtaJRBqwes"
  },
  {
    "id": "agachamento_smith",
    "name": "Agachamento Smith",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/smith-machine-squat"],
    "video": "https://www.youtube.com/embed/42bFodPahBU"
  },
  {
    "id": "agachamento_squatt",
    "name": "Agachamento Squatt",
    "muscle": "Perna",
    "image": ["https://www.muscleandstrength.com/exercises/barbell-squat"],
    "video": "https://www.youtube.com/embed/Dy28eq2PjcM"
  },
  {
    "id": "agachamento_livre",
    "name": "Agachamento Livre",
    "muscle": "Perna",
    "image": ["https://www.muscleandstrength.com/exercises/barbell-squat"],
    "video": "https://www.youtube.com/embed/Dy28eq2PjcM"
  },
  {
    "id": "agachamento_sumo",
    "name": "Agachamento Sumô",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/plie-dumbbell-squat"],
    "video": "https://www.youtube.com/embed/wdqB6KzQjL0"
  },
  {
    "id": "agachamento",
    "name": "Agachamento",
    "muscle": "Perna",
    "image": ["https://www.muscleandstrength.com/exercises/barbell-squat"],
    "video": "https://www.youtube.com/embed/Dy28eq2PjcM"
  },
  {
    "id": "agachamento_terra",
    "name": "Agachamento Terra",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/barbell-deadlift"],
    "video": "https://www.youtube.com/embed/op9kVnSso6Q"
  },
  {
    "id": "bulgaro",
    "name": "Búlgaro",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/bulgarian-split-squat"],
    "video": "https://www.youtube.com/embed/2C-uNgKwPLE"
  },
  {
    "id": "afundo",
    "name": "Afundo",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/barbell-lunge"],
    "video": "https://www.youtube.com/embed/QOVaHwm-Q6U"
  },
  {
    "id": "passada",
    "name": "Passada",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/walking-lunge"],
    "video": "https://www.youtube.com/embed/L8fvypPrzzs"
  },
  {
    "id": "avanco",
    "name": "Avanço",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/dumbbell-lunges"],
    "video": "https://www.youtube.com/embed/D7KaRcUTQeE"
  },
  {
    "id": "cadeira_extensora",
    "name": "Cadeira Extensora",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/leg-extensions"],
    "video": "https://www.youtube.com/embed/YyvSfVjQeL0"
  },
  {
    "id": "cadeira_flexora",
    "name": "Cadeira Flexora",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/seated-leg-curl"],
    "video": "https://www.youtube.com/embed/1Tq3QdYUuHs"
  },
  {
    "id": "mesa_flexora",
    "name": "Mesa Flexora",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/lying-leg-curls"],
    "video": "https://www.youtube.com/embed/1Tq3QdYUuHs"
  },
  {
    "id": "stiff",
    "name": "Stiff",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/romanian-deadlift"],
    "video": "https://www.youtube.com/embed/JCXUYuzwNrM"
  },
  {
    "id": "cadeira_abdutora",
    "name": "Cadeira Abdutora",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/hip-abduction"],
    "video": "https://www.youtube.com/embed/G_8LItOiZ0Q"
  },
  {
    "id": "cadeira_adutora",
    "name": "Cadeira Adutora",
    "muscle": "Perna",
    "image": ["https://www.bodybuilding.com/exercises/hip-adduction"],
    "video": "https://www.youtube.com/embed/2bAlJ5h2sA4"
  }
]

const gluteo = [
  {
    "id": "mesa_glutea",
    "name": "Mesa Glútea",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/glute-kickback"],
    "video": "https://www.youtube.com/embed/TLjPjv5Xh6c"
  },
  {
    "id": "extensao_quadril_ross",
    "name": "Extensão Quadril Ross",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/cable-kickback"],
    "video": "https://www.youtube.com/embed/JbyjNymZOt0"
  },
  {
    "id": "extensao_4_apoios_reto",
    "name": "Extensão 4 Apoios Reto",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/bodyweight-kickback"],
    "video": "https://www.youtube.com/embed/5oeiP4FZf4Q"
  },
  {
    "id": "extensao_4_apoios_curvado",
    "name": "Extensão 4 Apoios Curvado",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/donkey-kick"],
    "video": "https://www.youtube.com/embed/SJ1Xuz9D-ZQ"
  },
  {
    "id": "elevacao_pelvica",
    "name": "Elevação Pélvica",
    "muscle": "Glúteo",
    "image": ["https://www.muscleandstrength.com/exercises/barbell-hip-thrust"],
    "video": "https://www.youtube.com/embed/LM8XHLYJoYs"
  },
  {
    "id": "extensao_tronco_lombar",
    "name": "Extensão Tronco/Lombar",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/hyperextensions-back-extensions"],
    "video": "https://www.youtube.com/embed/ph3pddpKzzw"
  },
  {
    "id": "elevacao_pelvica_maquina",
    "name": "Elevação Pélvica Máquina",
    "muscle": "Glúteo",
    "image": ["https://www.bodybuilding.com/exercises/machine-hip-thrust"],
    "video": "https://www.youtube.com/embed/SEdqd1n0cvg"
  }
]

const panturrilha = [
  {
    "id": "panturrilha_maquina",
    "name": "Panturrilha Máquina",
    "muscle": "Panturrilha",
    "image": ["https://www.bodybuilding.com/exercises/standing-calf-raises"],
    "video": "https://www.youtube.com/embed/-M4-G8p8fmc"
  },
  {
    "id": "panturrilha_livre",
    "name": "Panturrilha Livre",
    "muscle": "Panturrilha",
    "image": ["https://www.muscleandstrength.com/exercises/bodyweight-standing-calf-raise"],
    "video": "https://www.youtube.com/embed/gwLzBJYoWlI"
  },
  {
    "id": "panturrilha_leg_horizontal",
    "name": "Panturrilha Leg Horizontal",
    "muscle": "Panturrilha",
    "image": ["https://www.bodybuilding.com/exercises/leg-press-calf-raise"],
    "video": "https://www.youtube.com/embed/YMmgqO8Jo-k"
  },
  {
    "id": "panturrilha_smith",
    "name": "Panturrilha Smith",
    "muscle": "Panturrilha",
    "image": ["https://www.bodybuilding.com/exercises/smith-machine-calf-raise"],
    "video": "https://www.youtube.com/embed/2D7f8m6N6pY"
  },
  {
    "id": "banco_soleo",
    "name": "Banco Sóleo",
    "muscle": "Panturrilha",
    "image": ["https://www.bodybuilding.com/exercises/seated-calf-raise"],
    "video": "https://www.youtube.com/embed/JbyjNymZOt0"
  },
  {
    "id": "panturrilha_unilateral",
    "name": "Panturrilha Unilateral",
    "muscle": "Panturrilha",
    "image": ["https://www.bodybuilding.com/exercises/single-leg-calf-raise"],
    "video": "https://www.youtube.com/embed/YMmgqO8Jo-k"
  }
]


export const mockedExercises = [
    // ...panturrilha,
    ...costas,
    ...peitoral,
    // ...ombro,
    ...biceps,
    ...triceps,
    // ...pernas,
    // ...gluteo,
]


export const workoutMoked:Workout[] = [
    {
        "id":"ac0c1618-e1b8-4014-9f6d-3b41599d3ff1",
        "training": "A",
        "exercises": [
            {
                "id": "rosca_martelo",
                "order": 5,
                "series": 3,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "rosca_inversa",
                "order": 6,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "rosca_alternada",
                "order": 4,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "puxador_vertical",
                "order": 1,
                "series": 4,
                "repetitions": 12,
                "observation": ""                
            },
            {
                "id": "remada_baixa",
                "order": 2,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "peck_deck_dorsal",
                "order": 3,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            }
        ]
    },
    {
        "id":"6e0a29df-1869-48cd-9f94-ec21c15c6d99",
        "training": "B",
        "exercises": [
            {
                "id": "desenvolvimento_halter",
                "order": 5,
                "series": 4,
                "repetitions": 12,
                "observation": "",
            },
            {
                "id": "elevacao_frontal",
                "order": 4,
                "series": 4,
                "repetitions": 12,
                "observation": "",
            },
            {
                "id": "triceps_corda",
                "order": 6,
                "series": 4,
                "repetitions": 12,
                "observation": "",
            },
            {
                "id": "triceps_frances",
                "order": 7,
                "series": 4,
                "repetitions": 12,
                "observation": "",
            },
            {
                "id": "supino_inclinado",
                "order": 2,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "supino_vertical",
                "order": 1,
                "series": 3,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "peck_deck",
                "order": 3,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            }
        ]
    },
    {
        "id":"4a27197a-fa9f-4a95-b28e-310e335006d3",
        "training": "C",
        "exercises": [
            {
                "id": "leg_45",
                "order": 3,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "agachamento_smith",
                "order": 2,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "afundo",
                "order": 5,
                "series": 3,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "cadeira_extensora",
                "order": 1,
                "series": 3,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "cadeira_flexora",
                "order": 4,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "cadeira_adutora",
                "order": 6,
                "series": 3,
                "repetitions": 12,
                "observation": ""
            },
            {
                "id": "panturrilha_maquina",
                "order": 7,
                "series": 4,
                "repetitions": 12,
                "observation": ""
            }
        ]
    },
]