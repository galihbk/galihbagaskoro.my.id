import { notFound } from "next/navigation";
import { classes } from "@/data/classes";
import ClassPageClient from "./ClassPageClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ClassPage({ params }: Props) {
  const { slug } = await params;

  const data = classes[slug];

  if (!data) return notFound();

  return <ClassPageClient data={data} />;
}
