"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Globe,
  FileText,
  Star,
  Mail,
  ExternalLink,
  Palette,
  Search,
  Video,
  Award,
  Calendar,
  MapPin,
  Languages,
} from "lucide-react"

const translations = {
  en: {
    hero: {
      title: "Ivo Joaquín Neiman",
      subtitle: "Web Designer | WordPress, Shopify & Wix Specialist",
      description:
        "I build websites that actually work for your business. Not just pretty pages that sit there, but real websites that bring in customers, tell your story, and help you grow. Currently studying Systems Engineering at Universidad Nacional de La Plata (UNLP) while working with clients worldwide. Simple as that.",
      experience: "2+ Years Experience",
      support: "30 Days Free Support",
      getInTouch: "Get In Touch",
      viewProjects: "View Projects",
      availableForProjects: "Available for Projects",
    },
    skills: {
      title: "Here's What I Do",
      customDesign: {
        title: "Custom Design",
        description:
          "I don't use templates. Every site I build is designed specifically for your business and your customers. WordPress, Shopify, WooCommerce—whatever fits your needs.",
      },
      seo: {
        title: "SEO That Works",
        description:
          "Your website needs to be found. I write content and optimize pages so Google actually shows your site to people searching for what you offer.",
      },
      video: {
        title: "Video Content",
        description:
          "Sometimes you need more than just text and images. I create videos that tell your story—whether it's for social media, your homepage, or marketing campaigns.",
      },
    },
    projects: {
      title: "Some Work I'm Proud Of",
      cleatus: {
        title: "CLEATUS Platform",
        subtitle: "Content Development for Government Contracting Platform",
        description:
          "Government contracting is complicated stuff. CLEATUS needed someone who could break down complex topics like NAICS codes and SBA programs into content that actually makes sense. Wrote dozens of blog posts and guides that help small businesses navigate the whole process.",
        published: "Published August 2024",
      },
      harland: {
        title: "Harland Handmade",
        subtitle: "Shopify Website for Italian Buttero Leather Goods",
        description:
          "Erik needed a site that could showcase his handcrafted leather goods and actually sell them. Built a custom Shopify store that works perfectly on phones and desktops, plus wrote all the product descriptions and blog content.",
        published: "Published June 2024",
      },
      andamio: {
        title: "Andamio S.A.",
        subtitle: "Complete Web Design + SEO for Construction Company",
        description:
          "This construction company had zero web presence. Built their entire site from scratch—every page, all the copy, designed graphics in Figma, set up contact forms. Now they actually show up when people search for scaffolding in Argentina.",
        published: "Published August 2025",
      },
      hairforever: {
        title: "Hair Forever",
        subtitle: "Medical Hair Treatment Brand Website",
        description:
          "Hair loss is personal, so the website needed to feel that way too. Created a custom flow where people can identify their specific type of hair loss, then see exactly what treatments work for them. Added Calendly so they can book consultations without any hassle.",
        published: "Published August 2025",
      },
      signedclub: {
        title: "Signed Club",
        subtitle: "Fashion E-Commerce for Argentinian Clothing Brand",
        description:
          "Buenos Aires streetwear brand that needed to sell online. Built them a clean e-commerce site that actually converts visitors into customers. Focused on making the shopping experience smooth and the brand story clear.",
        published: "Published 2024",
      },
      aspire: {
        title: "Aspire Remodeling",
        subtitle: "Siding Contractor Website with Local SEO",
        description:
          "Denver roofing and siding contractor needed to dominate local search. Built separate pages for each service area with content tailored to what people in those neighborhoods actually search for. Now they show up when homeowners need work done.",
        published: "Published August 2025",
      },
    },
    testimonials: {
      title: "What People Say",
      quote:
        "I collaborated with Ivo on multiple web projects, including our Harland Handmade e-commerce site. He expertly handled everything from Shopify development to React/Next.js programming and content creation. What stands out is his ability to work independently and solve complex problems without hand-holding. He's incredibly resourceful, hardworking, and consistently delivers high-quality results.",
      author: "Erik S.",
      position: "Founder of dashrd.com and cleat.ai",
    },
    stats: {
      title: "The Numbers",
      experience: "Years Experience",
      support: "Days Free Support",
      satisfaction: "Satisfaction Guaranteed",
      response: "Response Time",
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Need a website that actually works for your business? I'm here to help. No fluff, no endless meetings—just good work delivered on time.",
      sendMessage: "Send Message",
      scheduleCall: "Schedule Call",
      availableWorldwide: "Available Worldwide",
      languages: "English & Spanish",
      topRated: "Top Rated Freelancer",
    },
    footer: {
      copyright: "© 2024 Ivo Joaquín Neiman. All rights reserved.",
    },
    badges: {
      contentWriting: "Content Writing",
      shopify: "Shopify",
      wordpress: "WordPress",
      wix: "Wix",
      blogContent: "Blog Content",
      seoWriting: "SEO Writing",
      seoStrategy: "SEO Strategy",
      salesWriting: "Sales Writing",
      blogWriting: "Blog Writing",
      webDesign: "Web Design",
      figma: "Figma",
      elementor: "Elementor",
      uxUi: "UX & UI",
      ecommerce: "E-Commerce",
      uxDesign: "UX Design",
      conversionOptimization: "Conversion Optimization",
      localSeo: "Local SEO",
      seoContent: "SEO Content",
    },
  },
  es: {
    hero: {
      title: "Ivo Joaquín Neiman",
      subtitle: "Diseñador Web | Especialista en WordPress, Shopify y Wix",
      description:
        "Creo sitios web que realmente funcionan para tu negocio. No solo páginas bonitas que están ahí, sino sitios web reales que atraen clientes, cuentan tu historia y te ayudan a crecer. Actualmente estudiando Licenciatura en Sistemas en la Universidad Nacional de La Plata (UNLP) mientras trabajo con clientes de todo el mundo. Así de simple.",
      experience: "2+ Años de Experiencia",
      support: "30 Días de Soporte Gratis",
      getInTouch: "Contactar",
      viewProjects: "Ver Proyectos",
      availableForProjects: "Disponible para Proyectos",
    },
    skills: {
      title: "Esto es lo que Hago",
      customDesign: {
        title: "Diseño Personalizado",
        description:
          "No uso plantillas. Cada sitio que construyo está diseñado específicamente para tu negocio y tus clientes. WordPress, Shopify, WooCommerce—lo que se adapte a tus necesidades.",
      },
      seo: {
        title: "SEO que Funciona",
        description:
          "Tu sitio web necesita ser encontrado. Escribo contenido y optimizo páginas para que Google realmente muestre tu sitio a las personas que buscan lo que ofreces.",
      },
      video: {
        title: "Contenido de Video",
        description:
          "A veces necesitas más que solo texto e imágenes. Creo videos que cuentan tu historia—ya sea para redes sociales, tu página principal o campañas de marketing.",
      },
    },
    projects: {
      title: "Algunos Trabajos de los que Estoy Orgulloso",
      cleatus: {
        title: "Plataforma CLEATUS",
        subtitle: "Desarrollo de Contenido para Plataforma de Contratación Gubernamental",
        description:
          "La contratación gubernamental es complicada. CLEATUS necesitaba alguien que pudiera desglosar temas complejos como códigos NAICS y programas SBA en contenido que realmente tenga sentido. Escribí docenas de posts de blog y guías que ayudan a pequeñas empresas a navegar todo el proceso.",
        published: "Publicado en Agosto 2024",
      },
      harland: {
        title: "Harland Handmade",
        subtitle: "Sitio Web Shopify para Productos de Cuero Buttero Italiano",
        description:
          "Erik necesitaba un sitio que pudiera mostrar sus productos de cuero artesanales y realmente venderlos. Construí una tienda Shopify personalizada que funciona perfectamente en teléfonos y computadoras, además escribí todas las descripciones de productos y contenido del blog.",
        published: "Publicado en Junio 2024",
      },
      andamio: {
        title: "Andamio S.A.",
        subtitle: "Diseño Web Completo + SEO para Empresa de Construcción",
        description:
          "Esta empresa de construcción no tenía presencia web. Construí todo su sitio desde cero—cada página, todo el contenido, diseñé gráficos en Figma, configuré formularios de contacto. Ahora realmente aparecen cuando la gente busca andamios en Argentina.",
        published: "Publicado en Agosto 2025",
      },
      hairforever: {
        title: "Hair Forever",
        subtitle: "Sitio Web de Marca de Tratamiento Capilar Médico",
        description:
          "La pérdida de cabello es personal, así que el sitio web necesitaba sentirse así también. Creé un flujo personalizado donde las personas pueden identificar su tipo específico de pérdida de cabello, luego ver exactamente qué tratamientos funcionan para ellos. Agregué Calendly para que puedan reservar consultas sin complicaciones.",
        published: "Publicado en Agosto 2025",
      },
      signedclub: {
        title: "Signed Club",
        subtitle: "E-Commerce de Moda para Marca de Ropa Argentina",
        description:
          "Marca de streetwear de Buenos Aires que necesitaba vender online. Les construí un sitio de e-commerce limpio que realmente convierte visitantes en clientes. Me enfoqué en hacer la experiencia de compra fluida y la historia de la marca clara.",
        published: "Publicado en 2024",
      },
      aspire: {
        title: "Aspire Remodeling",
        subtitle: "Sitio Web de Contratista de Revestimientos con SEO Local",
        description:
          "Contratista de techos y revestimientos de Denver necesitaba dominar la búsqueda local. Construí páginas separadas para cada área de servicio con contenido adaptado a lo que la gente en esos barrios realmente busca. Ahora aparecen cuando los propietarios necesitan trabajo.",
        published: "Publicado en Agosto 2025",
      },
    },
    testimonials: {
      title: "Lo que Dice la Gente",
      quote:
        "Colaboré con Ivo en múltiples proyectos web, incluyendo nuestro sitio de e-commerce Harland Handmade. Manejó expertamente todo desde desarrollo Shopify hasta programación React/Next.js y creación de contenido. Lo que destaca es su capacidad para trabajar independientemente y resolver problemas complejos sin necesidad de supervisión. Es increíblemente ingenioso, trabajador y consistentemente entrega resultados de alta calidad.",
      author: "Erik S.",
      position: "Fundador de dashrd.com y cleat.ai",
    },
    stats: {
      title: "Los Números",
      experience: "Años de Experiencia",
      support: "Días de Soporte Gratis",
      satisfaction: "Satisfacción Garantizada",
      response: "Tiempo de Respuesta",
    },
    contact: {
      title: "Trabajemos Juntos",
      description:
        "¿Necesitas un sitio web que realmente funcione para tu negocio? Estoy aquí para ayudar. Sin relleno, sin reuniones interminables—solo buen trabajo entregado a tiempo.",
      sendMessage: "Enviar Mensaje",
      scheduleCall: "Programar Llamada",
      availableWorldwide: "Disponible Mundialmente",
      languages: "Inglés y Español",
      topRated: "Freelancer Top Rated",
    },
    footer: {
      copyright: "© 2024 Ivo Joaquín Neiman. Todos los derechos reservados.",
    },
    badges: {
      contentWriting: "Redacción de Contenido",
      shopify: "Shopify",
      wordpress: "WordPress",
      wix: "Wix",
      blogContent: "Contenido de Blog",
      seoWriting: "Redacción SEO",
      seoStrategy: "Estrategia SEO",
      salesWriting: "Redacción de Ventas",
      blogWriting: "Redacción de Blog",
      webDesign: "Diseño Web",
      figma: "Figma",
      elementor: "Elementor",
      uxUi: "UX y UI",
      ecommerce: "E-Commerce",
      uxDesign: "Diseño UX",
      conversionOptimization: "Optimización de Conversión",
      localSeo: "SEO Local",
      seoContent: "Contenido SEO",
    },
  },
}

