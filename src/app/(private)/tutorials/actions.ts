"use server";
import { db } from "@/database/client";

export const getPosts = async ({
  userId,
  q,
  page,
  perPage,
}: {
  page: number;
  perPage: number;
  q?: string;
  userId: string;
}) => {
  const result = await Promise.all([
    db.post.findMany({
      select: {
        author: true,
        id: true,
        title: true,
        content: true,
        tags: true,
        views: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        images: true,
        PostReaction: true,
      },
      where: {
        AND: [
          {
            OR: [
              {
                status: "PUBLISHED",
              },
              {
                author: {
                  id: userId,
                },
              },
            ],
          },
          q
            ? {
                OR: [
                  { tags: { has: q.toLowerCase() } },
                  {
                    title: {
                      contains: q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    content: {
                      contains: q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    author: {
                      name: {
                        contains: q,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
      take: perPage,
      skip: (page - 1) * perPage,
    }),

    db.post.count({
      where: {
        AND: [
          {
            OR: [
              {
                status: "PUBLISHED",
              },
              {
                author: {
                  id: userId,
                },
              },
            ],
          },
          q
            ? {
                OR: [
                  { tags: { has: q.toLowerCase() } },
                  {
                    title: {
                      contains: q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    content: {
                      contains: q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    author: {
                      name: {
                        contains: q,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {},
        ],
      },
    }),
  ]);

  return result;
};
