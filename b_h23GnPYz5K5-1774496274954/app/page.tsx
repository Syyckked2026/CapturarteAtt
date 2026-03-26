"use client"

import { Button } from "@/components/ui/button"
import { Camera, Lightbulb, Smartphone, ImageIcon, TrendingUp, CheckCircle2, Gift, Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const beforeAfterImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-wyOiDQ2ae9qrtXukpDcpOCfWGxpOGa.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-FYEzQQ3hSVCtKahLSBmpjPPhK4EN98.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-sJzLXKbEMh7RC80lgE9NafNU9c41Bu.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-6XmP0C92OapPlq1Vhyg8aw0cfFNqMG.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-cNxd7Ny6jcrcFjdZ7etp770olFLLJJ.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-pZdg0WMV1JrjeyOBUf4GbT5rFOv3Ro.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-HdMLlGGmLSRLFxGt5b26HkOXluIfcS.png",
  ]

  const notifications = [
    "Dr. Marcos Pereira acabou de garantir o Capturarte Odonto 📸",
    "Clínica Dental Prime comprou agora",
    "Dra. Beatriz Almeida garantiu o acesso vitalício!",
    "Dr. Eduardo Rocha acabou de entrar na turma 📸",
    "Dra. Camila Ferreira garantiu seu acesso",
    "Clínica Odonto Premium comprou agora",
  ]

  const testimonials = [
    {
      name: "Dra. Amanda Guedes",
      clinic: "Clínica Sorriso Saudavel+",
      testimonial: "Minhas fotos ficaram incríveis! Agora consigo mostrar a qualidade real do meu trabalho.",
      image: "/professional-female-dentist-smiling.png",
    },
    {
      name: "Dr. Ricardo Mendes",
      clinic: "Dental Center",
      testimonial: "Método prático e direto. Já apliquei no mesmo dia e os resultados são profissionais.",
      image: "/professional-male-dentist-smiling.jpg",
    },
    {
      name: "Dra. Juliana Costa",
      clinic: "Odonto Excellence",
      testimonial: "Economizei muito com fotógrafo. Agora faço tudo sozinha com qualidade profissional.",
      image: "/professional-female-dentist.png",
    },
    {
      name: "Dr. Carlos Oliveira",
      clinic: "Clínica Sorrifácil",
      testimonial: "Meu Instagram mudou completamente. Pacientes elogiam as fotos dos meus casos.",
      image: "/professional-male-dentist.png",
    },
    {
      name: "Dra. Fernanda Lima",
      clinic: "Estética Bucal",
      testimonial: "Simples e eficaz. Aprendi técnicas que uso todos os dias no consultório.",
      image: "/professional-female-dentist-happy.jpg",
    },
    {
      name: "Dr. Marcos Schutz",
      clinic: "Odontologia Schutz",
      testimonial: "Valorizou muito meu trabalho. As fotos agora transmitem toda a qualidade que entrego.",
      image: "/professional-male-dentist-confident.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % beforeAfterImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [beforeAfterImages.length])

  useEffect(() => {
    const showTimer = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }, 30000)

    setTimeout(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }, 5000)

    return () => clearInterval(showTimer)
  }, [notifications.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-final")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="min-h-screen bg-[#060703] text-white">
      <div
        className={`fixed bottom-6 left-6 z-50 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ${
          showNotification ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📸</span>
          <span className="text-sm font-medium">{notifications[currentNotification]}</span>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f40034]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center text-[rgba(255,255,255,1)]">
          <nav className="flex items-center justify-center w-full">
            <a
              href="#aprender"
              className="text-xs md:text-sm hover:text-white/80 transition-colors font-sans text-center bg-[rgba(198,1,43,1)] font-semibold px-4 md:px-10 py-2 rounded"
            >
              MÉTODO EXCLUSIVO PARA DENTISTAS
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#9c1030]/10 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Camera className="w-4 h-4 text-[#9c1030]" />
              <span className="text-sm text-white/80">Fotografia Odontológica Profissional</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-balance">Dentista Transforme seus casos</span>
              <span className="block text-balance">em verdadeiras</span>
              <span className="block text-balance bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                obras de arte
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-balance leading-relaxed italic font-sans text-[rgba(255,255,255,1)]">
              Usando seu celular ou câmera profissional
            </p>

            <p className="text-base md:text-lg max-w-2xl mx-auto text-balance leading-relaxed italic font-sans text-[rgba(255,255,255,1)]">
              Domine a arte da fotografia odontológica com o método Capturarte Odonto e destaque seus resultados
              clínicos com imagens que encantam, vendem e fortalecem sua autoridade profissional.
            </p>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#9c1030]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#9c1030]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </section>

      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-[#9c1030] hover:bg-[#9c1030]/90 text-white font-semibold px-12 py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Quero destravar minha fotografia
          </Button>
        </div>
      </section>

      <section id="sobre" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">
                <span className="text-white">O que é o </span>
                <span className="text-[#9c1030]">Capturarte Odonto</span>
                <span className="text-white">?</span>
              </h2>
              <p className="text-lg leading-relaxed italic text-[rgba(255,255,255,1)]">
                O Capturarte Odonto é um treinamento <span className="text-white font-semibold">100% online</span> e
                direto ao ponto que ensina dentistas a dominar a fotografia odontológica com celular ou câmera, criando
                imagens profissionais que valorizam seu trabalho e atraem mais pacientes.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Camera className="w-6 h-6 text-[#9c1030] flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Linguagem simples, exemplos reais e técnicas que você aplica no mesmo dia.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                {beforeAfterImages.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Antes e Depois - Resultado ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <p className="text-center mt-4 text-sm text-white/60 italic">
                Antes e Depois — Resultado real com o método Capturarte Odonto
              </p>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-[#9c1030] w-8" : "bg-white/30"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            <span className="text-white">Quem já está </span>
            <span className="text-[#9c1030]">transformando suas fotos</span>
            <span className="text-white"> com o Capturarte Odonto 📸</span>
          </h2>

          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#9c1030]/30">
              <iframe
                src="https://www.youtube.com/embed/7tFSqvxzTpM"
                title="Capturarte Odonto - Transformação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#9c1030]/30"
                        />
                        <div>
                          <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                          <p className="text-sm text-white/60">{testimonial.clinic}</p>
                        </div>
                      </div>
                      <p className="text-white/80 text-base leading-relaxed italic text-center">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-[#9c1030] w-8" : "bg-white/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="aprender" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            <span className="text-white">Você vai </span>
            <span className="text-[#9c1030]">aprender</span>
            <span className="text-white">:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                text: "Como ajustar a iluminação perfeita mesmo em clínicas pequenas",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                text: "Quais configurações usar no celular e na câmera para fotos nítidas e realistas",
              },
              {
                icon: <Camera className="w-8 h-8" />,
                text: "Como posicionar o paciente e padronizar ângulos",
              },
              {
                icon: <ImageIcon className="w-8 h-8" />,
                text: "Como editar fotos de forma profissional pelo próprio celular",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                text: "Como criar um acervo visual que fortalece seu marketing e autoridade",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="text-[#9c1030] flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-[#9c1030] hover:bg-[#9c1030]/90 text-white font-semibold px-12 py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Quero destravar minha fotografia
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            <span className="text-white">Esse método é </span>
            <span className="text-[#9c1030]">para você</span>
            <span className="text-white"> que:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Quer valorizar o seu trabalho e aumentar o valor percebido dos seus tratamentos nas redes sociais",
              "Deseja criar conteúdos Éticos, Profissionais e materiais de antes/depois",
              "Busca independência visual sem depender de fotógrafos ou agências",
              "É dentista, estudante de odontologia ou auxiliar que quer se destacar",
              "Quer economizar tempo e dinheiro com equipamentos caros",
              "Deseja fortalecer sua autoridade, marca, e por consequência atrair mais pacientes",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 rounded-xl bg-gradient-to-br from-[#9c1030]/10 to-transparent border border-[#9c1030]/20 hover:border-[#9c1030]/40 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-[#9c1030] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bonus" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            <span className="text-white">E mais — </span>
            <span className="text-[#9c1030]">bônus exclusivos</span>
            <span className="text-white"> para quem garantir hoje 👇</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Lista de apps gratuitos para edição",
                description: "Os melhores aplicativos para editar suas fotos direto do celular",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Guia rápido de iluminação acessível",
                description: "Como criar iluminação profissional com materiais simples e baratos",
              },
              {
                icon: <ImageIcon className="w-8 h-8" />,
                title: "Modelos de antes e depois prontos",
                description: "Templates prontos para Instagram que você só precisa personalizar",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Acesso vitalício e futuras atualizações",
                description: "Pague uma vez e tenha acesso para sempre, incluindo novos conteúdos",
              },
            ].map((bonus, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-[#9c1030]/10 to-transparent border border-[#9c1030]/20 hover:border-[#9c1030]/40 transition-all"
              >
                <div className="text-[#9c1030] flex-shrink-0">{bonus.icon}</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{bonus.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#9c1030]/20 to-[#9c1030]/5 border border-[#9c1030]/20 rounded-3xl p-8 text-center">
            <Shield className="w-12 h-12 text-[#9c1030] mx-auto mb-4" />
            <p className="text-lg leading-relaxed text-white/90">
              E tudo isso com <span className="text-[#9c1030] font-semibold">acesso vitalício</span> e{" "}
              <span className="text-[#9c1030] font-semibold">garantia incondicional de 7 dias</span>, para você aprender
              sem riscos.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing-final" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Se você pulou direto pro final pra saber o valor ou o segredo:
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                Este é o método <span className="text-[#9c1030] font-semibold">Capturarte Odonto</span>, o treinamento
                que transforma dentistas comuns em verdadeiros artistas da fotografia clínica — usando apenas o celular
                ou câmera.
              </p>

              <p>
                Aprenda a capturar imagens que encantam pacientes, fortalecem sua autoridade e fazem seu trabalho se
                destacar nas redes sociais.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
                <h3 className="font-semibold text-white mb-4 text-xl">Inclui técnicas práticas de:</h3>
                <ul className="space-y-2 text-left max-w-2xl mx-auto">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Iluminação profissional com materiais acessíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Edição profissional direto do celular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Padronização de ângulos e posicionamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Lista de apps gratuitos para edição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Guia rápido de iluminação acessível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Modelos de antes e depois prontos para Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9c1030] flex-shrink-0 mt-0.5" />
                    <span>Acesso vitalício e futuras atualizações</span>
                  </li>
                </ul>
              </div>

              <p>
                Feito para dentistas e profissionais da odontologia que querem elevar o padrão visual dos seus
                atendimentos, sem depender de fotógrafos ou equipamentos caros.
              </p>

              <div className="bg-gradient-to-r from-[#9c1030]/20 to-[#9c1030]/10 border border-[#9c1030]/30 rounded-xl p-6 mt-8">
                <p className="text-2xl font-bold text-white">
                  O investimento é de apenas{" "}
                  <span className="text-[#9c1030] text-3xl text-[rgba(8,128,4,1)]">R$47,90</span>, com acesso vitalício
                  e garantia incondicional de 7 dias.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 pt-6">
              <div className="space-y-2">
                <p className="text-lg text-[rgba(255,26,5,0.7)]">De R$97,00 por apenas:</p>
                <div className="text-5xl md:text-6xl font-bold text-[rgba(8,128,4,1)]">R$47,90</div>
                <p className="text-white/60">Acesso vitalício + Garantia de 7 dias</p>
              </div>

              <a
                href="https://ggcheckout.app/checkout/v2/LM8cYHD1qrsf0TDGqZsv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#9c1030] hover:bg-[#9c1030]/90 px-4 md:px-12 py-4 md:py-8 text-sm md:text-xl font-bold rounded-xl shadow-2xl shadow-[#9c1030]/30 hover:scale-105 transition-all text-center text-[rgba(14,248,6,1)] whitespace-normal leading-tight"
                >
                  Quero garantir meu acesso por apenas R$47,90
                </Button>
              </a>

              <p className="text-sm text-white/50 italic">
                {
                  "🔒 Pagamento 100% seguro | ✅ Garantia incondicional de 7 dias\n\nConforme o artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990)"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/60 text-center md:text-left">
              Este site não faz parte do site do Facebook nem do Facebook Inc. Além disso, este site NÃO é endossado
              pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
              <br />© 2026 Capturarte Odonto. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Termos
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
