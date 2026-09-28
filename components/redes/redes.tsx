import {
  BsAppIndicator,
  BsEnvelope,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeeca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#b76e79]";

export function Redes() {
  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#b76e79] p-6 shadow-[0_30px_70px_-30px_rgba(183,110,121,0.55)] sm:p-8 md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ed9d8c]/35"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-60 w-60 rounded-full bg-[#8f555f]/35"
      />

      <div className="relative">
        <header className="mb-8 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ffeeca] text-[#b76e79] sm:size-14">
            <BsAppIndicator className="size-6 sm:size-7" />
          </div>

          <div>
            <h2 className="font-belleza text-2xl font-medium text-[#ffeeca] sm:text-3xl">
              Nossas Redes
            </h2>

            <p className="font-montserrat mt-1 text-sm text-[#fdf4e3]/75">
              Fique perto da Castilhos BeCare
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          <a
            href="https://www.instagram.com/castilhosbe_care/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Castilhos BeCare"
            className={`group flex min-h-[3.75rem] w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 ${focusRing}`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors group-hover:bg-[#ffeeca] group-hover:text-[#b76e79]">
              <BsInstagram className="size-5" />
            </div>

            <span className="font-montserrat truncate text-sm font-medium text-[#fdf4e3] sm:text-base">
              @castilhosbe_care
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/message/JQYQMD3MLORLP1?autoload=1&app_absent=0&utm_source=ig"
            aria-label="WhatsApp Castilhos BeCare"
            className={`group flex min-h-[3.75rem] w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 ${focusRing}`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors group-hover:bg-[#ffeeca] group-hover:text-[#b76e79]">
              <BsWhatsapp className="size-5" />
            </div>

            <span className="font-montserrat text-sm font-medium text-[#fdf4e3] sm:text-base">
              (32) 9803-1745
            </span>
          </a>

          <a
            href="mailto:castilhosbecare@gmail.com"
            aria-label="Enviar e-mail para Castilhos BeCare"
            className={`group flex min-h-[3.75rem] w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 ${focusRing}`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors group-hover:bg-[#ffeeca] group-hover:text-[#b76e79]">
              <BsEnvelope className="size-5" />
            </div>

            <span className="font-montserrat truncate text-sm font-medium text-[#fdf4e3] sm:text-base">
              castilhosbecare@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}