"use client"

import {motion} from "framer-motion";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight, Instagram, MessageSquare, Music2, Twitch, Youtube} from "lucide-react";
import {sectionTopSpacing, SI_DARK_HEX_STRING} from "@/components/variables";
import {Button} from "@/components/ui/button";
import {LINKS} from "@/components/blocks/links";

import ElectricBorder from '@/components/ElectricBorder'
import ShinyText from "@/components/ShinyText";

export default function Socials() {
  return (
    <motion.section id="socials" className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/70 rounded-full blur-3xl opacity-30 animate-pulse-slow"/>
        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/60 rounded-full blur-3xl opacity-25 animate-pulse-slow"/>
      </div>

      <div className="container mx-auto px-4">
        <div className="content-backdrop rounded-2xl p-8 mx-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-serephixBold mb-4"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
            >
              Connect With <span className="text-primary">Us</span>
            </motion.h2>
            <motion.p
              className="text-lg text-foreground/80"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.1}}
            >
              Follow us on social media to stay updated with our latest projects and announcements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Discord */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#5865F2]/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-[#5865F2]"/>
                  </div>
                  <CardTitle>Discord</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Join our community and chat with other members
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.discord}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Join Server"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* YouTube */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.1}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center mb-4">
                    <Youtube className="h-6 w-6 text-[#FF0000]"/>
                  </div>
                  <CardTitle>YouTube</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Watch our videos and tutorials
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.youtube_channel}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Subscribe"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* TikTok */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.2}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#000000]/10 flex items-center justify-center mb-4">
                    <Music2 className="h-6 w-6"/>
                  </div>
                  <CardTitle>TikTok</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Follow our latest short-form content
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.tiktok}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Follow"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Twitch */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.3}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#9146FF]/10 flex items-center justify-center mb-4">
                    <Twitch className="h-6 w-6 text-[#9146FF]"/>
                  </div>
                  <CardTitle>Twitch</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Watch our live streams
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.twitch}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Follow"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.4}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center mb-4">
                    <Instagram className="h-6 w-6 text-[#E4405F]"/>
                  </div>
                  <CardTitle>Instagram</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Check out our visual updates
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.instagram}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Follow"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Github */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.5}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#181717]/10 flex items-center justify-center mb-4">
                    <img src="/assets/github.svg" alt="GitHub"
                         className="invert-on-dark h-6 w-6"/>
                  </div>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Explore our open source projects
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.github_org}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Follow"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Modrinth */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.6}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#1bd96a]/10 flex items-center justify-center mb-4">
                    <img src="/assets/modrinth.png" alt="Modrinth" className="h-6 w-6"/>
                  </div>
                  <CardTitle>Modrinth</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Download our mods and modpacks
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.modrinth_org}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Visit Profile"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

            {/* CurseForge */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.7}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#F16436]/10 flex items-center justify-center mb-4">
                    <img src="/assets/curseforge.svg" alt="CurseForge"
                         className="invert-on-dark h-6 w-6"/>
                  </div>
                  <CardTitle>CurseForge</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Find our mods and modpacks
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <ElectricBorder
                    color={SI_DARK_HEX_STRING}
                    speed={0.2}
                    chaos={0.2}
                    thickness={3}
                    style={{borderRadius: 5}}
                  >
                    <Button asChild className="hover-glow">
                      <a href={`${LINKS.curseforge_profile}`} target="_blank" rel="noopener noreferrer">
                        <ShinyText
                          text="Visit Profile"
                          disabled={false}
                          speed={2}
                        />
                        <ArrowRight size={16} className="ml-2"/>
                      </a>
                    </Button>
                  </ElectricBorder>
                </CardFooter>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}