export default function IvoPortfolio() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all elements with data-animate attribute
    const elementsToAnimate = document.querySelectorAll("[data-animate]")
    elementsToAnimate.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const getAnimationClass = (elementId: string, delay = 0) => {
    const isVisible = visibleElements.has(elementId)
    return `transition-all duration-1000 ease-out ${delay > 0 ? `delay-${delay}` : ""} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Language Toggle - Added fade-in animation */}
      <div className="fixed top-4 right-4 z-50 opacity-0 animate-[fadeIn_0.8s_ease-out_0.5s_forwards]">
        <Button onClick={toggleLanguage} variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
          <Languages className="h-4 w-4 mr-2" />
          {language === "en" ? "ES" : "EN"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1
                  id="hero-title"
                  data-animate
                  className={`text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance ${getAnimationClass("hero-title")}`}
                >
                  {t.hero.title}
                </h1>
                <p
                  id="hero-subtitle"
                  data-animate
                  className={`text-xl lg:text-2xl text-muted-foreground mb-6 ${getAnimationClass("hero-subtitle", 200)}`}
                >
                  {t.hero.subtitle}
                </p>
                <p
                  id="hero-description"
                  data-animate
                  className={`text-lg text-muted-foreground max-w-2xl text-pretty ${getAnimationClass("hero-description", 400)}`}
                >
                  {t.hero.description}
                </p>
              </div>

              <div
                id="hero-badges"
                data-animate
                className={`flex flex-wrap gap-3 justify-center lg:justify-start mb-8 ${getAnimationClass("hero-badges", 600)}`}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  {t.hero.experience}
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  {t.hero.support}
                </Badge>
              </div>

              <div
                id="hero-buttons"
                data-animate
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${getAnimationClass("hero-buttons", 800)}`}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() =>
                    window.open("mailto:contactoivoneiman@gmail.com?subject=Consulta sobre servicios web", "_blank")
                  }
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {t.hero.getInTouch}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("projects-title")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  {t.hero.viewProjects}
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div id="hero-avatar" data-animate className={`relative ${getAnimationClass("hero-avatar", 300)}`}>
                <Avatar className="h-64 w-64 lg:h-80 lg:w-80 border-4 border-primary/20">
                  <AvatarImage src="/profile.jpeg" className="object-cover object-[center_75%]" />
                  <AvatarFallback className="text-4xl font-bold">IN</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {t.hero.availableForProjects}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2
            id="skills-title"
            data-animate
            className={`text-3xl font-bold text-center mb-12 ${getAnimationClass("skills-title")}`}
          >
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              id="skill-1"
              data-animate
              className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("skill-1", 200)}`}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.skills.customDesign.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.skills.customDesign.description}</p>
              </CardContent>
            </Card>

            <Card
              id="skill-2"
              data-animate
              className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("skill-2", 400)}`}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.skills.seo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.skills.seo.description}</p>
              </CardContent>
            </Card>

            <Card
              id="skill-3"
              data-animate
              className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("skill-3", 600)}`}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t.skills.video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.skills.video.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2
            id="projects-title"
            data-animate
            className={`text-3xl font-bold text-center mb-12 ${getAnimationClass("projects-title")}`}
          >
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card
              id="project-1"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-1", 100)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/cleatus.png"
                  alt="CLEATUS Platform"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent">{t.badges.contentWriting}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.cleatus.title}</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => window.open("https://cleat.ai", "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.cleatus.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.cleatus.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.blogContent}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoWriting}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoStrategy}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.cleatus.published}
                </div>
              </CardContent>
            </Card>

            <Card
              id="project-2"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-2", 200)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/harland.png"
                  alt="Harland Handmade Website"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">{t.badges.shopify}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.harland.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open("https://harlandhandmade.com", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.harland.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.harland.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoWriting}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.shopify}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.salesWriting}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.blogWriting}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.harland.published}
                </div>
              </CardContent>
            </Card>

            <Card
              id="project-3"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-3", 300)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/andamio.png"
                  alt="Andamio S.A. Website"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary">{t.badges.wordpress}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.andamio.title}</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => window.open("https://andamiosa.com.ar", "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.andamio.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.andamio.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.webDesign}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoStrategy}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.wordpress}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.figma}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.andamio.published}
                </div>
              </CardContent>
            </Card>

            <Card
              id="project-4"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-4", 400)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/hairforever.png"
                  alt="Hair Forever Website"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary">{t.badges.wordpress}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.hairforever.title}</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => window.open("https://hairforever.com.ar", "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.hairforever.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.hairforever.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoStrategy}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.wordpress}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.elementor}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.uxUi}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.hairforever.published}
                </div>
              </CardContent>
            </Card>

            <Card
              id="project-5"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-5", 500)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/signedclub.png"
                  alt="Signed Club Website"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary">{t.badges.wordpress}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.signedclub.title}</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => window.open("https://signedclub.com", "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.signedclub.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.signedclub.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.wordpress}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.ecommerce}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.uxDesign}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.conversionOptimization}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.signedclub.published}
                </div>
              </CardContent>
            </Card>

            <Card
              id="project-6"
              data-animate
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getAnimationClass("project-6", 600)}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/aspire-remodeling.png"
                  alt="Aspire Remodeling Website"
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent">{t.badges.wix}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.projects.aspire.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open("https://aspire-remodeling.com", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>{t.projects.aspire.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{t.projects.aspire.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {t.badges.webDesign}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.wix}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.localSeo}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {t.badges.seoContent}
                  </Badge>
                </div>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.projects.aspire.published}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="testimonials-title"
                data-animate
                className={`text-3xl font-bold mb-8 ${getAnimationClass("testimonials-title")}`}
              >
                {t.testimonials.title}
              </h2>
              <Card
                id="testimonial-card"
                data-animate
                className={`p-6 hover:shadow-lg transition-all duration-300 ${getAnimationClass("testimonial-card", 200)}`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground italic mb-4">"{t.testimonials.quote}"</blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>ES</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{t.testimonials.author}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonials.position}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2
                id="stats-title"
                data-animate
                className={`text-3xl font-bold mb-8 ${getAnimationClass("stats-title")}`}
              >
                {t.stats.title}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <Card
                  id="stat-1"
                  data-animate
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("stat-1", 100)}`}
                >
                  <div className="text-3xl font-bold text-primary-accessible mb-2">2+</div>
                  <p className="text-muted-foreground">{t.stats.experience}</p>
                </Card>
                <Card
                  id="stat-2"
                  data-animate
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("stat-2", 200)}`}
                >
                  <div className="text-3xl font-bold text-primary-accessible mb-2">30</div>
                  <p className="text-muted-foreground">{t.stats.support}</p>
                </Card>
                <Card
                  id="stat-3"
                  data-animate
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("stat-3", 300)}`}
                >
                  <div className="text-3xl font-bold text-primary-accessible mb-2">100%</div>
                  <p className="text-muted-foreground">{t.stats.satisfaction}</p>
                </Card>
                <Card
                  id="stat-4"
                  data-animate
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${getAnimationClass("stat-4", 400)}`}
                >
                  <div className="text-3xl font-bold text-primary-accessible mb-2">24h</div>
                  <p className="text-muted-foreground">{t.stats.response}</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            id="contact-title"
            data-animate
            className={`text-3xl font-bold mb-6 ${getAnimationClass("contact-title")}`}
          >
            {t.contact.title}
          </h2>
          <p
            id="contact-description"
            data-animate
            className={`text-xl text-muted-foreground mb-8 text-pretty ${getAnimationClass("contact-description", 200)}`}
          >
            {t.contact.description}
          </p>

          <div
            id="contact-buttons"
            data-animate
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 ${getAnimationClass("contact-buttons", 400)}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "mailto:contactoivoneiman@gmail.com?subject=Consulta sobre servicios web&body=Hola Ivo,%0D%0A%0D%0AMe interesa conocer más sobre tus servicios de diseño web.%0D%0A%0D%0ASaludos",
                  "_blank",
                )
              }
            >
              <Mail className="h-5 w-5 mr-2" />
              {t.contact.sendMessage}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() =>
                window.open(
                  "mailto:contactoivoneiman@gmail.com?subject=Solicitud de llamada&body=Hola Ivo,%0D%0A%0D%0AMe gustaría programar una llamada para discutir mi proyecto.%0D%0A%0D%0APor favor, compárteme tu disponibilidad.%0D%0A%0D%0ASaludos",
                  "_blank",
                )
              }
            >
              <Calendar className="h-5 w-5 mr-2" />
              {t.contact.scheduleCall}
            </Button>
          </div>

          <div
            id="contact-info"
            data-animate
            className={`flex flex-wrap justify-center gap-6 text-sm text-muted-foreground ${getAnimationClass("contact-info", 600)}`}
          >
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {t.contact.availableWorldwide}
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              {t.contact.languages}
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              {t.contact.topRated}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div
            id="footer-content"
            data-animate
            className={`flex flex-col md:flex-row justify-between items-center ${getAnimationClass("footer-content")}`}
          >
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">{t.footer.copyright}</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
