import Link from "next/link";
import { NAV_LINKS } from "@/Data";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { getMainSectionData } from "@/app/actions/getMainSectionData";

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const aboutData = await getMainSectionData();
  const aboutText = lang === "fa" ? aboutData.about_fa : aboutData.about_en;

  return (
    <footer className="bg-blue-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold">
              {lang === "fa" ? "کاراژن تشخیص" : "Karagene Tashkhis"}
            </span>
            <p className="text-sm text-gray-100">{aboutText}</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">
              {lang === "fa" ? "لینک‌ها" : "Quick links"}
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.name_en}>
                  <Link
                    href={
                      item.link.startsWith("/") ? item.link : `/${item.link}`
                    }
                    className="text-gray-100 hover:underline"
                  >
                    {lang === "fa" ? item.name_fa : item.name_en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">
              {lang === "fa" ? "تماس" : "Contact"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FiPhone aria-hidden />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail aria-hidden />
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </li>
              <li className="text-sm text-gray-200">
                {lang === "fa" ? "تهران، ایران" : "Tehran, Iran"}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">
              {lang === "fa" ? "خبرنامه" : "Newsletter"}
            </h4>
            <p className="mb-3 text-sm text-gray-100">
              {lang === "fa"
                ? "برای دریافت آخرین اخبار ایمیل خود را وارد کنید."
                : "Enter your email to get the latest updates."}
            </p>
            <form className="flex gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder={lang === "fa" ? "ایمیل شما" : "Your email"}
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-0"
              />
              <button
                type="submit"
                aria-label={lang === "fa" ? "اشتراک" : "Subscribe"}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-700"
              >
                <FiSend />
                <span>{lang === "fa" ? "ارسال" : "Send"}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-blue-800 pt-6 text-sm text-gray-300 md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} KGT.{" "}
            {lang === "fa" ? "تمامی حقوق محفوظ است." : "All rights reserved."}
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">
              {lang === "fa" ? "حریم خصوصی" : "Privacy"}
            </Link>
            <Link href="/terms" className="hover:underline">
              {lang === "fa" ? "قوانین" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
