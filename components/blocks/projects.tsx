"use client"

import {useEffect, useRef, useState} from "react"
import {motion, useAnimation} from "framer-motion"
import {ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {useIsMobile} from "@/hooks/use-mobile"
import {projects} from "@/components/blocks/project-list"
import ShinyText from "@/components/ShinyText";
import {sectionTopSpacing} from "@/components/variables";
import {PageWrapper} from "@/components/page-wrapper";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

interface ProjectsProps {
  py: number;
  viewall: boolean;
}

export default function Projects({py, viewall}: ProjectsProps) {
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState("All")
  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)
  const projectsRef = useRef<HTMLElement>(null)
  const projectsControls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsRef.current && entry.isIntersecting) {
            projectsControls.start("visible")
          }
        })
      },
      {threshold: 0.2},
    )

    if (projectsRef.current) observer.observe(projectsRef.current)

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current)
    }
  }, [projectsControls])

  return (
    <motion.section
      id="projects"
      ref={projectsRef}
      initial="hidden"
      animate={projectsControls}
      variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
      }}
      className={`py-${py} relative overflow-hidden ${sectionTopSpacing}`}
    >
      {/* Projects */}
      <div className="container mx-auto px-4">
        <div className="content-backdrop rounded-2xl p-8 mx-4">
          {/* Projects */}
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-serephixBold mb-4"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
              >
                Our <span className="text-primary">Projects</span>
              </motion.h2>
              <motion.p
                className="text-lg text-foreground/80"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.1}}
              >
                Discover our collection of Minecraft mods, plugins, and resource packs that have been
                downloaded by
                millions of players worldwide.
              </motion.p>
            </div>

            <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8 font-serephixNew">
                {isMobile ? (
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Select category"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Mod">Mods</SelectItem>
                      <SelectItem value="Modpack">Modpacks</SelectItem>
                      <SelectItem value="Plugin">Plugins</SelectItem>
                      <SelectItem value="Datapack">Datapacks</SelectItem>
                      <SelectItem value="Resourcepack">Resourcepacks</SelectItem>
                      <SelectItem value="Tool">Tools</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <TabsList className="grid w-full max-w-2l grid-cols-8 gap-2 p-1">
                    <TabsTrigger value="All">All</TabsTrigger>
                    <TabsTrigger value="Mod">Mods</TabsTrigger>
                    <TabsTrigger value="Modpack">Modpacks</TabsTrigger>
                    <TabsTrigger value="Plugin">Plugins</TabsTrigger>
                    <TabsTrigger value="Datapack" className="group">
                    <span
                      className="block group-[&[data-state=inactive]]:block group-[&[data-state=active]]:hidden">DPs</span>
                      <span className="hidden group-[&[data-state=active]]:block">Datapacks</span>
                    </TabsTrigger>
                    <TabsTrigger value="Resourcepack" className="group">
                    <span
                      className="block group-[&[data-state=inactive]]:block group-[&[data-state=active]]:hidden">RPs</span>
                      <span className="hidden group-[&[data-state=active]]:block">Resourcepacks</span>
                    </TabsTrigger>
                    <TabsTrigger value="Tool">Tools</TabsTrigger>
                    <TabsTrigger value="Other">Other</TabsTrigger>
                  </TabsList>
                )}
              </div>
            </Tabs>

            {filteredProjects.length === 0 ? (
              <div className="text-center text-foreground/70 italic py-12">
                <p>No Projects found in that category!</p>
                <p>We will steadily increase our library of Mods, Modpacks and more, so stay tuned!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                  >
                    <Card className="overflow-hidden hover-scale h-full border-border/50">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="text-xs">
                            {project.category}
                          </Badge>
                          {project.partner &&
                            <Badge variant="green" className="text-xs">
                              Partner
                            </Badge>
                          }
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="line-clamp-1 font-serephixBold">{project.title}</CardTitle>
                        <CardDescription
                          className="text-foreground/70 line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <div className="flex gap-2">
                          {project.links.github && project.links.github.trim() !== "" ?
                            <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                              <a href={project.links.github} target="_blank"
                                 rel="noopener noreferrer">
                                <img src="/icons/github.png" alt="GitHub" width={20}
                                     height={20}
                                     className="invert-on-dark h-5 w-5"/>
                                <span className="sr-only">GitHub</span>
                              </a>
                            </Button> : null
                          }
                          {project.links.curseforge && project.links.curseforge.trim() !== "" ?
                            <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                              <a href={project.links.curseforge} target="_blank"
                                 rel="noopener noreferrer">
                                <img src="/icons/curseforge.png" alt="CurseForge"
                                     width={20} height={20}
                                     className="h-5 w-5"/>
                                <span className="sr-only">CurseForge</span>
                              </a>
                            </Button> : null
                          }
                          {project.links.modrinth && project.links.modrinth.trim() !== "" ?
                            <Button size="sm" variant="ghost" className="w-9 h-9 p-0" asChild>
                              <a href={project.links.modrinth} target="_blank"
                                 rel="noopener noreferrer">
                                <img src="/icons/modrinth.png" alt="Modrinth"
                                     className="h-5 w-5"/>
                                <span className="sr-only">Modrinth</span>
                              </a>
                            </Button> : null
                          }
                        </div>
                        <Button size="sm" variant="default" className="gap-1" asChild>
                          {project.wikiid && project.wikiid.trim() !== "" && (
                            project.category === "Tool" ? (
                              <a href={`/utils/${project.wikiid}`}><ShinyText
                                text="Use"
                                disabled={false}
                                speed={2}
                              /><ArrowRight size={14}/></a>
                            ) : (
                              <a href={`/wiki/${project.wikiid}`}><ShinyText
                                text="Wiki"
                                disabled={false}
                                speed={2}
                              /><ArrowRight size={14}/></a>
                            )
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {viewall && (
            <div className="mt-12 text-center">
              <a href="/projects">
                <Button size="lg" variant="outline" className="hover-scale">
                  <ShinyText
                    text="View All Projects"
                    disabled={false}
                    speed={3}
                  />
                  <ArrowRight size={16} className="ml-2"/>
                </Button>
              </a>
            </div>
          )}

        </div>
      </div>
    </motion.section>
  )
}
