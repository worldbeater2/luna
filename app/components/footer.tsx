export default function Footer() {
    
    return (
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
    )
}
