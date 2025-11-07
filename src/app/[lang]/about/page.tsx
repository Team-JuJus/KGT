import AboutUs from "@/components/about-page/about-us";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = await params;
  const isEnglish = lang === "en";
  return (
    <main>
      <div className="mb-20 flex items-center justify-center bg-blue-900 p-2 text-white">
        <h2 className="text-3xl font-bold">
          {isEnglish ? "About Us" : "درباره ما"}
        </h2>
      </div>
      <AboutUs isEnglish={isEnglish} />
    </main>
  );
};

export default page;
