import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      <div className="relative w-[140px] h-[70px] sm:w-[140px] sm:h-[60px]">
        <Image
          src="/images/logo/hawkrix logo.png"
          alt="Hawkrix Logo"
          fill
          className="dark:hidden object-contain"
          quality={100}
          priority
        />
        <Image
          src="/images/logo/hawkrix logo.png"
          alt="Hawkrix Logo Dark"
          fill
          className="hidden dark:block object-contain invert"
          quality={100}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
