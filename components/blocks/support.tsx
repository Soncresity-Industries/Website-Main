"use client"

import {motion} from "framer-motion"
import {ArrowRight, Github, MessageSquare} from "lucide-react";
import {sectionTopSpacing} from "@/components/variables";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {LINKS} from "@/components/blocks/links";
import ShinyText from "@/components/ShinyText";

export default function Support() {
  return (
    <motion.section id="support" className={`py-10 md:py-22 relative overflow-hidden ${sectionTopSpacing}`}>
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
              <span className="text-primary">Support</span>
            </motion.h2>
            <motion.p
              className="text-lg text-foreground/80"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.1}}
            >
              Need help or want to contribute? Report issues on GitHub or join our community.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-primary"/>
                  </div>
                  <CardTitle>GitHub Issues</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Report bugs or request new features by creating issues on our GitHub
                    repositories
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild>
                    <a href={`${LINKS.github_repos}`} target="_blank"
                       rel="noopener noreferrer">
                      <ShinyText
                        text="Visit GitHub"
                        disabled={false}
                        speed={2}
                      />
                      <ArrowRight size={16} className="ml-2"/>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
            >
              <Card className="hover-scale h-full border-border/50">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare size={24} className="text-primary"/>
                  </div>
                  <CardTitle>Discord Community</CardTitle>
                  <CardDescription className="text-foreground/70">
                    Join our Discord server to get help, share ideas and connect with other users
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild>
                    <a href={`${LINKS.discord}`} target="_blank" rel="noopener noreferrer">
                      <ShinyText
                        text="Join Discord"
                        disabled={false}
                        speed={2}
                      />
                      <ArrowRight size={16} className="ml-2"/>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
