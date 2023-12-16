import Image from 'next/image';
import prisma from './lib/prisma';

export default async function Home() {
  const data = await prisma.usd_jpy_1min.findMany({
    take: 100,
    orderBy: {
      datetime: 'asc',
    },
  });
  console.log(data);
  return (
    <h1>Financial UpDown Annotator</h1>
  );
}
