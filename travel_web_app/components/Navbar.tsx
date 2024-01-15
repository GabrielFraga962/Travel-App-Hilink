import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <div className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            {/* Torna a aplicação capaz de ocultar e mostrar os elementos em tela */}
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {/* Esse trecho é o responsável pelo mapeamento dos links do menu */}
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointe pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          {/* Para se reutilizar o mesmo botão podemos empregar o uso de adereços */}
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green" 
          />
        </div>
        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </div>
  )
}

export default Navbar