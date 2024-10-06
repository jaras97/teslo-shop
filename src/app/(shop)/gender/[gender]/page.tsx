export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };

  searchParams: {
    page?: string;
  };
}

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page, gender: gender as Gender });

  if (!products.length) {
    redirect(`/gender${gender}`);
  }

  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "Para todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }
  return (
    <div>
      <Title
        title={`Articulos de ${labels[gender]}`}
        subtitle={`filtro de ${gender}`}
        className={`mb-2`}
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
