// import { EditProfile } from "@/components/edit-profile";
import { customMetaDataGenerator } from "@/lib/generate-metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Generate the metadata using the fetched post data
  return customMetaDataGenerator({
    title: "hello"!,
    // description: ` Created by: ${post.author_username} - ${post.content).slice(0, 150)} + "...Read More`,
    // ogImage: post.image,
    // keywords: post.keywords,
    // canonicalUrl: `https://your-website.com/post/${post.slug}`
  });
}

export default function Home() {
  return <>{/* <EditProfile /> */}</>;
  //
}
