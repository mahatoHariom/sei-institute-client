import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";
import { navLinks } from "@/constants/nav-link";

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar links={navLinks} />

      <main>{props.children}</main>

      <Footer />
    </section>
  );
}
