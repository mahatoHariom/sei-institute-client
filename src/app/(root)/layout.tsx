import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";
import { navLinks } from "@/constants/nav-link";
import { Providers } from "@/lib/providers";
// import Hydration from "@/lib/query-hydration";

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <Providers>
      <section>
        <Navbar links={navLinks} />

        <main>{props.children}</main>

        <Footer />
      </section>
    </Providers>
  );
}
