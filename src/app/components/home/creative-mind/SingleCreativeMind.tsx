import Image from "next/image";
import Link from "next/link";

const SingleCreativeMind = ({ creativemind }: { creativemind: any }) => {
  const { image, name, position, linkedinLink } = creativemind;

  return (
    <div className="group flex md:flex-row-reverse gap-6 items-center max-w-full mx-auto flex-col">
      <div className="group-hover:grayscale">
        <Image
          src={image}
          alt={name}
          width={425}
          height={240}
          className="rounded-2xl"
          unoptimized={true}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-bold text-3xl md:text-6xl font-sans">{name}</p>
          <p className="font-semibold text-dark_black/60 dark:text-white/60 text-xl md:text-2xl">
            {position}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={linkedinLink}
            className="group text-[#b1b1b1] hover:text-indigo-800"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <g clipPath="url(#clip0_1_675)">
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_675">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCreativeMind;
