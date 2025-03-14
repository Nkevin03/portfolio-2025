import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

// Componente personalizzato Danger
const Danger = ({ children }: { children: React.ReactNode }) => (
    <span className="text-primary_green font-bold">{children}</span>
);


const DoubleImage = ({ children, image1, image2, alt1, alt2 }: { children: React.ReactNode, image1: string, image2: string, alt1: string, alt2: string }) => (
    <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-[49%] w-full">
            <Image
                width={1000}
                height={1000}
                className="rounded-3xl w-full my-10 mx-auto"
                src={image1}
                alt={alt1}
            />
           
        </div>
        <div className="md:w-[49%] w-full">
            <Image
                width={1000}
                height={1000}
                className="rounded-3xl w-full my-10 mx-auto"
                src={image2}
                alt={alt2}
            />
        </div>
    </div>
);


const SingleImage = ({ children, image, alt }: { children: React.ReactNode, image: string, alt: string }) => (
    <div className="flex justify-center">
        <Image
            width={1000}
            height={1000}
            className="rounded-3xl w-full my-10 mx-auto"
            src={image}
            alt={alt}
        />
    </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary_green/10 border-white border-2 rounded-3xl p-4 my-10 mx-auto note">
    <h3 className="text-primary_green font-bold !pt-0">NOTA:</h3>
    <div className="my-4">{children}</div>
  </div>
)

// Componente personalizzato Separator
const Separator = () => <div className="h-2 w-full bg-white my-8"></div>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Componenti HTML standard
    h1: ({ children }) => <h1 className="text-white text-6xl font-bold pb-5">{children}</h1>,
    h2: ({ children }) => <h2 className="md:text-4xl font-bold text-white pt-6 pb-2">{children}</h2>,
    p: ({ children }) => <p className="text-white">{children}</p>,
    
    // Componenti personalizzati
    Danger,
    Separator,
    DoubleImage,
    SingleImage,
    Note,
    // Componente immagine ottimizzato
    img: (props) => (
      <Image
        width={1000}
        height={1000}
        className="rounded-3xl w-full my-10 mx-auto"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
