import Image from "next/image";

const images = [
  "/images/gallery-coffee-1.jpg",
  "/images/gallery-coffee-2.jpg",
  "/images/gallery-coffee-3.jpg",
];

export default function CoffeeGallery() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-10">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[5px] text-[#a37a5d]">
            GALLERY
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#3d2a21]">
            Атмосфера нашей кофейни
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-[#6f5d52]">
            Уютное пространство, аромат свежего кофе
            и место, куда хочется возвращаться.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="
                group
                relative
                h-[520px]
                overflow-hidden
                rounded-[36px]
              "
            >
              <Image
                src={image}
                alt="Coffee"
                fill
                sizes="(max-width:768px)100vw,33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  transition
                  duration-500
                  group-hover:bg-black/0
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}