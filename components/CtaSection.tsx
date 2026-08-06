'use client';

import SectionHeader from './SectionHeader';
import Cubes from './reactbits/Cubes';

interface CtaSectionProps {
  onOpenRegister: () => void;
  onOpenWhatsApp: () => void;
  onScrollToTimeline: () => void;
}

export default function CtaSection({
  onOpenRegister,
  onOpenWhatsApp,
  onScrollToTimeline,
}: CtaSectionProps) {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 overflow-hidden pointer-events-none">
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <Cubes 
            gridSize={14}
            maxAngle={60}
            radius={5}
            borderStyle="1px solid #2A2A2A"
            faceColor="#0A0A0A"
            rippleColor="#FF4D1C"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          secCode="SEC-07"
          numeral="07"
          title="EXECUTION"
          subtitle="INITIALIZE YOUR PROTOCOL ENTRY & JOIN THE INSTITUTIONAL NETWORK"
        />

        {/* 3-Column Closing Card Grid (Exact Reference Image 12 Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1: REGISTER NOW / DEVFOLIO */}
          <div className="bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF4D1C] transition-all flex flex-col justify-between p-8 min-h-[420px] relative group">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <span className="w-2 h-2 bg-[#FF4D1C] shadow-[0_0_8px_#FF4D1C]" />
              <span className="font-mono-custom text-xs text-[#8A8A8A]">01</span>
            </div>

            {/* Center Dot-Matrix Illustration Icon */}
            <div className="my-auto py-4 text-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity overflow-hidden flex justify-center">
              <pre className="font-mono-custom text-[2.5px] leading-[2.5px] sm:text-[3px] sm:leading-[3px] text-[#F2F0EB] inline-block tracking-tighter">
{`                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                        .....                                  ....                                                   
                                                     .::-::-#...............................:==#%%#.                                                  
                                                   .::::::::%....::::::.:+-.........::-:.......*###.                                                  
                                                  .:::::::::#..:=++-:+.-:::+=--=-=*.=*.=.-:....*##%.                                                  
                                                 .::::::::::#:.-:-=-*:-+::-=.-=:::+=-=-=*-=....*##%.                                                  
                                                 .::::::::::*-.:+:+:-::+*=+==.:++*#*=-*::+:....+##%.                                                  
                                                .:-:::::::::+-..-#+:..:++=+++-=*-:.:---:-=.....+##%                                                   
                                                .:-:::::::::+=.....-:..-===*#*=:--.....:.......+*#%.                                                  
                                                .:::::::::::==...............:::--===++**##%%%@@%%%.                                                  
                                                .:::::::::::=#@@%@%%@%*++%#%@%%@%%@%*##@@@@@@@@@@@%.                                                  
                                                .:::::::::::=*%%%%%%%%@@@@@@@@@@@@%*==*@%@@@@@%%@@%..                                                 
                                                .-::::::::::-#%%%@@@+=+=+====+@@@@%%++#*%@@@@@@@@@%:.                                                 
                                                .:::::::::::-*@@@@@@@%@@@@@@@@@@@@%@@@%%@@@@@@@@@@%:.                                                 
                                                .:-:::::::::-*@@@@@@%%@%@%#@@@@@@@@@@*++%@@@@@@%%@%:                                                  
                                                .:-:::::::::-++@%@@@@@@@@@@@@@@@@@@@%*++#%@@@@@%%@%:.                                                 
                                                .::::::::::::++@%@%%@@@@@@@@@@@@@@@%@###*%@@@@@@@@%-.                                                 
                                                .:-::::::::::*+%@@@@@@@@@@@@@@@@@@@%@@@%%%@@@@@@@@%+.                                                 
                                                .:-::::::::::#@@@@@@@@@@@%@@@@@@@@@@%%%%@%%@@@@@@@%#.                                                 
                                                .:-::::---:::*%%%@@@@@@@@@%@@%@@@@@@%#%%@%%@@@@@@@@%:                                                 
                                                .:-::==-==-=:-%%%@@@@@*@@@@@@@@@@@@@@%%%#@@@@@@@@@@%%.                                                
                                                .:-:-=-+=-=--:#%#%@@@@@@@@@%@@@@@@@@@@%%%@@@@@@@%%%%@-                                                
                                                .:--=--=-:-:--+%%@%@@@@@@@@@@@@@@@@@@@=--:#%@@@%%%%%%%.                                               
                                                ..--+-+:::+--::%=%%@%%@@@@@@@@@@@@@@@%*:::=%@@@%%%%%%%#.                                              
                                                ..-=-==::::--::=%*@@@@@@@@@@@@@@@@@@@%%.=.-@@@@%%%%%%%%#.                                             
                                                 .-=:+:::::-+--:*%@@@@@@@@@@@@@@@@@@@@%-:.:%@@@@%%%%%%%@*.                                            
                                                 .-+--**-::-:+=::#@@@@**@@@@@@@@@@@@@@@+..:#%@@@@%%%%@@@@*.                                           
                                                 .-%%#++*-::*=-:::%%@@@@@@@@@@@@#%++*@%%%%@@@@@@@@@@@@@@@@%.                                          
                                                 .-%@*++++::++=:::-%@#*@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@@@@@@%.                                         
                                                 .-%******:::=:::::-%@@@@@@@@@@@@@@@#**%@@@@@@@@@@@@@@@@@@@@%-.                                       
                                                ..=****#++::::::::::=%@@@@@@@#%@@%==@##@@%%@%**@*::+@@@@@@@@@@#.                                      
                                                ..=**#*##*-::::::::::-%%@@@@@%%@@@@%@##%***#%%%@@%%@@@%%%%%%%%@=.                                     
                                                ..-+####%*-::::::::::::##+:=@#%%#@@@%******####%%%%%@@@%%%%%@@#.                                      
                                                ..-+%####*--::::::::::::*%####*++++**##%%@%%%%%@@@@@@@@@@@%@@@-.                                      
                                                ..-=%#####%##=::::::::::=%#%%%%%%%%@@%%@@@@@@%*::+@@@@@@@@@@@%.                                       
                                                ..=%%%%####%%+::::::::::#@@@@@@@@@@#===*@@@@%=*=-#@@@@@@@%@@@:                                        
                                                ..=%%%%#+-*##+:::::::::-%@@@@@@@@@%==*##@@#@+::=#@@@@@@@@%@@*.                                        
                                                ..-%%%%###**#*-::::::::*@@@@@@@@@@=*#*##@@*=*:-*@@@@@@@@%@@@:.                                        
                                                ..:=*%*==##=#%+::::::::%@@@@@@@@@*+*#%@@@@@@@@%%%%%%@@@@@@@+..                                        
                                                ..-****--:-=##+:::::::+@@@@@@@@@@@@@%%%%@%@@@@@@@@@@@@@@@@%-..                                        
                                                ..:+%+*----*##++::::::%@@%%%%%%%@%%%%%%@@@@@@@@@@@@@@@@@@@%:                                          
                                                 .:=#=+#--+-*#+=:::::=%%%%%%%%%%%%%%%%%@@@@%%@@@@@@@@@@@@@%:                                          
                                                 .:%%##%--:+%+++:::::*%%%%%%%%%%%%%#*++======%@@@@@@@@@@@@%:                                          
                                                  :*#%%#%%%%%%*=:::::#%%%%%%%%%%%%%-++++*#%%%@@@@@@%@@@@@@%:                                          
                                                  :---==*%%###*-:::::+%%%%%%%%%%%%%%%@@@@@@@#+##+*+#@@@@@@%...                                        
                                                  :--=---**#=+--:::::*%%%%%%%%%%%%%#=%@@@@@+*++*#+%@@@@@@@%.                                          
                                                  :-==----*=---::=:::+%%%%%%%%+#=-*##@@@@@@@@@@@@@@@@@@@@@%.                                          
                                                  .--==--------::::::*%%%%%:+=#%@%%%%@@@@@@@@**@@=+*@@@@@@%.                                          
                                                  .---=---------:-:-:+%%%%%%%%@@@@@@%@@@@@%+*++*#%@@@@@@@@%.                                          
                                                  .-=*=+--=-------:-:+%%%%%%#*+-=-=-=%@@@@@@@@@%*#@@@@@@@@%.                                          
                                                  .+--=-*----+=--*+-:+%@@@%=++**#%@@@@@@@@@@=+***=+%@@@@@@%.                                          
                                                  .=*#+#--+-=------*+*%@@@@@@@@@@%%%@@@@@@@=++++#+@@@@@@@@%.                                          
                                                  .+-+###--*--=++**--*%@@@@@@*++===-=#@@@@@@*==+%@@@@@@@@@%.                                          
                                             ......+#%%@==#-=++==-##%%%@@@%=-=-===+#@@@@@@@@@@#+-+=*@@@@@@%.                                          
                                       ............*=%%@#=-*--=+=##-=#%@@@@@%%@@@@@@@@@@@@%+===+*@@@@@@@@@%.                                          
                                      ........::::-#=%+@%+%#=*+=*@%**#%@@@@@@%#*+=-==#@@@@@@@@@@@%+*@@@@@@%.                                          
                                     .....::::----=%@#@@*#=*+*#*#@@*%%%@@@%+==-==+*%@@@@@@%-=*--==++@@@@@@%.                                          
                                     .....:::---===%@#@%%@@+=*%##@@##%%@@@@@@@@@@@@%*@@@@@@=+%@@@@@@@@@@@@%.                                          
                                      ......::--===%@**%@@@%*%@%@@@%@%%@@@@%**+===+=+@@@@@@%#*+##*@@@@@@@@%.                                          
                                        ......::--=#@%@@@@@@@#*@@+@+*%%@@@@*++++*##%@@@@@@@%==+==+**@@@@@@#...                                        
                                           ......::+%@@@@@*#@@@@@@@@@%%@@@@%%@@@@@@+=*@@@@#=++=+*#%@@@@@@@#...                                        
                                             ......::-*%%@@@@%*@@@@@#@%@@@@%%*++*++==%@@@@@@@@@@@@%%*+=-::....                                        
                                                ......::=*@%%@@@@@@@@@%@@@%++++*#%@%@@@@@@@@%#*=--::::........                                        
                                                   ......::=*@@%@@@@@@%@@@@%@@@@@@@@@%#*+=--:::...........                                            
                                                      ......::=*%@@@@@%@@@@@@@%%#+=--:::...........                                                   
                                                         ......::=#@@@%%%#+=--:::...........                                                          
                                                            ......::-=-:::............                                                                
                                                               ...............                                                                        
                                                                   .....                                                                              `}
              </pre>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8 border-b border-[#2A2A2A] pb-6">
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F2F0EB]">
                REGISTER NOW
              </h3>
              <p className="font-mono-custom text-xs text-[#8A8A8A] mt-1 tracking-widest uppercase">
                DEVFOLIO PLATFORM
              </p>
            </div>

            {/* Action Row */}
            <button
              onClick={onOpenRegister}
              className="w-full py-3 border border-[#2A2A2A] group-hover:border-[#FF4D1C] text-[#F2F0EB] group-hover:text-[#FF4D1C] font-mono-custom text-xs tracking-widest uppercase transition-all flex justify-center items-center gap-2"
            >
              <span>VIEW</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Card 2: EVENT TIMELINE / FULL SCHEDULE */}
          <div className="bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF4D1C] transition-all flex flex-col justify-between p-8 min-h-[420px] relative group">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <span className="w-2 h-2 bg-[#FF4D1C] shadow-[0_0_8px_#FF4D1C]" />
              <span className="font-mono-custom text-xs text-[#8A8A8A]">02</span>
            </div>

            {/* Center Dot-Matrix Illustration Icon */}
            <div className="my-auto py-8 text-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
              <pre className="font-mono-custom text-[9px] text-[#F2F0EB] leading-none inline-block">
{`  +-------+
  |  o o  |
  |   |   |
  |  ---  |
  +-------+`}
              </pre>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8 border-b border-[#2A2A2A] pb-6">
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F2F0EB]">
                EVENT TIMELINE
              </h3>
              <p className="font-mono-custom text-xs text-[#8A8A8A] mt-1 tracking-widest uppercase">
                FULL SCHEDULE & ROADMAP
              </p>
            </div>

            {/* Action Row */}
            <button
              onClick={onScrollToTimeline}
              className="w-full py-3 border border-[#2A2A2A] group-hover:border-[#FF4D1C] text-[#F2F0EB] group-hover:text-[#FF4D1C] font-mono-custom text-xs tracking-widest uppercase transition-all flex justify-center items-center gap-2"
            >
              <span>BROWSE</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Card 3: JOIN THE COMMUNITY / WHATSAPP GROUP */}
          <div className="bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF4D1C] transition-all flex flex-col justify-between p-8 min-h-[420px] relative group">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <span className="w-2 h-2 bg-[#FF4D1C] shadow-[0_0_8px_#FF4D1C]" />
              <span className="font-mono-custom text-xs text-[#8A8A8A]">03</span>
            </div>

            {/* Center Dot-Matrix Illustration Icon */}
            <div className="my-auto py-8 text-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
              <pre className="font-mono-custom text-[9px] text-[#F2F0EB] leading-none inline-block">
{`    _/\_
  /      \\
 (  o  o  )
  \\  --  /
    '--'`}
              </pre>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8 border-b border-[#2A2A2A] pb-6">
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F2F0EB]">
                JOIN THE COMMUNITY
              </h3>
              <p className="font-mono-custom text-xs text-[#8A8A8A] mt-1 tracking-widest uppercase">
                WHATSAPP GROUP
              </p>
            </div>

            {/* Action Row */}
            <button
              onClick={onOpenWhatsApp}
              className="w-full py-3 border border-[#2A2A2A] group-hover:border-[#FF4D1C] text-[#F2F0EB] group-hover:text-[#FF4D1C] font-mono-custom text-xs tracking-widest uppercase transition-all flex justify-center items-center gap-2"
            >
              <span>JOIN</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-32 pt-16 border-t border-[#2A2A2A] text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl italic uppercase text-[#F2F0EB] tracking-wide">
            EVERY BREAKTHROUGH HAS AN ORIGIN.
          </h2>

          <div className="mt-8 font-mono-custom text-xs text-[#8A8A8A] tracking-widest uppercase">
            COMPUTER SOCIETY OF INDIA · VIT CHENNAI CHAPTER // 2026
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 font-mono-custom text-xs text-[#8A8A8A]">
            <button onClick={onOpenRegister} className="hover:text-[#FF4D1C] transition-colors">
              [ DEVFOLIO ]
            </button>
            <button onClick={onOpenWhatsApp} className="hover:text-[#FF4D1C] transition-colors">
              [ WHATSAPP ]
            </button>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">
              [ DISCORD ]
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">
              [ INSTAGRAM ]
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">
              [ LINKEDIN ]
            </a>
            <a href="mailto:csi.vitc@gmail.com" className="hover:text-[#FF4D1C] transition-colors">
              [ EMAIL US ]
            </a>
          </div>

          <div className="mt-12 text-[10px] font-mono-custom text-[#8A8A8A]/50 tracking-wider">
            CSI ORIGIN 2026 © ALL RIGHTS RESERVED. DESIGNED FOR HIGH-STAKES INSTITUTIONAL BUILDERS.
          </div>
        </footer>
      </div>
    </section>
  );
}
