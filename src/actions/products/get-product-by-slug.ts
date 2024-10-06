import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug: slug,
      },
    });

    if (!product) return null;
    return {};
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener producto por slug");
  }
};
