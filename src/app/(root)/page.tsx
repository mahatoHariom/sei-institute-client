"use client";
import CounterDetailPage from "@/components/home/counter-details";
import HomeCarousel from "@/components/home/home-carousel";
// import { useGetProfile } from "@/hooks/users/use-get-profile-hooks";

export default function Home() {
  // const { data, isSuccess } = useGetProfile();
  // console.log(data, isSuccess, "both");
  return (
    <>
      <HomeCarousel />
      <CounterDetailPage />
    </>
  );
  //
}
