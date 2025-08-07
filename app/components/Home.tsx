import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ArrowRight, CheckCircle, Users, Clock, Target, BarChart3, MessageSquare, Image, Lightbulb } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#111111]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">a</span>
              </div>
              <span className="text-xl font-semibold">atypica</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-white hover:text-green-400 transition-colors">Home</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">AI Personas</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">Company</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">Pricing</Link>
            </nav>

            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The AI Research Agent
              <br />
              <span className="italic text-gray-300">Simulating Consumers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build a comprehensive understanding of your target audience through AI-powered consumer simulation and behavioral analysis
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-3">
                Try atypica
              </Button>
              <span className="text-gray-300">atypica</span>
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>

          {/* Demo Video/Interface */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-700">
              <div className="bg-black rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-green-400 font-mono text-sm mb-2">atypica</div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">Running consumer simulation...</div>
                  <div className="text-white">Analyzing behavioral patterns for target demographic</div>
                  <div className="text-gray-300">Processing 10,000+ data points</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2a2a2a] rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Consumer Insights</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• 73% prefer mobile-first experiences</div>
                    <div>• Price sensitivity: High (8.2/10)</div>
                    <div>• Brand loyalty: Moderate</div>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Behavioral Patterns</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Peak activity: 7-9 PM</div>
                    <div>• Decision time: 3.2 minutes avg</div>
                    <div>• Conversion rate: 12.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-t border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Persona Research at Scale</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Building Real Person Agents to understand human behavior through advanced AI simulation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">300K</div>
              <div className="text-gray-300">Consumer Profiles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">+1M</div>
              <div className="text-gray-300">Behavioral Data Points</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">{'<30m'}</div>
              <div className="text-gray-300">Research Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Persona Research in Action</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how leading companies leverage AI personas to gain deep consumer insights and drive strategic decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1a1a1a] border-gray-700 overflow-hidden">
              <div className="bg-[#1a1a2a] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-400 font-medium">atypica</span>
                  <span className="text-green-400 text-sm">● Testing</span>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Testing</h3>
                  <p className="text-gray-300 text-sm">
                    Run comprehensive A/B tests with AI personas to validate product concepts and user experiences before launch
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 overflow-hidden">
              <div className="bg-[#2a1a2a] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-purple-400 font-medium">atypica</span>
                  <span className="text-green-400 text-sm">● Planning</span>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
                  <p className="text-gray-300 text-sm">
                    Develop data-driven strategies using AI-generated consumer insights and behavioral predictions
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 overflow-hidden">
              <div className="bg-[#1a2a1a] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Image className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400 font-medium">atypica</span>
                  <span className="text-green-400 text-sm">● Insights</span>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Insights</h3>
                  <p className="text-gray-300 text-sm">
                    Uncover deep consumer motivations and preferences through advanced AI persona analysis
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 overflow-hidden">
              <div className="bg-[#2a2a1a] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-orange-400 font-medium">atypica</span>
                  <span className="text-green-400 text-sm">● Creation</span>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-white mb-2">Creation</h3>
                  <p className="text-gray-300 text-sm">
                    Generate personalized content and experiences tailored to specific consumer segments
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">From question to insights in minutes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-blue-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Persona Generation</h3>
                <p className="text-blue-100 text-sm">
                  Create detailed AI personas based on your target demographics and behavioral data
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Led Interviews</h3>
                <p className="text-green-100 text-sm">
                  Conduct automated interviews with AI personas to gather comprehensive insights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Behavior Analysis</h3>
                <p className="text-purple-100 text-sm">
                  Analyze patterns and preferences to understand consumer decision-making processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Insights</h3>
                <p className="text-orange-100 text-sm">
                  Receive actionable insights and recommendations within minutes of completion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Persona Research Studies</h2>
            <p className="text-gray-300">Real examples of how companies use atypica to drive business decisions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "E-commerce Optimization Study",
                description: "Research on shopping cart abandonment and digital experience preferences",
                color: "bg-blue-600"
              },
              {
                title: "Mobile App User Experience",
                description: "Understanding user behavior patterns and feature adoption rates",
                color: "bg-green-600"
              },
              {
                title: "Brand Perception Analysis",
                description: "Deep dive into consumer sentiment and brand positioning effectiveness",
                color: "bg-purple-600"
              },
              {
                title: "Product Launch Validation",
                description: "Pre-launch testing with AI personas to predict market reception",
                color: "bg-orange-600"
              },
              {
                title: "Customer Journey Mapping",
                description: "Comprehensive analysis of touchpoints and conversion optimization",
                color: "bg-red-600"
              },
              {
                title: "Pricing Strategy Research",
                description: "Understanding price sensitivity and willingness to pay across segments",
                color: "bg-indigo-600"
              }
            ].map((study, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-700 overflow-hidden hover:border-gray-700 transition-colors">
                <div className={`${study.color} h-32`}></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              View All Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Personas from Deep Interviews</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how behavioral research from real interviews helps build more accurate AI personas that understand consumer motivations and decision-making processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-gray-300">
                <p className="mb-4">
                  "We used atypica to Personas as a form of high-powered consumer research that helps us understand our customers at a much deeper level than traditional surveys."
                </p>
                <p className="mb-4">
                  Our data shows that behavioral insights increase sales performance by 40% and reduce customer acquisition costs by 25% when properly implemented in Personas for real business impact.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium">Research Demographics</h4>
                  <p className="text-gray-300 text-sm">Target audience analysis across 15+ demographic segments</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">Behavioral Insights</h4>
                  <p className="text-gray-300 text-sm">Deep understanding of purchase motivations and decision factors</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">Scale & Coverage</h4>
                  <p className="text-gray-300 text-sm">Analysis across multiple markets and consumer segments</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-8 text-black">
              <div className="text-6xl font-bold mb-4">85%</div>
              <div className="text-xl font-semibold mb-2">Accuracy Rate</div>
              <div className="text-sm opacity-80">
                of predictions match real consumer behavior in validation studies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Build Your Custom AI Research Panel</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start understanding your customers at a deeper level with AI-powered persona research that delivers insights in minutes, not months
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">a</span>
                </div>
                <span className="text-xl font-semibold">atypica</span>
              </div>
              <p className="text-gray-300 text-sm">
                AI-powered consumer research platform for modern businesses
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>AI Personas</div>
                <div>Research Studies</div>
                <div>Analytics</div>
                <div>Integrations</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>About</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            © 2024 atypica. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
