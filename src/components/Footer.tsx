const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">TW</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">TestWise</h3>
                <p className="text-xs text-background/70">AI-Driven Testing</p>
              </div>
            </div>
            <p className="text-sm text-background/80">
              Turning Conversations into Coverage—AI for Smarter Testing
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#solution" className="hover:text-background transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-background transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-background transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Project Info</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Hackathon Project 2024</li>
              <li>Industry Solutions Delivery</li>
              <li>Microsoft Innovation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© 2024 TestWise. Built for Microsoft Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
