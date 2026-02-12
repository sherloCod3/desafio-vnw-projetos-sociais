import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDropdown]);

  return (
    <header className="w-full h-[100px] bg-brand-blue relative">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-8">
          <svg width="87" height="66" viewBox="0 0 87 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.1877 39.0749L50.2117 36.1096C39.1682 26.3402 31.95 19.7539 31.95 11.6755C31.95 5.1024 37.0522 0 43.6254 0C47.2466 0 50.8542 1.70175 53.1877 4.45989C55.5213 1.70175 59.1288 0 62.75 0C69.3231 0 74.4255 5.1024 74.4255 11.6755C74.4255 19.7537 67.2075 26.3402 56.1638 36.1096L53.1877 39.0749Z" fill="#FD7267"/>
            <path d="M87 38.5954C86.2114 39.4527 85.2725 40.1935 84.4132 40.9737C83.3772 41.9156 82.3137 42.8264 81.2393 43.7229C79.2431 45.3898 77.2059 47.0054 75.2009 48.6617C74.8061 47.6566 73.9552 46.7978 73.0699 46.2103C71.7253 45.3172 70.1017 44.8585 68.4679 44.6202C69.4742 43.3116 71.1675 42.7705 72.6264 42.1247C74.3273 41.3732 75.6861 40.1899 77.1424 39.0597C78.5774 37.9458 80.1363 36.9384 81.9953 36.803C83.7323 36.6767 85.8676 37.1758 87 38.5954Z" fill="white"/>
            <path d="M84.8404 35.069C84.7034 35.4961 84.3925 35.8869 84.1383 36.2487C83.6503 36.1508 83.1545 36.0932 82.6664 36.0658C80.6126 35.9479 78.7767 36.9311 77.1765 38.1162C75.5712 39.3043 74.1362 40.6603 72.2903 41.4769C70.576 42.2344 68.7385 42.8688 67.6564 44.5032C67.6529 44.5079 67.6503 44.5125 67.6478 44.5172C67.1107 44.4615 66.5783 44.4256 66.0592 44.4021C65.8818 44.3942 65.7047 44.3881 65.5273 44.3836C66.7396 43.0654 68.2602 42.0823 69.7787 41.1397C71.4547 40.0974 73.0561 39.0196 74.5945 37.7816C76.1355 36.5409 77.711 35.2391 79.5882 34.5445C81.249 33.9305 83.4962 33.7281 84.8404 35.069Z" fill="white"/>
            <path d="M78.6989 34.1029C77.2607 34.7424 75.9687 35.7499 74.7585 36.7149C73.9569 37.3534 73.1689 38.007 72.3393 38.6098C71.4697 39.2426 70.5461 39.8014 69.6316 40.3671C67.7993 41.4995 65.9358 42.681 64.5679 44.3746C63.2217 44.3843 61.8766 44.4745 60.5328 44.5748C61.7262 43.3804 63.127 42.4128 64.4933 41.4245C66.0623 40.2911 67.4582 39.0235 68.8687 37.7034C70.2429 36.4186 71.7032 35.1763 73.4769 34.4882C75.0982 33.8593 76.9812 33.7265 78.6989 34.1029Z" fill="white"/>
            <path d="M56.1787 52.7326C56.0907 52.7195 56.0083 52.7162 55.9641 52.6957C55.4839 52.6518 55.0015 52.6151 54.5193 52.5867L53.3129 52.5289C53.2939 52.5172 53.1388 52.5435 53.1232 52.5297C52.4714 52.5152 51.8187 52.5186 51.1679 52.5445L50.4776 52.582C49.8762 52.6224 49.2756 52.682 48.6789 52.7663C45.9729 53.1494 43.4004 53.9771 40.9518 55.1837C40.5292 55.3927 40.157 54.7601 40.5817 54.5511C43.3041 53.2089 46.1808 52.3015 49.2041 51.9671C51.5078 51.7121 53.829 51.7597 56.1327 51.9762C56.1757 51.978 56.2186 51.9817 56.2628 51.988C56.6027 52.0212 56.9412 52.0577 57.2803 52.0972C59.5419 52.3621 61.7832 52.7876 64.0528 52.9882C66.3383 53.1909 68.7501 53.2432 70.9476 52.4813C72.6591 51.8882 75.1726 51.0702 74.6188 48.8802C74.0845 46.7625 71.745 46.3223 69.8336 45.7805C67.2832 45.0582 64.612 45.0178 61.9804 45.0884C59.3667 45.1599 56.7468 44.6818 54.1324 44.6149C51.67 44.5516 49.1656 43.5794 47.0029 42.3316C46.9766 42.3217 46.949 42.3079 46.9225 42.2895C46.9107 42.2814 46.8988 42.2729 46.8868 42.2647C46.8832 42.2629 46.8795 42.2611 46.8769 42.2585C46.8675 42.254 46.8613 42.2473 46.853 42.2418C43.2916 39.7879 39.4515 36.6088 34.9247 36.4675C32.5403 36.3934 30.2366 37.0387 27.9211 37.5108C26.7853 37.7426 25.6119 37.9765 24.4495 38.0002C23.2936 38.024 22.1385 38.0047 20.9826 37.9984C18.2873 37.9828 15.6116 38.1277 13.0685 39.1067C10.643 40.0409 8.32186 41.2509 6.19325 42.7451C4.05999 44.243 2.24028 46.0471 0.361185 47.8392C0.241195 47.9537 0.121003 48.0682 0 48.1821L9.85091 62.8971C10.4377 62.468 11.0482 62.073 11.6862 61.7238C13.9936 60.4614 16.4805 59.872 19.1098 59.9095C21.7783 59.947 24.4542 60.4227 27.0494 61.015C29.9526 61.6786 32.821 62.479 35.6996 63.2378C38.5623 63.9914 41.4447 64.7203 44.3652 65.2116C47.1933 65.6863 50.2183 65.967 53.0454 65.3305C53.073 65.3243 53.0997 65.3214 53.1263 65.3206C55.8066 63.7164 58.0323 61.5091 60.2381 59.3217C61.3381 58.2309 62.4372 57.1362 63.6006 56.1132C64.4953 55.3268 65.421 54.5025 66.4433 53.8618C63.6233 53.8573 60.7762 53.2862 57.983 52.9185L56.1787 52.7326Z" fill="white"/>
            <path d="M60.739 43.1179C60.7597 43.1171 60.7804 43.1165 60.801 43.1158V43.0627C60.7806 43.0814 60.7593 43.0992 60.739 43.1179Z" fill="black"/>
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          <Link to="/doacao" className="text-white font-source text-2xl lg:text-[28px] font-normal hover:opacity-80 transition-opacity">
            Doação
          </Link>
          <Link to="/voluntariado" className="text-white font-source text-2xl lg:text-[28px] font-normal hover:opacity-80 transition-opacity">
            Voluntariado
          </Link>
          <Link to="/mentoria" className="text-white font-source text-2xl lg:text-[28px] font-normal hover:opacity-80 transition-opacity">
            Mentoria
          </Link>
          <Link to="/eventos" className="text-white font-source text-2xl lg:text-[28px] font-normal hover:opacity-80 transition-opacity">
            Eventos & Palestras
          </Link>
        </nav>

        {/* User Avatar with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-[76px] h-[76px] rounded-full border-[5px] border-brand-cyan overflow-hidden hover:opacity-80 transition-opacity"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4711d1f7bb90741e7e3eed26f687e94511e603b3?width=152"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-[250px] bg-brand-blue shadow-lg rounded-lg overflow-hidden z-50">
              <button className="w-full px-6 py-3 text-left text-white font-source text-base hover:bg-white/10 transition-colors">
                Vinícius Bispo
              </button>
              <button className="w-full px-6 py-3 text-left text-white font-source text-base hover:bg-white/10 transition-colors">
                Voluntariados
              </button>
              <button className="w-full px-6 py-3 text-left text-white font-source text-base hover:bg-white/10 transition-colors">
                Configurações de conta
              </button>
              <button className="w-full px-6 py-3 text-left text-white font-source text-base hover:bg-white/10 transition-colors">
                Sair
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button - Hidden on desktop */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-brand-blue border-t border-white/10">
          <nav className="flex flex-col">
            <Link
              to="/doacao"
              className="text-white font-source text-xl font-normal px-6 py-4 hover:bg-white/10 transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Doação
            </Link>
            <Link
              to="/voluntariado"
              className="text-white font-source text-xl font-normal px-6 py-4 hover:bg-white/10 transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Voluntariado
            </Link>
            <Link
              to="/mentoria"
              className="text-white font-source text-xl font-normal px-6 py-4 hover:bg-white/10 transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Mentoria
            </Link>
            <Link
              to="/eventos"
              className="text-white font-source text-xl font-normal px-6 py-4 hover:bg-white/10 transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Eventos & Palestras
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
